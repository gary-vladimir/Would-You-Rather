/* questions reducer */
import { NEW_QUESTION } from '../actions/Questions';
import { RECEIVE_QUESTIONS } from '../actions/Questions';
import { ANSWER_QUESTION } from '../actions/Questions';

export default function question(state = null, action) {
    switch (action.type) {
        case NEW_QUESTION:
            console.log(
                'reducer NEW_QUESTION',
                'state:',
                state,
                'action:',
                action
            );
            return {
                ...state,
                [action.question.id]: action.question,
            };

        case ANSWER_QUESTION:
            console.log(
                'reducer ANSWER_QUESTION',
                'state:',
                state,
                'action:',
                action
            );

            const questionId = action.questionId;
            console.log('question id:', questionId);

            console.log(
                'state[questionId].answers:',
                state[questionId].answers
            );
            console.log(
                'state[questionId].answers.length:',
                state[questionId].answers.length
            );

            if (state[questionId].answers.length === undefined) {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        answers: [
                            {
                                userId: action.userId,
                                choice: action.choice,
                            },
                        ],
                    },
                };
            } else {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        answers: [
                            ...state[action.questionId].answers.concat({
                                userId: action.userId,
                                choice: action.choice,
                            }),
                        ],
                    },
                };
            }

        case RECEIVE_QUESTIONS:
            console.log(
                'reducer RECEIVE_QUESTIONS',
                'state:',
                state,
                'action:',
                action
            );
            return {
                ...state,
                ...action.question,
            };

        default:
            return state;
    }
}
