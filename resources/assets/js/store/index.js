import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import loggedIn from './loggedIn'
import user from './user'
import attempts from './attempts'

const reducer = combineReducers({loggedIn, user, attempts})
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store
export * from './loggedIn'
export * from './user'
export * from './attempts'
