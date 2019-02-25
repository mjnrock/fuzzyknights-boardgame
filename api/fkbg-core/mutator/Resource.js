import { MinClamp } from "./../../util/Helper";
import EnumResourceType from "./../enum/ResourceType";

class Resource {
	static Get(entity, resource) {
		return entity.Resources[resource];
	}
	static Set(entity, resource, number) {
		entity.Resources[resource] = MinClamp(number, 0);

		return Resource;
	}
	static Add(entity, resource, number) {
		entity.Resources[resource] = MinClamp(entity.Resources[resource] + number, 0);

		return Resource;
	}
	static Remove(entity, resource, number) {
		entity.Resources[resource] = MinClamp(entity.Resources[resource] - number, 0);

		return Resource;
	}

	static Gold(entity, number) {
		Resource.Add(entity, EnumResourceType.GOLD, number);

		return Resource;
	}
	static Wood(entity, number) {
		Resource.Add(entity, EnumResourceType.WOOD, number);

		return Resource;
	}
	static Food(entity, number) {
		Resource.Add(entity, EnumResourceType.FOOD, number);

		return Resource;
	}
	static Stone(entity, number) {
		Resource.Add(entity, EnumResourceType.STONE, number);

		return Resource;
	}

	static MineGold(entity, number) {
		Resource.Add(entity, EnumResourceType.MINE_GOLD, number);

		return Resource;
	}
	static MineWood(entity, number) {
		Resource.Add(entity, EnumResourceType.MINE_WOOD, number);

		return Resource;
	}
	static MineFood(entity, number) {
		Resource.Add(entity, EnumResourceType.MINE_FOOD, number);

		return Resource;
	}
	static MineStone(entity, number) {
		Resource.Add(entity, EnumResourceType.MINE_STONE, number);

		return Resource;
	}
}

export default Resource;