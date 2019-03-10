import { ReplaySubject } from "rxjs";
import { NewUUID } from "../Helper";

class Subscribable {
	constructor(state = {}) {
		this.UUID = NewUUID();
		this.Subject$ = new ReplaySubject();
		this.Subscriptions = {};

		this.State = Object.freeze(state);
	}

	SetState(state) {
		this.Invoke(Subscribable.EnumEventType.STATE, {
			OldState: Object.freeze(this.State),
			NewState: Object.freeze(state)
		});

		this.State = Object.freeze(state);

		return this;
	}

	Invoke(type, args = {}) {
		this.Subject$.next({
			type: type,
			caller: this,
			data: {
				...args
			}
		});

		return this;
	}

	Subscribe(subscriber) {
		if(typeof subscriber === "object") {
			this.Subject$.subscribe({
				next: (...args) => subscriber.next(subscriber, ...args),
				error: subscriber.error,
				complete: subscriber.complete
			});

			this.Subscriptions[subscriber.UUID] = subscriber;
		}

		this.Invoke(Subscribable.EnumEventType.SUBSCRIBE, {
			Subscriber: subscriber
		});

		return this;
	}
	Unsubscribe(subscriber) {
		if(typeof subscriber === "string" || subscriber instanceof String) {
			this.Subscriptions[subscriber].unsubscribe();

			delete this.Subscriptions[subscriber];
		} else {
			this.Subscriptions[subscriber.UUID].unsubscribe();

			delete this.Subscriptions[subscriber.UUID];
		}

		return this;
	}

	next(caller, obj) {
		return {
			caller,
			obj
		};
	}
	error(err) {
		return err;
	}
	complete() {
		return true;
	}
}

Subscribable.EnumEventType = Object.freeze({
	STATE: "subscribbable-onstate",
	SUBSCRIBE: "subscribbable-onsubscribe",
});

export default Subscribable;