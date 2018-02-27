import axios from "axios"
import {logInAction} from "./loggedIn"

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER'
const LOGIN_FAIL = 'LOGIN_FAIL'
const SIGNUP_FAIL = 'SIGNUP_FAIL'

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

/**
 * THUNKS
 */
export const addUser = (user) => dispatch => {
	axios.post('/signup/', user)
	.then((response) =>response.data)
	.then(data => {
        console.log("data")
        dispatch(userLoadAction(data.email))
        dispatch(logInAction())

	})
	.catch(error=>{
        console.log(error)
        dispatch(signupFailAction())
    });
}
/**
 * REDUCER
 */
export default function (state = { email: null, signupFail: false, loginFail: false }, action) {
    switch (action.type) {
        case GOT_USER:
            return Object.assign({}, state, {email: action.payload})
        case LOGIN_FAIL:
            return Object.assign({}, state, {loginFail: true})
        case SIGNUP_FAIL:
            return Object.assign({}, state, {signupFail: true})
        default:
            return state
    }
}