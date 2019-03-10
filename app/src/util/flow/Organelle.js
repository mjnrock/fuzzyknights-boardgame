import { Subject } from "rxjs";
import { NewUUID } from "../Helper";

class Organelle {
	constructor(callback) {
		this.UUID = NewUUID();
		this.Subject$ = new Subject();

		this.Metabolizer = callback;

		this.State = Object.freeze({});
	}

	SetState(state) {
		this.Subject$.next({
			Type: Organelle.EnumEventType.STATE,
			OldState: Object.freeze(this.State),
			NewState: Object.freeze(state)
		});

		this.State = Object.freeze(state);

		return this;
	}
	
	Metabolize(payload, parent) {
		let result = this.Metabolizer(payload, this, parent);

		this.Subject$.next({
			Type: Organelle.EnumEventType.METABOLIZE,
			Influx: Object.freeze(payload),
			Outflux: result
		});

		return result;
	}
}

Organelle.EnumEventType = Object.freeze({
	METABOLIZE: "onmetabolize",
	STATE: "onstate"
});

export default Organelle;