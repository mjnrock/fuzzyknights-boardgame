import { ReplaySubject } from "rxjs";
import Subscribable from "./Subscribable";

import Cell from "./Cell";
import Organelle from "./Organelle";

class Relay extends Subscribable {
	constructor(state = {}) {
		super(state);

		this.Subject$ = new ReplaySubject();
		this.Regitry = {};
	}
	
	Metabolize(payload, parent) {
		let result = this.Metabolizer(payload, this, parent);

		this.Subject$.next({
			Type: Relay.EnumEventType.METABOLIZE,
			Influx: Object.freeze(payload),
			Outflux: result
		});

		return result;
    }
    
    Attach(_enum, callback) {
        this.Regitry[_enum] = callback;

        return this;
    }
    Detach(_enum) {
        delete this.Regitry[_enum];

        return this;
    }

	next(caller, obj) {
        try {
            this.Regitry[obj.type](obj);
        } catch(e) {
            console.warn(`Nothing attached to "${ obj.type }"`);
        }

		// if(obj.type === Subscribable.EnumEventType.STATE) {
		// 	return obj;
		// } else if(obj.type === Subscribable.EnumEventType.STATE) {
		// 	return obj;
		// }

		// if(obj.type === Cell.EnumEventType.ACTIVATION) {
		// 	return obj;
		// } else if(obj.type === Cell.EnumEventType.ATTEMPT) {
		// 	return obj;
		// } else if(obj.type === Cell.EnumEventType.METABOLISM) {

		// 	return obj;
		// }

		// if(obj.type === Organelle.EnumEventType.METABOLISM) {
		// 	return obj;
		// }

		return obj;
	}
}

export default Relay;