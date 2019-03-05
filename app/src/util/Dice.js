class Dice {
	static Random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static Roll(number, sided, bonus = 0) {
		let value = 0;
		for(let i = 0; i < number; i++) {
			value += Dice.Random(1, sided);
		}
		
		return value + bonus;
	}

	static Coin() {
		return Dice.Roll(1, 2) === 1 ? true : false;
	}

	static D2(number = 1, bonus = 0) {
		return Dice.Roll(number, 2) + bonus;
	}
	static D3(number = 1, bonus = 0) {
		return Dice.Roll(number, 3) + bonus;
	}
	static D4(number = 1, bonus = 0) {
		return Dice.Roll(number, 4) + bonus;
	}
	static D6(number = 1, bonus = 0) {
		return Dice.Roll(number, 6) + bonus;
	}
	static D10(number = 1, bonus = 0) {
		return Dice.Roll(number, 10) + bonus;
	}
	static D12(number = 1, bonus = 0) {
		return Dice.Roll(number, 12) + bonus;
	}
	static D20(number = 1, bonus = 0) {
		return Dice.Roll(number, 20) + bonus;
	}
	static D25(number = 1, bonus = 0) {
		return Dice.Roll(number, 25) + bonus;
	}
	static D50(number = 1, bonus = 0) {
		return Dice.Roll(number, 50) + bonus;
	}
	static D100(number = 1, bonus = 0) {
		return Dice.Roll(number, 100) + bonus;
	}

	static WeightedRandom(weights, values) {                
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