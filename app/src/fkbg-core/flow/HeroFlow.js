import Flow from "./Flow";
import Hero from "../mats/Hero";

class HeroFlow extends Flow {
	constructor() {
		super(Hero);
	}

	getMercenaries(_Hero) {
		return _Hero.Mercenaries;
	}
	setMercenaries(_Hero, value) {
		return this.Flux(
			_Hero,

			value,
			_Hero.Items,
			_Hero.Location,
			_Hero.Movement
		);
	}

	getItems(_Hero) {
		return _Hero.Items;
	}
	setItems(_Hero, value) {
		return this.Flux(
			_Hero,

			_Hero.Mercenaries,
			value,
			_Hero.Location,
			_Hero.Movement
		);
	}

	getLocation(_Hero) {
		return _Hero.Location;
	}
	setLocation(_Hero, value) {
		return this.Flux(
			_Hero,

			_Hero.Mercenaries,
			_Hero.Items,
			value,
			_Hero.Movement
		);
	}

	getMovement(_Hero) {
		return _Hero.Movement;
	}
	setMovement(_Hero, value) {
		return this.Flux(
			_Hero,

			_Hero.Mercenaries,
			_Hero.Items,
			_Hero.Location,
			value
		);
	}
}

export default HeroFlow;