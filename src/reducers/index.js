/* index reducer */
import { combineReducers } from 'redux';
import selectUser from './AuthenticatedUser';
import receiveUsers from './Users';
import question from './Questions';

export default combineReducers({
    selectUser,
    receiveUsers,
    question,
});
