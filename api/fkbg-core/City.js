import Helper from "./../util/Helper";

class City {
	constructor(player, name = "City") {
		this.UUID = Helper.NewUUID();

		this.Player = player;
		this.Name = name;
	}
}

export default City;