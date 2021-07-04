// questions reducer
import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    ADD_ANSWER,
} from '../actions/Questions';
// handle switch cases for action types
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ADD_ANSWER:
            return {
                ...state,
                ...action.questions,
            };
        default:
            return state;
    }
}
