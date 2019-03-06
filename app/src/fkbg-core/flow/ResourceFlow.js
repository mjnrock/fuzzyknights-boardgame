import Flow from "./Flow";
import Resource from "./../mats/Resource";
import ResourceType from "./../enum/ResourceType";

import Helper from "./../../util/Helper";
import Dice from "./../../util/Dice";

class ResourceFlow extends Flow {
	constructor() {
		super(Resource, ResourceType);
	}

	getType(_Resource) {
		return _Resource.Type;
	}
	setType(_Resource, value) {
		return this.Flux(
			_Resource,

			value,
			_Resource.Quantity
		);
	}

	getQuantity(_Resource) {
		return _Resource.Quantity;
	}
	setQuantity(_Resource, value) {
		return this.Flux(
			_Resource,

			_Resource.Type,
			value
		);
	}

	Add(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity + value, 0);

		return this.setQuantity(_Resource, amount);
	}
	Subtract(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.setQuantity(_Resource, amount);
	}
	Multiply(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.setQuantity(_Resource, amount);
	}
	Divide(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.setQuantity(_Resource, amount);
	}

	_rollHelper(number, sided, bonus = 0) {
		if(Array.isArray(number)) {
			[ number, sided, bonus ] = number;
		}

		return Dice.Roll(number, sided, bonus);
	}
	AddRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity + value, 0);

		return this.setQuantity(_Resource, amount);
	}
	SubtractRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.setQuantity(_Resource, amount);
	}
	MultiplyRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.setQuantity(_Resource, amount);
	}
	DivideRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.setQuantity(_Resource, amount);
	}
}

export default ResourceFlow;