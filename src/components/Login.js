/* Login component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/AuthenticatedUser';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: '25px',
        color: 'white',
        fontFamily: 'Montserrat',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
    },
    select: {
        color: 'white',
        backgroundColor: '#212529',
        width: '330px',
        fontSize: '30px',
    },
    submit: {
        color: 'white',
    },
    loader: {
        position: 'absolute',
        top: '40%',
        left: 'calc(50% - 20px)',
    },
}));

function Login(props) {
    const classes = useStyles();
    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    };
    console.log(user);
    if (props.users === null) {
        return <CircularProgress color="primary" className={classes.loader} />;
    } else {
        return (
            <div className={classes.title}>
                <h1 style={{ marginBottom: '-5px' }}>Please Log-In</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel
                        id="demo-simple-select-label"
                        style={{ color: 'white' }}
                    >
                        User
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={user}
                        onChange={handleChange}
                        className={classes.select}
                        color="primary"
                    >
                        {Object.keys(props.users).map((u) => {
                            return (
                                <MenuItem
                                    key={props.users[u].id}
                                    classes={classes.item}
                                    value={props.users[u].id}
                                >
                                    {props.users[u].name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Button
                    onClick={() => {
                        console.log('submited');
                        props.dispatch(setAuthedUser(user));
                    }}
                    className={classes.submit}
                    component={Link}
                    to="/home"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users: users,
    };
}

export default connect(mapStateToProps)(Login);
