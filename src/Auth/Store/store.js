import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import auth from "../Reducer/reducer";

export default createStore(combineReducers({
        auth
    }),
    {},
    applyMiddleware(createLogger(), thunk)
);