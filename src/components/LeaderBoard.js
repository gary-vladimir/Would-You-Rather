/* Leader board component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

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
        height: '150px',
        backgroundColor: 'gray',
        position: 'absolute',
        right: '0px',
        top: '0px',
    },
}));

function UserCard(
    classes,
    name,
    avatarImg,
    position,
    answeredQ,
    askedQ,
    color
) {
    if (color === undefined) {
        color = '#5969c5';
    }
    return (
        <Card className={classes.card} key={name}>
            <div style={{ width: '200px', position: 'relative' }}>
                <strong style={{ color: `${color}`, fontSize: '50px' }}>
                    #{position}
                </strong>
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
                <h2>{name}</h2>
                <div
                    style={{
                        height: '1px',
                        width: '100%',
                        backgroundColor: 'gainsboro',
                    }}
                />
                <h4 style={{ color: 'gainsboro' }}>
                    Answered questions:{' '}
                    <strong style={{ color: '#5969C5' }}>{answeredQ}</strong>
                </h4>
                <h4 style={{ color: 'gainsboro' }}>
                    Asked questions:{' '}
                    <strong style={{ color: '#5969C5' }}>{askedQ}</strong>
                </h4>
                <div className={classes.lineBreak}></div>
            </div>
            <div
                style={{
                    position: 'relative',
                    textAlign: 'center',
                    width: '240px',
                }}
            >
                <h2 style={{ textAlign: 'center' }}>Total score</h2>
                <h2
                    style={{
                        marginLeft: '90px',
                        backgroundColor: '#5969C5',
                        width: '50px',
                        height: '50px',
                        borderRadius: '25px',
                        lineHeight: '50px',
                    }}
                >
                    {answeredQ + askedQ}
                </h2>
            </div>
        </Card>
    );
}

function LeaderBoard(props) {
    const ids = props.leaderIds;
    const users = props.users;
    const classes = useStyles();
    const colors = ['#f6d27b', '#C0C0C0', '#CD7F32'];
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.container}>
                {ids.map((element, index) =>
                    UserCard(
                        classes,
                        users[element].name,
                        users[element].avatarURL,
                        index + 1,
                        Object.keys(props.users[element].answers).length,
                        users[element].questions.length,
                        colors[index]
                    )
                )}
            </Paper>
        </div>
    );
}

function mapStateToProps({ users }) {
    return {
        leaderIds: Object.keys(users).sort((firstElement, secondElement) => {
            let user2 =
                Object.keys(users[secondElement].answers).length +
                Object.keys(users[secondElement].questions).length;
            let user1 =
                Object.keys(users[firstElement].answers).length +
                Object.keys(users[firstElement].questions).length;
            return user2 - user1;
        }),
        users,
    };
}

export default connect(mapStateToProps)(LeaderBoard);
