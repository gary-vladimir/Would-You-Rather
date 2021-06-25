/* Login component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    },
    select: {
        color: 'white',
        backgroundColor: '#212529',
        width: '330px',
        fontSize: '30px',
    },
}));

export function Login() {
    const classes = useStyles();
    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
        console.log(user);
    };

    return (
        <div className={classes.title}>
            <h1 style={{ marginBottom: '-5px' }}>Please Log-In</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label" color="secondary">
                    Age
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={user}
                    onChange={handleChange}
                    className={classes.select}
                    color="secondary"
                >
                    <MenuItem classes={classes.item} value={'sarah'}>
                        Sarah
                    </MenuItem>
                    <MenuItem value={'tyler'}>Tyler</MenuItem>
                    <MenuItem value={'john'}>John</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
