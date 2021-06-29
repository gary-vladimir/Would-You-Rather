/* new question component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { newQuestion } from '../actions/Questions';

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
        backgroundColor: '#1E2125',
        border: '1px solid #6c757d',
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
    btn: {
        marginTop: '20px',
        width: '100%',
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
                borderColor: '#6c757d',
            },
            '&:hover fieldset': {
                borderColor: '#adb5bd',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3f51b5',
            },
        },
    },
})(TextField);

function NewQuestion(props) {
    const classes = useStyles();
    const [option1, setUser] = React.useState('');
    const [option2, setUser2] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    };
    const handleChange2 = (event) => {
        setUser2(event.target.value);
    };
    console.log(option1);
    console.log(option2);
    return (
        <div className={classes.root}>
            <Paper elevation={10} className={classes.container}>
                <h1 style={{ textAlign: 'center', color: '#dee2e6' }}>
                    Create New Question
                </h1>
                <hr style={{ border: '1px solid #adb5bd' }} />
                <h2 style={{ color: '#5969C5' }}>Would you Rather...</h2>
                <form>
                    <CustomTextField
                        className={classes.textField}
                        InputProps={{
                            className: classes.textField,
                        }}
                        id="outlined-basic"
                        label="option 1"
                        variant="outlined"
                        onChange={handleChange}
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
                    <div
                        style={{
                            color: '#5969C5',
                            marginRight: '15px',
                            marginLeft: '15px',
                        }}
                    >
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
                        onChange={handleChange2}
                    />
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    onClick={() => {
                        props.dispatch(newQuestion());
                        console.log('submited');
                    }}
                >
                    Submit Question
                </Button>
            </Paper>
        </div>
    );
}

function generateId() {
    return (
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
    );
}

export default connect(null)(NewQuestion);
