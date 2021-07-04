// main reducer
import { combineReducers } from 'redux';
import authedUser from './AuthenticatedUser';
import users from './Users';
import questions from './Questions';
import { loadingBarReducer } from 'react-redux-loading';
// impoting all reducers and combining them
export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
});
