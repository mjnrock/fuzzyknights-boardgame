export const ModuleID = "FKBG_PLAYER";
export const Enum = {
	ADD_PLAYER: "ADD_PLAYER",
	REMOVE_PLAYER: "REMOVE_PLAYER"
};

export class Actions {
	static ModularizeType(type) {
		return `${ ModuleID }::${ type }`;
	}

	static AddPlayer(name, color) {
		return {
			type: Actions.ModularizeType(Enum.ADD_PLAYER),
			payload: {
				Name: name,
				Color: color
			}
		};
	}
	static RemovePlayer(name) {
		return {
			type: Actions.ModularizeType(Enum.REMOVE_PLAYER),
			payload: {
				Name: name
			}
		};
	}
}

const initialState = {
    Players: []
};

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case Enum.ADD_PLAYER:
            return {
                ...state
            };
        case Enum.REMOVE_PLAYER:
            return {
                ...state,
                Payload: action.payload
            };
        default:
            return state;
    }
}