/* Login component */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
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
            <h1 style={{ marginBottom: '-5px' }}>Please Log-In</h1>
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
