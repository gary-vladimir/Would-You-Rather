import { _saveQuestionAnswer } from '../utils/api';
import { _saveQuestion } from '../utils/api';
import { addAnswerToUsers, addQuestionToUsers } from './Users';
// action creators to add question
// add answer to questions
// handle add answer
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SET_UNANSWERED_QUESTIONS = 'SET_UNANSWERED_QUESTIONS';

export function handleAddAnswer(answer, qId) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestionAnswer({
            authedUser: authedUser.id,
            qId,
            answer,
        }).then((res) => {
            dispatch(addAnswerToQuestions(res.questions));
            dispatch(addAnswerToUsers(res.users));
        });
    };
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOne,
            optionTwo,
            author: authedUser.id,
        }).then((newQuest) => {
            dispatch(addQuestion(newQuest));
            dispatch(addQuestionToUsers(newQuest));
        });
    };
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

function addAnswerToQuestions(questions) {
    return {
        type: ADD_ANSWER,
        questions,
    };
}
