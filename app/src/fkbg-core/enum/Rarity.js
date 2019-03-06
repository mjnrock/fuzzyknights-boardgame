const Rarity = Object.freeze({
	COMMON: "COMMON",
	UNCOMMON: "UNCOMMON",
	RARE: "RARE",
	EPIC: "EPIC",
	LEGENDARY: "LEGENDARY"
});

export default Rarity;

export function MapRarityLevel(level) {	
	switch(level) {
		case 1:
			return Rarity.COMMON;
		case 2:
			return Rarity.UNCOMMON;
		case 3:
			return Rarity.RARE;
		case 4:
			return Rarity.EPIC;
		case 5:
			return Rarity.LEGENDARY;
		default:
			return Rarity.COMMON;
	}
};