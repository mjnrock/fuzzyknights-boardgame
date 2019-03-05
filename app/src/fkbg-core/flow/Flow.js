import { Subject } from "rxjs";

class Flow {
	constructor(_model, _enum) {
		this.Subject$ = new Subject();

		this.Model = _model;
		this.Enum = _enum;

		this.State = {};
	}

	SetState(state = {}) {
		this.State = Object.freeze(state);

		return this;
	}

	Flux(...args) {
		try {
			let newState = Object.freeze(new this.Model(...args));

			this.Subject$.next({
				OldState: this.State,
				NewState: newState,
			});

			this.SetState(newState);

			return newState;
		} catch (e) {
			console.log("Invalid Model");
		}
	}

	Subscribe(subscriber) {
		this.Subject$.subscribe(subscriber);
	}
}

export default Flow;