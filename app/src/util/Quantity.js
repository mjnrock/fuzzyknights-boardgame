import { Subject } from "rxjs";
import Helper from "./Helper";
import Dice from "./Dice";
  
class Quantity {
	constructor(amount = 0) {
		this.subject = new Subject();

		this.Amount = 0;
		this.Add(amount);
	}

	_cleanup() {
		this.Amount = Math.round(this.Amount * 100) / 100;
		this.subject.next(this.Amount);

		return this;
	}

	Add(value) {
		this.Amount = Helper.MinClamp(this.Amount + value, 0);

		this._cleanup();
		return this;
	}
	Subtract(value) {
		this.Amount = Helper.MinClamp(this.Amount - value, 0);

		this._cleanup();
		return this;
	}
	Multiply(value) {
		this.Amount = Helper.MinClamp(this.Amount * value, 0);

		this._cleanup();
		return this;
	}
	Divide(value) {
		this.Amount = Helper.MinClamp(this.Amount / value, 0);

		this._cleanup();
		return this;
	}

	AddRoll(number, sided, bonus = 0) {
		if(Array.isArray(number)) {
			[ number, sided, bonus ] = number;
		}

		this.Add(Dice.Roll(number, sided, bonus));

		return this;
	}
	SubtractRoll(number, sided, bonus = 0) {
		if(Array.isArray(number)) {
			[ number, sided, bonus ] = number;
		}

		this.Subtract(Dice.Roll(number, sided, bonus));

		return this;
	}
	MultiplyRoll(number, sided, bonus = 0) {
		if(Array.isArray(number)) {
			[ number, sided, bonus ] = number;
		}

		this.Multiply(Dice.Roll(number, sided, bonus));

		return this;
	}
	DivideRoll(number, sided, bonus = 0) {
		if(Array.isArray(number)) {
			[ number, sided, bonus ] = number;
		}

		this.Divide(Dice.Roll(number, sided, bonus));

		return this;
	}
	
	Subscribe(subscriber) {
		this.subject.subscribe(subscriber);
	}
}

export default Quantity;