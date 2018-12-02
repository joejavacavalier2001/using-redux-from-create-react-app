import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import stock from "./reducers/stockReducer";

export default createStore(
    combineReducers({
        math,
        user,
        stock
    }),
    {},
    applyMiddleware(logger,promiseMiddleware())
);

