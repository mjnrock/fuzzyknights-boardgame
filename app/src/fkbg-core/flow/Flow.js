import { Subject } from "rxjs";

class Flow {
	constructor(_model, _enum = null) {
		this.Subject$ = new Subject();

		this.Model = _model;
		this.Enum = _enum;
	}

	getSubject() {
		return this.Subject;
	}
	setSubject(_subject$) {
		this.Subject = _subject$;
	}

	getModel() {
		return this.Model;
	}
	setModel(_model) {
		this.Model = _model;
	}

	getEnum() {
		return this.Enum;
	}
	setEnum(_enum) {
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