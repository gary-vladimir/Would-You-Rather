import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'white',
        background: '#16191b',
        height: '70px',
    },
    navitem: {
        height: '70px',
    },
});

export function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs value={value} onChange={handleChange}>
                <Tab
                    label="Dashboard"
                    component={Link}
                    to="/home"
                    className={classes.navitem}
                />
                <Tab label="Create Question" component={Link} to="/add" />
                <Tab label="Leaderboard" component={Link} to="/leaderboard" />
            </Tabs>
        </Paper>
    );
}
