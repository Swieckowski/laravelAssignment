import axios from "axios"
import {logInAction} from "./loggedIn"

const initialState = { id: null, email: null, signupFail: false, loginFail: false };
/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER'
const LOGIN_FAIL = 'LOGIN_FAIL'
const SIGNUP_FAIL = 'SIGNUP_FAIL'
const CLEAR_USER = 'CLEAR_USER'

/**
 * ACTION CREATORS
 */
const userLoadAction = (data) => {
	return {
		type: GOT_USER,
		payload: data
	}
}
const signupFailAction = payload => ({type: SIGNUP_FAIL})
const loginFailAction = payload => ({type: LOGIN_FAIL})
export const clearUserAction = payload => ({type: CLEAR_USER})

/**
 * THUNKS
 */
export const addUser = (user) => dispatch => {
	axios.post('/signup', user)
	.then((response) =>response.data)
	.then(data => {
        dispatch(userLoadAction(data.email))
        dispatch(logInAction())

	})
	.catch(error=>{
        console.log(error)
        dispatch(signupFailAction())
    });
}

export const loginUser = (user) => dispatch => {
	axios.post('/login', user)
	.then((response) =>response.data)
	.then(data => {
        console.log("first response data", data)
        dispatch(userLoadAction({id: data.id, email: data.email}))
        dispatch(logInAction())

	})
	.catch(error=>{
        console.log(error)
        dispatch(loginFailAction())
    });
}
/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_USER:
            return Object.assign({}, state, {id: action.payload.id, email: action.payload.email})
        case LOGIN_FAIL:
            return Object.assign({}, state, {loginFail: true})
        case SIGNUP_FAIL:
            return Object.assign({}, state, {signupFail: true})
        case CLEAR_USER:
            return initialState
        default:
            return state
    }
}