import Subscribable from "./Subscribable";

import Cell from "./Cell";
import Organelle from "./Organelle";

class Antenna extends Subscribable {
	constructor(state = {}) {
		super(state);

		this.Subject$ = new ReplaySubject();
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
}

export default Antenna;