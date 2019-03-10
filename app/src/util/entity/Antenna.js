import { ReplaySubject } from "rxjs";
import Subscribable from "./Subscribable";

import Cell from "./Cell";
import Organelle from "./Organelle";

class Antenna extends Subscribable {
	constructor(state = {}) {
		super(state);

		this.Subject$ = new ReplaySubject();
		this.Regitry = {};
	}
	
	Metabolize(payload, parent) {
		let result = this.Metabolizer(payload, this, parent);

		this.Subject$.next({
			Type: Antenna.EnumEventType.METABOLIZE,
			Influx: Object.freeze(payload),
			Outflux: result
		});

		return result;
	}

	next(caller, obj) {
		if(obj.type === Subscribable.EnumEventType.STATE) {
			return obj;
		} else if(obj.type === Subscribable.EnumEventType.STATE) {
			return obj;
		}

		if(obj.type === Cell.EnumEventType.ACTIVATION) {
			return obj;
		} else if(obj.type === Cell.EnumEventType.ATTEMPT) {
			return obj;
		} else if(obj.type === Cell.EnumEventType.METABOLISM) {
			console.log(obj.data.Outflux.roll);

			return obj;
		}

		if(obj.type === Organelle.EnumEventType.METABOLISM) {
			return obj;
		}

		return obj;
	}
}

export default Antenna;