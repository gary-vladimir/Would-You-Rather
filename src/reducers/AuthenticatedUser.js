/* Authenticated User reducer */
import { SELECT_USER } from '../actions/AuthenticatedUser';

export default function selectUser(state = null, action) {
    switch (action.type) {
        case SELECT_USER:
            console.log(
                'reducer SELECT_USER',
                'action.user:',
                action.user,
                'state:',
                state,
                'action:',
                action
            );
            return action.user;

        default:
            return state;
    }
}
