import Helper from "./../util/Helper";

class Hero {
	constructor(player, name = "Hero") {
		this.UUID = Helper.NewUUID();

		this.Player = player.UUID;
		this.Name = name;
		this.Items = [];
		this.Equipment = [ null, null, null ];
		this.Army = [ 0, 0, 0, 0, 0 ];
	}
}

export default Hero;