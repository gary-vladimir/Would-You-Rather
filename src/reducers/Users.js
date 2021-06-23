/* users reducer */
import { RECEIVE_USERS } from '../actions/Users';
import { NEW_QUESTION } from '../actions/Questions';
import { ANSWER_QUESTION } from '../actions/Questions';

export default function receiveUsers(state = null, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            console.log(
                'reducer RECEIVE_USERS',
                'state:',
                state,
                'action:',
                action
            );
            return action.users;

        case NEW_QUESTION:
            console.log(
                'reducer to change the number of new questions',
                'state:',
                state,
                'action:',
                action
            );
            return {
                ...state,
                [action.question.user]: {
                    ...state[action.question.user],
                    questionNum: state[action.question.user].questionNum + 1,
                    totalNum: state[action.question.user].totalNum + 1,
                },
            };

        case ANSWER_QUESTION:
            console.log(
                'reducer to change the number of answered questions',
                'state:',
                state,
                'action:',
                action
            );
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answerNum: state[action.userId].answerNum + 1,
                    totalNum: state[action.userId].totalNum + 1,
                },
            };

        default:
            return state;
    }
}
