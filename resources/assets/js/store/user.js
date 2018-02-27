import axios from "axios"
import {logInAction} from "./loggedIn"

/**
 * ACTION TYPES
 */
const GOT_USER = 'GOT_USER'

/**
 * ACTION CREATORS
 */
const userLoadAction = (data) => {
	return {
		type: GOT_USER,
		payload: data
	}
}

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
	.catch(error=>console.log(error));
}
/**
 * REDUCER
 */
export default function (state = { email: null, }, action) {
    switch (action.type) {
        case GOT_USER:
            return {email: action.payload}
        default:
            return state
    }
}