import Subscribable from "./Subscribable";
import Organelle from "./Organelle";

class Cell extends Subscribable {
	constructor(organelles = {}, activator = null, state = {}) {
		super(state);

		if(activator === 1 || activator === true || activator === null || activator === void 0) {
			this.Activator = () => true;
		} else {
			this.Activator = activator;
		}

		this.Organelles = organelles;
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

	Metabolize(payload = {}) {
		let oldPayload = Object.freeze(payload),
            isActivated = this.Activator(payload);
            
            console.log(this.Activator);
		
		if(isActivated) {
			this.Invoke(Cell.EnumEventType.ACTIVATION);

			Object.values(this.Organelles).forEach((organelle, i) => {
				payload = organelle.Metabolize(payload, this);
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
    
    Chain(cell) {
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
        let organelles = [];
        this.Organelles.forEach((org, i) => {
            organelles.push(org.Copy());
        });

        return new Cell(organelles, this.Activator, this.State);
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
	ACTIVATION: "cell-onactivation",
	ATTEMPT: "cell-onattempt",
	METABOLISM: "cell-onmetabolism"
});

export default Cell;