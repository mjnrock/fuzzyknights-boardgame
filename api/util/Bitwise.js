class Bitwise {
	static Has(base, flag) {
		return (base & flag) === flag;
	}

	static Add(base, ...flags) {
		let mask = base;
		for(let i = 0; i < flags.length; i++) {
			mask = mask | flags[i];
		}
		
		return mask;
	}

	static Remove(base, ...flags) {
		let mask = base;
		for(let i = 0; i < flags.length; i++) {
			mask = mask & ~flags[i];
		}
		
		return mask;
	}
}

export default Bitwise;