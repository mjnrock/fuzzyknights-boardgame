import Subscribable from "./Subscribable";
import Organelle from "./Organelle";
import { cloneDeep } from "lodash";
import { NewUUID } from "./../Helper";
import { interval } from "rxjs";
import { timeInterval } from "rxjs/operators";

class Cell extends Subscribable {
	constructor(organelles = {}, activator = null, state = {}) {
		super(state);

		if(activator === 1 || activator === true || activator === null || activator === void 0) {
			this.Activator = () => true;
		} else {
			this.Activator = activator;
		}

		this.Organelles = organelles;
		this.Behaviors = Object.freeze({});
		this.Loops = Object.freeze([]);
	}

	Cycle(timeout = 1000) {
		let source = interval(timeout).pipe(
			timeInterval()
		)
		.subscribe(
			(timer) => {
				this.Invoke(Cell.EnumEventType.CYCLE);

				this.Metabolize({
					Timer: timer,
					State: this.GetState()
				});
			}
		);

		this.Loops = Object.freeze([
			...this.Loops,
			source
		]);

		return this;
	}
	Stagnate() {
		this.Loops = Object.freeze([]);

		return this;
	}

	// get (target, prop) {
	// 	if(target[prop]) {
	// 		return target[prop];
	// 	}

	// 	if(target.Behaviors[prop]) {
	// 		return new Proxy(() => {}, {
	// 			apply: function(target, _this, ...args) {
	// 				return _this.Perform(prop, ...args[0]);
	// 			}
	// 		});
	// 	}

	// 	return new Proxy(() => {}, {
	// 		apply: function(target, _this, ...args) {
	// 			let index = false;

	// 			_this.Organelles.forEach((o, i) => {
	// 				if(o.Name === prop) {
	// 					index = i;
	// 				}
	// 			});

	// 			return _this.Organelles[index].Metabolize(args[0], args[1] ? args[1] : null, _this);
	// 		}
	// 	});
	// }

	Train(key, fn, ...args) {
		let Behaviors = {};
		Behaviors[key] = {
			key: key,
			callback: fn,
			args: [
				...args
			]
		};

		this.Behaviors = Object.freeze({
			...this.Behaviors,
			...Behaviors
		});

		return this;
	}
	Untrain(key) {
		delete this.Behaviors[key];

		return this;
	}

	Learn(key, cell) {
		this.Train(
			key,
			cell.Behaviors[key].callback
		);

		return this;
	}
	LearnAll(cell) {
		this.Behaviors = {
			...this.Behaviors,
			...cell.Behaviors
		};
		
		return this;
	}
	Teach(key, cell) {
		cell.Train(
			key,
			this.Behaviors[key].callback,
			this.Behaviors[key].args
		);

		return this;
	}
	TeachAll(cell) {
		cell.Behaviors = {
			...this.Behaviors,
			...cell.Behaviors
		};
		
		return this;
	}

	Perform(key, ...args) {
		if(args.length >= 0) {
			this.Behaviors[key].callback(this, ...args);
		} else {
			this.Behaviors[key].callback(this, ...this.Behaviors[key].args);
		}

		return this;
	}

	AddOrganelle(callback) {
		let organelle = new Organelle(callback);

		this.Organelles[organelle.UUID] = organelle;

		return this;
	}
	RemoveOrganelle(input) {
		if(typeof input === "string" || input instanceof String) {
			delete this.Organelles[input];
		} else if(typeof input === "object") {
			delete this.Organelles[input.GetHash()];
		}

		return this;
	}

	Metabolize(payload = {}, oldPayload = null) {
		oldPayload = oldPayload === null || oldPayload === void 0 ? Object.freeze(payload) : Object.freeze(oldPayload);

        let isActivated = this.Activator(payload);
		
		if(isActivated) {
			this.Invoke(Cell.EnumEventType.ACTIVATION);

			Object.values(this.Organelles).forEach((organelle, i) => {
				payload = organelle.Metabolize(payload, oldPayload, this);
			});
			
			this.Invoke(Cell.EnumEventType.METABOLISM, {
				Influx: oldPayload,
				Outflux: payload
			});
		} else {
			this.Invoke(Cell.EnumEventType.ATTEMPT);
		}

		return this;
    }
    
    Entangle(cell) {
        this.Subscribe({
            next: (caller, obj) => {
                if(obj.type === Cell.EnumEventType.METABOLISM) {
                    cell.Metabolize(obj.data.Outflux);
                }
            }
        });

        return cell;
    }
    
    Copy() {
		let cell = cloneDeep(this);
		cell.UUID = NewUUID();

		return cell;
    }
    GetHash() {
        let organelles = [];
        this.Organelles.forEach((org, i) => {
            organelles.push(org.GetHash());
        });

        return Subscribable.Hashify({
            Activator: this.Activator,
            Organelles: organelles
        });
	}
}

Cell.EnumEventType = Object.freeze({
	CYCLE: "cell-oncycle",
	ACTIVATION: "cell-onactivation",
	ATTEMPT: "cell-onattempt",
	METABOLISM: "cell-onmetabolism"
});

export default Cell;