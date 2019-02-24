export const ModuleID = "FKBG_PLAYER";
export const Enum = {
	EDIT_INFO: "EDIT_INFO",

	ADD_PLAYER: "ADD_PLAYER",
	REMOVE_PLAYER: "REMOVE_PLAYER",

	ACQUIRE_RESOURCE: "ACQUIRE_RESOURCE",
	SPEND_RESOURCE: "SPEND_RESOURCE",
	EXCHANGE_RESOURCE: "EXCHANGE_RESOURCE"
};

export const AddPlayer = (name, color) => ({
    type: Enum.ADD_PLAYER,
    payload: {
		Name: name,
		Color: color
	}
});

export const RemovePlayer = (name) => ({
    type: Enum.REMOVE_PLAYER,
    payload: {
		Name: name
	}
});

export const AcquireResource = (player, resource, amount) => ({
    type: Enum.ACQUIRE_RESOURCE,
    payload: {
		Player: player,
		Resource: resource,
		Amount: amount
	}
});

export const SpendResource = (player, resource, amount) => ({
    type: Enum.SPEND_RESOURCE,
    payload: {
		Player: player,
		Resource: resource,
		Amount: amount
	}
});

export const ExchangeResource = (player, amount, from, to) => ({
    type: Enum.EXCHANGE_RESOURCE,
    payload: {
		Player: player,
		ToResource: to,
		FromResource: from,
		Amount: amount
	}
});

export const Actions = {
	AddPlayer,
	RemovePlayer,
	AcquireResource,
	SpendResource,
	ExchangeResource
};

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
        case Enum.ACQUIRE_RESOURCE:
            return {
                ...state
            };
        case Enum.SPEND_RESOURCE:
            return {
                ...state,
                Payload: action.payload
            };
        case Enum.EXCHANGE_RESOURCE:
            return {
                ...state,
                Payload: action.payload
            };
        default:
            return state;
    }
}