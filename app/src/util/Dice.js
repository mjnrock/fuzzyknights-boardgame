class Dice {
	Random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	Roll(number, sided, bonus = 0) {
		let value = 0;
		for(let i = 0; i < number; i++) {
			value += Dice.Random(1, sided);
		}
		
		return value + bonus;
	}

	Coin() {
		return Dice.Roll(1, 2) === 1 ? true : false;
	}

	D2(bonus = 0) {
		return Dice.Roll(1, 2) + bonus;
	}
	D3(bonus = 0) {
		return Dice.Roll(1, 3) + bonus;
	}
	D4(bonus = 0) {
		return Dice.Roll(1, 4) + bonus;
	}
	D6(bonus = 0) {
		return Dice.Roll(1, 6) + bonus;
	}
	D10(bonus = 0) {
		return Dice.Roll(1, 10) + bonus;
	}
	D12(bonus = 0) {
		return Dice.Roll(1, 12) + bonus;
	}
	D20(bonus = 0) {
		return Dice.Roll(1, 20) + bonus;
	}
	D25(bonus = 0) {
		return Dice.Roll(1, 25) + bonus;
	}
	D50(bonus = 0) {
		return Dice.Roll(1, 50) + bonus;
	}
	D100(bonus = 0) {
		return Dice.Roll(1, 100) + bonus;
	}


	WeightedRandom(weights, values) {                
		let total = 0;
		for(let i in weights) {
			total += weights[i];
		}
		
		let roll = Dice.Random(1, total);
		
		let count = 0;
		for(let i = 0; i < weights.length; i++) {
			count += weights[i];
			
			if(roll <= count) {
				return values[i];
			}
		}
		
		return values[values.length - 1];
	}
}

export default Dice;