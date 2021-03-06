import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import loggedIn from './loggedIn'
import user from './user'
import attempts from './attempts'
import questions from './questions'
import answers from './answers'
import answerHistory from './answerHistory'


const reducer = combineReducers({loggedIn, user, attempts, questions, answers, answerHistory})
const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store
export * from './loggedIn'
export * from './user'
export * from './attempts'
export * from './questions'
export * from './answers'
export * from './answerHistory'
