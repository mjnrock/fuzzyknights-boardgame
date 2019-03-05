export default (type, power, level, cost = [], boon = [], flags = 0) => ({
	Type: type,
	Power: power,
	Level: level,
	Cost: cost,
	Boon: boon,
	Bitmask: flags
});