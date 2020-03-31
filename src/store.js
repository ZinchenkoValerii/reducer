import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import commentsReducer from "./commentsReducer";

import logger from "./logger";

const rootReducer = combineReducers({ commentsReducer });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ logger }))
);

export default store;
