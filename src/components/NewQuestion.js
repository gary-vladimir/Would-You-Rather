/* new question component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

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
    },
    splitLine: {
        marginTop: '15px',
        marginBottom: '15px',
        display: 'flex',
        fontSize: '20px',
    },
}));

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#3f51b5',
        },
        '& label': {
            color: '#6c757d',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#30363B',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#30363B',
            },
            '&:hover fieldset': {
                borderColor: '#6c757d',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
            },
        },
    },
})(TextField);

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
                    <CustomTextField
                        className={classes.textField}
                        InputProps={{
                            className: classes.textField,
                        }}
                        id="outlined-basic"
                        label="option 1"
                        variant="outlined"
                    />
                </form>

                <span className={classes.splitLine}>
                    <span
                        style={{
                            transform: 'translatey(10px)',
                            width: '48%',
                            height: '1px',
                            backgroundColor: '#6c757d',
                        }}
                    />
                    <div style={{ marginRight: '15px', marginLeft: '15px' }}>
                        OR
                    </div>
                    <span
                        style={{
                            transform: 'translatey(10px)',
                            width: '48%',
                            height: '1px',
                            backgroundColor: '#6c757d',
                        }}
                    />
                </span>

                <form>
                    <CustomTextField
                        className={classes.textField}
                        InputProps={{
                            className: classes.textField,
                        }}
                        id="outlined-basic"
                        label="option 2"
                        variant="outlined"
                    />
                </form>
            </Paper>
        </div>
    );
}
