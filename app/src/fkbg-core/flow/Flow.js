import { Subject } from "rxjs";

class Flow {
	constructor(_model, _enum) {
		this.Subject$ = new Subject();

		this.Model = _model;
		this.Enum = _enum;
	}

	Inflow(obj, fnName, ...args) {
		try {
			if(arguments.length === 1) {
				if(Array.isArray(obj)) {
					return this[obj[1]](obj[0], ...obj[2]);
				}

				return this[obj.Method](obj.OldState, ...obj.VarArgs);
			}

			return this[fnName](obj, ...args);
		} catch (e) {
			console.warn(e);
		}
	}

	Flux(oldState, ...args) {
		try {
			let newState = Object.freeze(new this.Model(...args));

			this.Subject$.next({
				OldState: Object.freeze(oldState),
				NewState: newState,
			});

			return newState;
		} catch (e) {
			console.warn(e);
		}
	}

	Subscribe(subscriber) {
		this.Subject$.subscribe(subscriber);
	}
}

export default Flow;