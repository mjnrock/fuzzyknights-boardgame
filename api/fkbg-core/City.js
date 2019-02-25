import Helper from "./../util/Helper";

class City {
	constructor(player, name = "City") {
		this.UUID = Helper.NewUUID();

		this.Player = player;
		this.Name = name;
		this.Resources = [];
		this.Buildings = 0;
		this.Army = [];
	}
}

export default City;