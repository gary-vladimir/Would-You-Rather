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
