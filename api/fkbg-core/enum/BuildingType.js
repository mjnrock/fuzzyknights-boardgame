const BuildingType = {
	RAMPARTS_1: 2 ** 0,
	RAMPARTS_2: 2 ** 1,
	SPAWNER_1: 2 ** 2,
	SPAWNER_2: 2 ** 3,
	SPAWNER_3: 2 ** 4,
	SPAWNER_4: 2 ** 5,
	SPAWNER_5: 2 ** 6,
	MINE_GOLD: 2 ** 7,
	MINE_WOOD: 2 ** 8,
	MINE_FOOD: 2 ** 9,
	MINE_STONE: 2 ** 10,

	RAMPARTS: {
		Key: "RAMPARTS",
		Label: "Ramparts",
		Suffix: ( level ) => ` - Level ${ level }`,
		Cost: [
			[ 0, 0, 0, 5 ],		// 💰 🌳 🥩 ⛏️
			[ 0, 0, 0, 10 ]
		]
	},

	SPAWNER: {
		Key: "SPAWNER",
		Label: "Mercenary Camp",
		Suffix: ( level ) => ` - Level ${ level }`,
		Cost: [
			[ 0, 5, 0, 0 ],		// 💰 🌳 🥩 ⛏️
			[ 5, 5, 0, 0 ],
			[ 10, 10, 0, 5 ],
			[ 15, 15, 5, 10 ],
			[ 25, 25, 10, 25 ]
		]
	},

	MINE: {
		Key: "MINE",
		Label: "Resource Mine",
		Suffix: () => ``,
		Cost: [
			[ 1, 1, 0, 1 ]		// 💰 🌳 🥩 ⛏️
		],
		Type: {
			GOLD: [ 1, 0, 0, 0 ],
			WOOD: [ 0, 1, 0, 0 ],
			FOOD: [ 0, 0, 1, 0 ],
			STONE: [ 0, 0, 0, 1 ]
		}
	}
};

export default {
	...BuildingType
};