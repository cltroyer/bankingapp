import { createStore, applyMiddleware, compose } from "redux";
import {accountReducer} from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    accountReducer,
    composeEnhancers(applyMiddleware()))

//const store = createStore(accountReducer)

export default store