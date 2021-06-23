/* action for getting initial data */
import { getInitialData } from '../data/api';

import { receiveQuestions } from './Questions';
import { receiveUsers } from './Users';

export function handleInitialData() {
    console.log('handleInitialData()');
    return (dispatch) => {
        return getInitialData().then(({ question, users }) => {
            dispatch(receiveQuestions(question));
            dispatch(receiveUsers(users));
        });
    };
}
