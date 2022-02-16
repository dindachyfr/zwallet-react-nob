import { createStore, applyMiddleware } from "redux"
import rootReducers from "../reducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

let store = createStore(rootReducers, applyMiddleware(thunk, logger))
export default store;