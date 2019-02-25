import Helper from "../util/Helper";

class Item {
	constructor(type, dice, tier = 1) {
		this.UUID = Helper.NewUUID();
		
		this.Type = type;
		this.Dice = dice;
		this.Tier = tier;
	}
}

export default Item;