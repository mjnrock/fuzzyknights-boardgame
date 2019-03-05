import { Subject } from "rxjs";

class Decorator {
	static Subjectify(clazz, next) {
		clazz._subject = new Subject();
		clazz.Subscribe = (subscriber) => clazz._subject.subscribe(subscriber);

		for(let k in clazz) {
			console.log(k, clazz[k]);
			if(typeof clazz[k] === "function") {
				clazz[k] = (...args) => {
					let ret = clazz[k](...args);
					clazz._subject.next(next);

					return ret;
				}
			}
		}

		return clazz;
	}
}

export default Decorator;