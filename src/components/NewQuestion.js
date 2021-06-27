/* new question component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
        top: '100px',
        transform: 'translate(-50%, 0%)',
        width: '700px',
        height: '400px',
        color: 'white',
        backgroundColor: '#16191b',
        border: '1px solid #30363B',
        fontFamily: 'Montserrat',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    textField: {
        width: '100%',
        color: 'white',
        borderColor: 'red',
        outlineColor: 'red',
        forcedColorAdjust: 'red',
    },
}));

export function NewQuestion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.container}>
                <h1 style={{ textAlign: 'center', color: '#5969C5' }}>
                    Create New Question
                </h1>
                <hr style={{ border: '1px solid #30363B' }} />
                <h2 style={{ color: '#adb5bd' }}>Would you Rather...</h2>
                <form>
                    <TextField
                        className={classes.textField}
                        InputProps={{
                            className: classes.textField,
                        }}
                        id="outlined-basic"
                        label="enter your input"
                        variant="outlined"
                    />
                </form>
            </Paper>
        </div>
    );
}
