/* Login component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
        color: 'white',
        fontFamily: 'Montserrat',
    },
    select: {
        color: 'white',
        backgroundColor: '#212529',
        width: '200px',
    },
}));

export function Login() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <div className={classes.title}>
            <h1>Please Log-In</h1>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple" color="secondary">
                    User
                </InputLabel>
                <Select
                    color="secondary"
                    className={classes.select}
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option
                        aria-label="None"
                        value=""
                        style={{ backgroundColor: '#16191b' }}
                    />
                    <option
                        value={10}
                        style={{
                            backgroundColor: '#16191b',
                        }}
                    >
                        Sarah
                    </option>
                    <option value={20} style={{ backgroundColor: '#16191b' }}>
                        Tyler
                    </option>
                    <option value={30} style={{ backgroundColor: '#16191b' }}>
                        Vladimir
                    </option>
                </Select>
            </FormControl>
        </div>
    );
}
