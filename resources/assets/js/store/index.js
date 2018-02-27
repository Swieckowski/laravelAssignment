import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import loggedIn from './loggedIn'
import user from './user'

const reducer = combineReducers({loggedIn, user})
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store
export * from './loggedIn'
export * from './user'