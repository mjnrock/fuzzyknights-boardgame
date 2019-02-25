import Helper from "./../util/Helper";

class City {
	constructor(player, name = "City") {
		this.UUID = Helper.NewUUID();

		this.Player = player.UUID;
		this.Name = name;
		this.Resources = [ 0, 0, 0, 0, 2, 1, 1, 1 ];
		this.Buildings = 0;
		this.Army = [ 0, 0, 0, 0, 0 ];
	}
}

export default City;