let questions = {
    z91qcdwyww8k99jw7gm: {
        id: 'z91qcdwyww8k99jw7gm',
        user: 'karen',
        choice1: 'Go to the East',
        choice2: 'Go to the  West',
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587451933896,
    },
    z91qcdwyww8k99jw7g2: {
        id: 'z91qcdwyww8k99jw7g2',
        user: 'tyler',
        choice1: 'Drink coffee',
        choice2: 'Drink wine',
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587451933824,
    },
    z91qcdwyww8k99jw7g3: {
        id: 'z91qcdwyww8k99jw7g3',
        user: 'richard',
        choice1: 'Go to the mountain',
        choice2: 'Go to the sea',
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587451933394,
    },

    z91qcdwyww8k99jw7g4: {
        id: 'z91qcdwyww8k99jw7g4',
        user: 'richard',
        choice1: 'Prefer red',
        choice2: 'Prefer blue',
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587455933894,
    },
};

let users = {
    karen: {
        id: 'karen',
        name: 'Karen',
        handle: 'karen',
        avatarURL: './profile01.jpg',
        answerNum: 0,
        questionNum: 1,
        totalNum: 1,
    },
    richard: {
        id: 'richard',
        name: 'Richard',
        handle: 'richard',
        avatarURL: './profile02.jpg',
        answerNum: 0,
        questionNum: 2,
        totalNum: 2,
    },
    tyler: {
        id: 'tyler',
        name: 'Tyler',
        handle: 'tyler',
        avatarURL: './profile03.jpg',
        answerNum: 0,
        questionNum: 1,
        totalNum: 1,
    },
};

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...questions }), 1000);
    });
}

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({ ...users }), 1000);
    });
}
function generateUID() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        },
    };
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion,
            };

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([
                        formattedQuestion.id,
                    ]),
                },
            };

            res(formattedQuestion);
        }, 1000);
    });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer,
                    },
                },
            };

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([
                            authedUser,
                        ]),
                    },
                },
            };

            res();
        }, 500);
    });
}
