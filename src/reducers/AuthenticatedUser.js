// reducer in charge of handling the authed user
import { SET_AUTHED_USER } from '../actions/AuthenticatedUser';
import { SET_AUTHED_USER_TO_NULL } from '../actions/AuthenticatedUser';

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                id: action.id,
            };
        case SET_AUTHED_USER_TO_NULL:
            return null;
        default:
            return state;
    }
}
