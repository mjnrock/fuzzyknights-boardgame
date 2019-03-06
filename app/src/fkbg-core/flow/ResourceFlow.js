import Flow from "./Flow";
import Resource from "./../Resource";
import ResourceType from "./../enum/ResourceType";

import Helper from "./../../util/Helper";
import Dice from "./../../util/Dice";

class ResourceFlow extends Flow {
	constructor() {
		super(Resource, ResourceType);
	}

	GetType(_Resource) {
		return _Resource.Type;
	}
	SetType(_Resource, value) {
		return this.Flux(
			_Resource,

			value,
			_Resource.Quantity
		);
	}

	GetQuantity(_Resource) {
		return _Resource.Quantity;
	}
	SetQuantity(_Resource, value) {
		return this.Flux(
			_Resource,

			_Resource.Type,
			value
		);
	}

	Add(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity + value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	Subtract(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	Multiply(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	Divide(_Resource, value) {
		let amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
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

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	SubtractRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	MultiplyRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
	DivideRoll(_Resource, number, sided, bonus = 0) {
		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.Flux(
			_Resource,
			
			_Resource.Type,
			amount
		);
	}
}

export default ResourceFlow;