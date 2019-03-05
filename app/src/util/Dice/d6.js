import { Subject } from "rxjs";
import Dice from "../Dice";

class d6 {
	constructor() {
		this.subject = new Subject();
	}

	Roll(number = 1, bonus = 0) {
		this.subject.next(Dice.D6(number, bonus));
	}

	Subscribe(subscriber) {
		this.subject.subscribe(subscriber);
	}
}

export default d6;