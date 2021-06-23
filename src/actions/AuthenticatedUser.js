/* action for authenticated user */
export const SELECT_USER = 'SELECT_USER';

export function selectUser(user) {
    return {
        type: SELECT_USER,
        user: user,
    };
}
