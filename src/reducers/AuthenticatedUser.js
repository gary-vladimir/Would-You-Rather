/* Authenticated User reducer */
import { SELECT_USER } from '../actions/AuthenticatedUser';
import { SET_AUTHED_USER_TO_NULL } from '../actions/AuthenticatedUser';

export default function selectUser(state = null, action) {
    switch (action.type) {
        case SELECT_USER:
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
