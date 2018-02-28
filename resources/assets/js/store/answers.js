import axios from "axios"

const initialState = []
/**
 * ACTION TYPES
 */
const GOT_ANSWERS = 'GOT_ANSWERS'
const CLEAR_ANSWERS = 'CLEAR_ANSWERS'

/**
 * ACTION CREATORS
 */
const answersLoadAction = (data) => {
	return {
		type: GOT_ANSWERS,
		payload: data
	}
}

export const clearQuestionsAction = payload => ({type: CLEAR_QUESTIONS})

/**
 * THUNKS
 */
export const loadAnswers = (attempt_id) => dispatch => {
	axios.get(`/attempt/answers/${attempt_id}`)
	.then(response => response.data)
	.then(data => dispatch(answersLoadAction(data)))
	.catch(error=>console.log(error));
}

export const addAnswer = (user_id, attempt_id, question_id, answer) => dispatch => {
	const answerData = {user_id, attempt_id, question_id, answer}
	console.log(answerData)
	axios.post('/answer/', answerData)
	.then((response) =>response.data)
	.then(data => {
        dispatch(loadAnswers(attempt_id))
	})
	.catch(error=>{
        console.log(error)
    });
}

export const changeAnswer = (answer_id, answer, attempt_id) => dispatch => {
	axios.put('/answer/', {answer_id, answer})
	.then((response) =>response.data)
	.then(data => {
        dispatch(loadAnswers(attempt_id))
	})
	.catch(error=>console.log(error));
}


/**
 * REDUCER
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case GOT_ANSWERS:
            return action.payload
        case CLEAR_ANSWERS:
            return state
        default:
            return state
    }
}