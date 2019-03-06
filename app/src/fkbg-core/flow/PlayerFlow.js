import Flow from "./Flow";
import Player from "../mats/Player";

import Dice from "../../util/Dice";

import Config from "../config";

class PlayerFlow extends Flow {
	constructor() {
		super(Player);
	}

	getColor(_Player) {
		return _Player.Color;
	}
	setColor(_Player, value) {
		return this.Flux(
			_Player,

			value,
			_Player.Settlements,
			_Player.Heroes,
			_Player.Resources,
			_Player.Mines
		);
	}

	getSettlements(_Player) {
		return _Player.Settlements;
	}
	setSettlements(_Player, value) {
		return this.Flux(
			_Player,

			_Player.Color,
			value,
			_Player.Heroes,
			_Player.Resources,
			_Player.Mines
		);
	}

	getHeroes(_Player) {
		return _Player.Heroes;
	}
	setHeroes(_Player, value) {
		return this.Flux(
			_Player,

			_Player.Color,
			_Player.Settlements,
			value,
			_Player.Resources,
			_Player.Mines
		);
	}

	getResources(_Player) {
		return _Player.Resources;
	}
	setResources(_Player, value) {
		return this.Flux(
			_Player,

			_Player.Color,
			_Player.Settlements,
			_Player.Heroes,
			value,
			_Player.Mines
		);
	}

	getMines(_Player) {
		return _Player.Mines;
	}
	setMines(_Player, value) {
		return this.Flux(
			_Player,

			_Player.Color,
			_Player.Settlements,
			_Player.Heroes,
			_Player.Resources,
			value
		);
	}
}

export default PlayerFlow;