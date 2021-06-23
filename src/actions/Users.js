/* handle users */
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
    console.log('receive users, users:', users);
    return {
        type: RECEIVE_USERS,
        users: users,
    };
}
