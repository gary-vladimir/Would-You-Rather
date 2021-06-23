import { _getQuestions, _getUsers } from './DATA.js';

export function getInitialData() {
    return Promise.all([_getQuestions(), _getUsers()]).then(
        ([question, users]) => ({ question, users })
    );
}
