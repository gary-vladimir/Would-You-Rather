/* App component */
import { Component } from 'react';
import { handleInitialData } from '../actions';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dashboard } from './Dashboard';
import { NewQuestion } from './NewQuestion';
import { QuestionPage } from './QuestionPage';
import { LeaderBoard } from './LeaderBoard';
import { Login } from './Login';
import { LogOut } from './Logout';
import { NotFound } from './404';

class App extends Component {
    state = {};
    componentDidMount() {
        console.log('componentDidMount()');
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div>
                <Route exact path="/home" component={Dashboard}></Route>
                <Route exact path="/add" component={NewQuestion}></Route>
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
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/logout" component={LogOut}></Route>
                <Route component={NotFound} />
            </div>
        );
    }
}

export default connect(null)(App);
