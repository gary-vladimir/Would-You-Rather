import { receiveUsers } from './Users';
import { receiveQuestions } from './Questions';
import { _getQuestions } from '../utils/api';
import { _getUsers } from '../utils/api';
// function that gets the initial data
export function getInitialData() {
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()]).then((values) => {
            dispatch(receiveUsers(values[1]));
            dispatch(receiveQuestions(values[0]));
        });
    };
}
