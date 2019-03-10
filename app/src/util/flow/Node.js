import { Subject } from "rxjs";

class Node {
	constructor(cond, influx = null, outflux = []) {
		this.Subject$ = new Subject();
		this.Conditional = cond;
		
		this.Energy = 0;
		this.Influx = influx;
		this.Outflux = outflux;
	}

	AddTrigger(trigger) {
		this.Outflux.push(trigger);

		return this;
	}
	RemoveTrigger(UUID) {
		this.Outflux = this.Outflux.filter(t => t.UUID !== UUID);

		return this;
	}

	Run(payload) {
		let _original = Object.freeze(payload),
			isActivated = this.Conditional(payload);
		
		if(isActivated) {
			this.Outflux.forEach((trigger, i) => {
				trigger.Attempt(this, payload);
			});
		}


		let state = {
			OldState: _original
		};
		if(typeof this.Influx === "function") {
			state.NewState = Object.freeze(this.Influx(payload));
		}

		this.Subject$.next(state);
	}

	Run(payload) {
		let _original = Object.freeze(payload),
			charge = +this.Conditional(payload);

		this.Energy += charge;
		this.Outflux.forEach((trigger, i) => {
			payload = trigger.Attempt(this.Energy, payload);
		});

		let state = {
			OldState: _original
		};
		if(typeof this.Influx === "function") {
			state.NewState = Object.freeze(this.Influx(payload));
		}

		this.Subject$.next(state);
	}

	Subscribe(subscriber) {
		this.Subject$.subscribe(subscriber);
	}
}

export default Node;