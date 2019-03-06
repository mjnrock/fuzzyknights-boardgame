import Flow from "./Flow";
import Item from "./../mats/Item";
import ItemType from "./../enum/ItemType";
import Rarity, { MapRarityLevel } from "./../enum/Rarity";

import Dice from "./../../util/Dice";
import Power from "./../mats/Power";

import Config from "./../config";

class ItemFlow extends Flow {
	constructor() {
		super(Item, ItemType);
	}

	getType(_Item) {
		return _Item.Type;
	}
	setType(_Item, value) {
		return this.Flux(
			_Item,

			value,
			_Item.Rarity,
			_Item.Power
		);
	}

	getRarity(_Item) {
		return _Item.Rarity;
	}
	setRarity(_Item, value) {
		return this.Flux(
			_Item,

			_Item.Type,
			value,
			_Item.Power
		);
	}

	getPower(_Item) {
		return _Item.Power;
	}
	setPower(_Item, value) {
		return this.Flux(
			_Item,

			_Item.Type,
			_Item.Rarity,
			value
		);
	}

	SetPowerRoll(_Item, number, sided, bonus = 0) {
		return this.setPower(_Item, new Power(number, sided, bonus));
	}

	RandomRarity(_Item) {
		return this.setRarity(_Item, MapRarityLevel(Dice.GamblersStreak(Config.RARITY_THRESHOLD, Config.RARITY_MAX_LEVEL)));
	}
}

export default ItemFlow;