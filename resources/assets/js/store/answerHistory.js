import axios from "axios"

const initialState = {question:"",answer:"",attempts:[]}
/**
 * ACTION TYPES
 */
const GOT_HISTORY = 'GOT_HISTORY'
const CLEAR_HISTORY = 'CLEAR_HISTORY'

/**
 * ACTION CREATORS
 */
const historyLoadAction = (data) => {
	return {
		type: GOT_HISTORY,
		payload: data
	}
}

export const clearAttemptsAction = payload => ({type: CLEAR_ATTEMPTS})

/**
 * THUNKS
 */
export const loadHistory = (question, answer, user_id, question_id) => dispatch => {
	axios.get(`/answer/history/${answer}/${user_id}/${question_id}`)
	.then(response => response.data)
	.then(data => {
       const dataObject = {question, answer, attempts:data}
        dispatch(historyLoadAction(dataObject))
    })
	.catch(error=>console.log(error));
}


/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_HISTORY:
            return Object.assign({}, state, action.payload)
        case CLEAR_HISTORY:
            return initialState
        default:
            return state
    }
}