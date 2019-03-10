import { Subject } from "rxjs";
import { NewUUID } from "../Helper";

class Cell {
	constructor(activator, organelles = []) {
		this.UUID = NewUUID();
		this.Subject$ = new Subject();

		this.Activator = activator;
		this.Organelles = organelles;

		this.State = Object.freeze({});
	}

	SetState(state) {
		this.Subject$.next({
			Type: Cell.EnumEventType.STATE,
			OldState: Object.freeze(this.State),
			NewState: Object.freeze(state)
		});

		this.State = Object.freeze(state);

		return this;
	}

	Metabolize(payload) {
		let _oldPayload = Object.freeze(payload),
			isActivated = this.Activator(payload);
		
		if(isActivated) {
			this.Subject$.next({
				Type: Cell.EnumEventType.ACTIVATION,
				Cell: this
			});

			this.Organelles.forEach((organelle, i) => {
				organelle.Metabolize(payload, this);
			});
		
			this.Subject$.next({
				Type: Cell.EnumEventType.METABOLISM,
				Influx: _oldPayload,
				Outflux: payload
			});
		} else {
			this.Subject$.next({
				Type: Cell.EnumEventType.ATTEMPT,
				Cell: this
			});
		}

		return this;
	}

	Subscribe(subscriber) {
		this.Subject$.next({
			Type: Cell.EnumEventType.SUBSCRIBE,
			Subscriber: subscriber
		});

		this.Subject$.subscribe(subscriber);

		return this;
	}
}

Cell.EnumEventType = Object.freeze({
	ACTIVATION: "onactivation",
	ATTEMPT: "onattempt",
	METABOLISM: "onmetabolism",
	STATE: "onstate",
	SUBSCRIBE: "onsubscribe"
});

export default Cell;