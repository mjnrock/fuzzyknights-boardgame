import Helper from "./../util/Helper";

class Player {
	constructor(name, color) {
		this.UUID = Helper.NewUUID();
		
		this.Name = name;
		this.Color = color;

		this.Heroes = [];
		this.Cities = [];
		this.Resources = [];
	}
}

export default Player;