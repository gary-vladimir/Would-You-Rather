/* question page component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { handleAddAnswer } from '../actions/Questions';

const useStyles = makeStyles((theme) => ({
    card: {
        fontFamily: 'Montserrat',
        border: '1px solid #6c757d',
        backgroundColor: '#1E2125',
        color: 'white',
        width: '500px',
        height: '600px',
        position: 'absolute',
        left: '50%',
        top: '120px',
        transform: 'translate(-50%,0px)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        paddingTop: '50px',
    },
    btn: {
        width: '80%',
    },
    avatar: {
        transform: 'scale(2.2)',
        marginBottom: '30px',
    },
    activeBtn: {
        backgroundColor: '#3d8c62',
    },
}));

function QuestionPage(props) {
    const classes = useStyles();

    const [userOpinion, setUserOpinion] = React.useState('');

    const userOpinionToOptionOne = () => {
        setUserOpinion('optionOne');
    };
    const userOpinionToOptionTwo = () => {
        setUserOpinion('optionTwo');
    };

    console.log(userOpinion);

    const allUsers = props.users;
    const allQuestions = props.questions;
    const idOfQuestion = props.match.params.id.substring(3);

    const nameOfPersonAsking = allUsers[allQuestions[idOfQuestion].author].name;
    const avatarOfPersonAsking =
        allUsers[allQuestions[idOfQuestion].author].avatarURL;
    const option1 = allQuestions[idOfQuestion].optionOne.text;
    const option2 = allQuestions[idOfQuestion].optionTwo.text;
    const timeStamp = allQuestions[idOfQuestion].timestamp;
    let date = new Date(timeStamp);

    return (
        <Card className={classes.card}>
            <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
                {date.getDate() +
                    '/' +
                    (date.getMonth() + 1) +
                    '/' +
                    date.getFullYear()}
            </div>
            <Avatar
                src={avatarOfPersonAsking}
                className={classes.avatar}
            ></Avatar>
            <p>{nameOfPersonAsking} asks:</p>
            <p style={{ fontSize: '2em' }}>Would you Rather...</p>
            <Button
                style={{ width: '80%' }}
                variant="contained"
                className={userOpinion === 'optionOne' ? classes.activeBtn : ''}
                onClick={userOpinionToOptionOne}
            >
                {option1}
            </Button>
            <p>OR</p>
            <Button
                style={{ width: '80%' }}
                variant="contained"
                className={userOpinion === 'optionTwo' ? classes.activeBtn : ''}
                onClick={userOpinionToOptionTwo}
            >
                {option2}
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                style={{ marginTop: '20px' }}
                onClick={() => {
                    console.log('submited');
                    props.dispatch(handleAddAnswer(userOpinion, idOfQuestion));
                }}
            >
                Submit Opinion
            </Button>
        </Card>
    );
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUserId: authedUser.id,
        users,
        questions,
    };
}

export default connect(mapStateToProps)(QuestionPage);
