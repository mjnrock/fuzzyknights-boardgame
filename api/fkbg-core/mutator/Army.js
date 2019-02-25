import { MinClamp } from "./../../util/Helper";

class Army {
	static Add(entity, tier, number) {
		entity.Army[tier] = MinClamp(entity.Army[tier] + number, 0);

		return Army;
	}
	static Remove(entity, tier, number) {
		entity.Army[tier] = MinClamp(entity.Army[tier] - number, 0);

		return Army;
	}

	static T1(entity, number) {
		Army.Add(entity, 0, number);

		return Army;
	}
	static T2(entity, number) {
		Army.Add(entity, 1, number);

		return Army;
	}
	static T3(entity, number) {
		Army.Add(entity, 2, number);

		return Army;
	}
	static T4(entity, number) {
		Army.Add(entity, 3, number);

		return Army;
	}
	static T5(entity, number) {
		Army.Add(entity, 4, number);

		return Army;
	}
}

export default Army;