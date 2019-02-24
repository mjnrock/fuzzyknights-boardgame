import Helper from "./../util/Helper";

class Hero {
	constructor(player, name = "Hero") {
		this.UUID = Helper.NewUUID();

		this.Player = player;
		this.Name = name;
	}
}

export default Hero;