/* action for authenticated user */
export const SELECT_USER = 'SELECT_USER';
export const SET_AUTHED_USER_TO_NULL = 'SET_AUTHED_USER_TO_NULL';

export function selectUser(user) {
    return {
        type: SELECT_USER,
        user: user,
    };
}

export function logoutUser(id) {
    return {
        type: SET_AUTHED_USER_TO_NULL,
        id,
    };
}
