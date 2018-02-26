import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import loggedIn from './loggedIn'


const reducer = combineReducers({loggedIn})
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store
// export * from 'loggedIn'