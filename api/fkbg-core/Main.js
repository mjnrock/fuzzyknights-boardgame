class Main {
	constructor(fkbg) {
		this.FKBG = fkbg;

		this.Players = [];
	}

	NewGame(playerCount = 2) {
		for(let i = 0; i < playerCount; i++) {
			let player = new this.FKBG.Player(`Player ${ i + 1 }`);

			player.AddHero(new this.FKBG.Hero(player));
			player.AddCity(new this.FKBG.City(player));

			this.FKBG.Mutator.Resource.Wood(player, 10);
			this.FKBG.Mutator.Resource.Gold(player, 5);

			this.Players.push(player);
		}

		return this;
	}

	Daybreak() {
		this.Players.forEach((player, i) => {
			this.FKBG.Mutator.Resource.FromCity(player, player.Cities[0]);
		});

		return this;
	}
}

export default Main;