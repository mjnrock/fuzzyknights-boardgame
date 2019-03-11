import { ReplaySubject } from "rxjs";
import { NewUUID } from "../Helper";

class Subscribable {
	constructor(state = {}) {
		this.UUID = NewUUID();
		this.Subject$ = new ReplaySubject();
		this.Subscriptions = {};

		this.State = Object.freeze(state);
		
		this._origin = Date.now();
	}

	GetState() {
		return this.State;
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
    
    static Hashify(json) {
        while(typeof json === "object") {
            json = JSON.stringify(json);
        }

        let hash = 0;

        if (json.length == 0) {
            return hash;
        }

        for (let i = 0; i < json.length; i++) {
            let char = json.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}

Subscribable.EnumEventType = Object.freeze({
	STATE: "subscribbable-onstate",
	SUBSCRIBE: "subscribbable-onsubscribe",
});

export default Subscribable;