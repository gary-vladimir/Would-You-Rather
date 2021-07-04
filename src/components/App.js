/* App component */
import React, { Component } from 'react';
import { getInitialData } from '../actions';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import LogOut from './Logout';
import { NotFound } from './404';
import { Switch } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
    state = {};
    componentDidMount() {
        console.log('componentDidMount()');
        this.props.dispatch(getInitialData());
    }
    render() {
        return (
            <div>
                {/* if there is no authed user, show login page */}
                {this.props.userIn === true ? (
                    <Route path="/" component={Login}></Route>
                ) : (
                    <React.Fragment>
                        {/* how navbar in every page except 404 and login */}
                        <Route
                            path={[
                                '/home',
                                '/add',
                                '/question',
                                '/leaderboard',
                            ]}
                            component={NavBar}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/home"
                                component={Dashboard}
                            ></Route>
                            <Route
                                exact
                                path="/add"
                                component={NewQuestion}
                            ></Route>
                            <Route
                                exact
                                path="/question/:id"
                                component={QuestionPage}
                            ></Route>
                            <Route
                                exact
                                path="/leaderboard"
                                component={LeaderBoard}
                            ></Route>

                            <Route
                                exact
                                path="/logout"
                                component={LogOut}
                            ></Route>
                            {/* 404 */}
                            <Redirect exact from="/" to="/home" />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                )}
            </div>
        );
    }
}
// checking if ther is an authedUser
function mapStateToProps({ authedUser }) {
    return {
        userIn: authedUser === null,
    };
}

export default connect(mapStateToProps)(App);
