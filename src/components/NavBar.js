import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
// styles
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
    logout: {
        padding: '0',
        color: 'white',
        minWidth: '0',
    },
    name: {
        lineHeight: '40px',
        marginRight: '10px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#ced4da',
    },
});

// nav bar
function NavBar(props) {
    let avatarImg = props.users[props.authedUserId].avatarURL;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
            >
                <Tab
                    label="Dashboard"
                    component={Link}
                    to="/home"
                    className={classes.navitem}
                />
                <Tab label="Create Question" component={Link} to="/add" />
                <Tab label="Leaderboard" component={Link} to="/leaderboard" />
            </Tabs>
            <div
                style={{
                    position: 'absolute',
                    top: '13px',
                    right: '25px',
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'row-reverse',
                }}
            >
                <Button
                    className={classes.logout}
                    component={Link}
                    to="/logout"
                >
                    <ExitToAppIcon style={{ fontSize: '40px' }}></ExitToAppIcon>
                </Button>
                <Avatar
                    src={avatarImg}
                    style={{
                        backgroundColor: '#0077b6',
                    }}
                ></Avatar>
                <div className={classes.name}>
                    {props.users[props.authedUserId].name}
                </div>
            </div>
        </Paper>
    );
}
function mapStateToProps({ authedUser, users }) {
    return {
        authedUserId: authedUser.id,
        users: users,
    };
}
export default connect(mapStateToProps)(NavBar);
