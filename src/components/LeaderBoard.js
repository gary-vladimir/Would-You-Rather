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

function UserCard(classes, name, position, answeredQ, askedQ, color) {
    return (
        <Card className={classes.card}>
            <div style={{ width: '200px', position: 'relative' }}>
                <strong style={{ color: `${color}`, fontSize: '50px' }}>
                    #{position}
                </strong>
                <Avatar className={classes.avatar}></Avatar>
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

function LeaderBoard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.container}>
                {UserCard(classes, 'Sarah Edo', '1', 4, 2, '#f6d27b')}
                {UserCard(classes, 'John', '2', 3, 2, '#C0C0C0')}
                {UserCard(classes, 'Vladimir', '3', 2, 2, '#cd7f32')}
            </Paper>
        </div>
    );
}

export default connect(null)(LeaderBoard);
