import Helper from "./../util/Helper";

class Player {
	constructor(name, color) {
		this.UUID = Helper.NewUUID();
		
		this.Name = name;
		this.Color = color;

		this.Heroes = [];
		this.Cities = [];
		this.Resources = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
	}

	AddHero(Hero) {
		this.Heroes.push(Hero);

		return this;
	}
	RemoveHero(index) {
		this.Heroes.splice(index, 1);

		return this;
	}

	AddCity(city) {
		this.Cities.push(city);

		return this;
	}
	RemoveCity(index) {
		this.Cities.splice(index, 1);

		return this;
	}
}

export default Player;