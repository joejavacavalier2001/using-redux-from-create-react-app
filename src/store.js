import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';

import stock from "./reducers/stockReducer";

export default createStore(
    combineReducers({
        stock
    }),
    {},
    applyMiddleware(logger,promiseMiddleware())
);

