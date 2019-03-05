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
		this.SetState(_Resource);

		return this.Flux(
			value,
			_Resource.Quantity
		);
	}

	Add(_Resource, value) {
		this.SetState(_Resource);

		let amount = Helper.MinClamp(_Resource.Quantity + value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	Subtract(_Resource, value) {
		this.SetState(_Resource);

		let amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	Multiply(_Resource, value) {
		this.SetState(_Resource);

		let amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	Divide(_Resource, value) {
		this.SetState(_Resource);

		let amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.Flux(
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
		this.SetState(_Resource);

		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity + value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	SubtractRoll(_Resource, number, sided, bonus = 0) {
		this.SetState(_Resource);

		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity - value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	MultiplyRoll(_Resource, number, sided, bonus = 0) {
		this.SetState(_Resource);

		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity * value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
	DivideRoll(_Resource, number, sided, bonus = 0) {
		this.SetState(_Resource);

		let value = this._rollHelper(number, sided, bonus),
			amount = Helper.MinClamp(_Resource.Quantity / value, 0);

		return this.Flux(
			_Resource.Type,
			amount
		);
	}
}

export default ResourceFlow;