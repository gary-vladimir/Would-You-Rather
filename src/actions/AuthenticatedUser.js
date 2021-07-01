export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_AUTHED_USER_TO_NULL = 'SET_AUTHED_USER_TO_NULL';

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
