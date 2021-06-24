/* nav bar component */
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink
                    className="navItem"
                    to="/home"
                    activeClassName="active"
                >
                    Dashboard
                </NavLink>
                <NavLink className="navItem" to="/add" activeClassName="active">
                    Create Question
                </NavLink>
                <NavLink
                    className="navItem"
                    to="/leaderboard"
                    activeClassName="active"
                >
                    Leader Board
                </NavLink>
            </nav>
        );
    }
}
