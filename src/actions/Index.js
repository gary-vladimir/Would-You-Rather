import { _getQuestions } from '../utils/api';
import { _getUsers } from '../utils/api';
import { receiveUsers } from './Users';
import { receiveQuestions } from './Questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function getInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getQuestions(), _getUsers()]).then((values) => {
            dispatch(receiveUsers(values[1]));
            dispatch(receiveQuestions(values[0]));
            dispatch(hideLoading());
        });
    };
}
