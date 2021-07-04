export const SET_AUTHED_USER_TO_NULL = 'SET_AUTHED_USER_TO_NULL';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
// actions for setting authed user
// and removing authed user
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}
export function setAuthedUserToNull(id) {
    return {
        type: SET_AUTHED_USER_TO_NULL,
        id,
    };
}
