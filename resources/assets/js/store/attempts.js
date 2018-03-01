import axios from "axios"

const initialState = []
/**
 * ACTION TYPES
 */
const GOT_ATTEMPTS = 'GOT_ATTEMPTS'
const CLEAR_ATTEMPTS = 'CLEAR_ATTEMPTS'

/**
 * ACTION CREATORS
 */
const attemptsLoadAction = (data) => {
	return {
		type: GOT_ATTEMPTS,
		payload: data
	}
}

export const clearAttemptsAction = payload => ({type: CLEAR_ATTEMPTS})

/**
 * THUNKS
 */
export const loadAttempts = (user_id) => dispatch => {
	axios.get(`/attempts/${user_id}`)
	.then(response => response.data)
	.then(data => dispatch(attemptsLoadAction(data)))
	.catch(error=>console.log(error));
}

export const addAttempt = (user_id) => dispatch => {
	axios.post('/attempts', {user_id})
	.then((response) =>response.data)
	.then(data => {
        dispatch(loadAttempts(user_id))
	})
	.catch(error=>{
        console.log(error)
    });
}


/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_ATTEMPTS:
            return action.payload
        case CLEAR_ATTEMPTS:
            return state
        default:
            return state
    }
}