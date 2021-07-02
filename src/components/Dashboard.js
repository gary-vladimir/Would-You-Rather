/* Home page */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    container: {
        position: 'absolute',
        left: '50%',
        top: '80px',
        transform: 'translate(-50%, 0%)',
        width: '740px',
        height: 'auto',
        color: 'white',
        backgroundColor: '#16191b',
        fontFamily: 'Montserrat',
    },
    card: {
        border: '1px solid #6c757d',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '20px',
        backgroundColor: '#1E2125',
        color: 'white',
        marginBottom: '20px',
        marginTop: '20px',
    },
    avatar: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%) scale(2.2)',
    },
    lineBreak: {
        marginTop: '10px',
        width: '1px',
        height: '170px',
        backgroundColor: 'gray',
        position: 'absolute',
        right: '0px',
        top: '0px',
    },
    notActive: {
        backgroundColor: '#343a40',
        color: '#adb5bd',
    },
}));

function UserCard(classes, name, avatarImg, id) {
    return (
        <Card key={id} className={classes.card}>
            <div style={{ width: '200px', position: 'relative' }}>
                <Avatar src={avatarImg} className={classes.avatar}></Avatar>
                <div className={classes.lineBreak}></div>
            </div>
            <div
                style={{
                    width: '245px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    position: 'relative',
                }}
            >
                <h2>{name} asks:</h2>
                <div
                    style={{
                        height: '1px',
                        width: '100%',
                        backgroundColor: 'gainsboro',
                    }}
                />
                <h4 style={{ color: 'gainsboro' }}>Would you Rather?</h4>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '20px' }}
                >
                    View Poll
                </Button>
            </div>
        </Card>
    );
}

function Dashboard(props) {
    const answeredQuestions = props.answeredQuestions;
    const allQuestions = props.questions;
    const allUsers = props.users;

    console.log(allUsers);
    console.log(answeredQuestions);
    console.log(allQuestions);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.container}>
                <Button variant="contained" color="primary">
                    Unanswered
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.notActive}
                >
                    Answered
                </Button>
                {answeredQuestions.map((element) =>
                    UserCard(
                        classes,
                        allUsers[allQuestions[element].author].name,
                        allUsers[allQuestions[element].author].avatarURL,
                        element
                    )
                )}
            </Paper>
        </div>
    );
}
function mapStateToProps({ questions, users, authedUser }) {
    let answeredQuestions = {};
    Object.keys(authedUser).length !== 0 && Object.keys(users).length !== 0
        ? (answeredQuestions = Object.keys(users[authedUser.id]['answers']))
        : (answeredQuestions = {});

    return {
        answeredQuestions,
        questions,
        users,
    };
}

export default connect(mapStateToProps)(Dashboard);
