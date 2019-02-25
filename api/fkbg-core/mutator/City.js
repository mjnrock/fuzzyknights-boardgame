import Bitwise from "./../../util/Bitwise";

class City {
	static Build(city, building) {
		Bitwise.Add(city.Building, building);

		return City;
	}
	static Destroy(city, building) {
		Bitwise.Remove(city.Building, building);

		return City;
	}
}

export default City;