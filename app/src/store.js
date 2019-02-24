import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics  } from 'redux-observable';

import { Reducer as PlayerReducer } from "./dux/Player";

export const rootReducer = combineReducers({
    Player: PlayerReducer
});

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics();

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}