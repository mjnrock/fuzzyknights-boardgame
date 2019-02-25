import { MinClamp } from "./../../util/Helper";
import EnumResourceType from "./../enum/ResourceType";

class Resource {
	static Get(entity, res) {
		return entity.Resources[res];
	}
	static Set(entity, res, number) {
		entity.Resources[res] = MinClamp(number, 0);

		return Resource;
	}
	static Add(entity, res, number) {
		entity.Resources[res] = MinClamp(entity.Resources[res] + number, 0);

		return Resource;
	}
	static Remove(entity, res, number) {
		entity.Resources[res] = MinClamp(entity.Resources[res] - number, 0);

		return Resource;
	}

	static FromCity(player, city) {
		let rewards = city.Resources.slice(4);

		rewards.forEach((r, i) => {
			switch(i) {
				case 0:
					Resource.Gold(player, +r);
					break;
				case 1:
					Resource.Wood(player, +r);
					break;
				case 2:
					Resource.Food(player, +r);
					break;
				case 3:
					Resource.Stone(player, +r);
					break;
				default:
					break;
			}
		});

		return this;
	}

	static Gold(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.GOLD, number);

		return Resource;
	}
	static Wood(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.WOOD, number);

		return Resource;
	}
	static Food(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.FOOD, number);

		return Resource;
	}
	static Stone(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.STONE, number);

		return Resource;
	}

	static MineGold(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.MINE_GOLD, number);

		return Resource;
	}
	static MineWood(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.MINE_WOOD, number);

		return Resource;
	}
	static MineFood(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.MINE_FOOD, number);

		return Resource;
	}
	static MineStone(entity, number) {
		Resource.Add(entity, EnumResourceType.Index.MINE_STONE, number);

		return Resource;
	}
}

export default Resource;