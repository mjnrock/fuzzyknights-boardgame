import Helper from "./../util/Helper";

class Hero {
	constructor(player, name = "Hero") {
		this.UUID = Helper.NewUUID();

		this.Player = player;
		this.Name = name;
		this.Items = [];
		this.Equipment = [];
		this.Army = [];
	}
}

export default Hero;