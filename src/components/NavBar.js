/* nav bar component */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link className="navItem" to="/home" id="active">
                    Dashboard
                </Link>
                <Link className="navItem" to="/add">
                    Create Question
                </Link>
                <Link className="navItem" to="/leaderboard">
                    Leader Board
                </Link>
            </nav>
        );
    }
}
