import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Reducers } from '../reducers';

const initalState = {}
const middleware = [thunk]
export const Store = createStore(Reducers, initalState, composeWithDevTools(applyMiddleware(...middleware)))

