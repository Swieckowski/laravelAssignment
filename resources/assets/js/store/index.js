import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// import loggedIn from './loggedIn'


const reducer = combineReducers({})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger())))

export default store
// export * from 'loggedIn'