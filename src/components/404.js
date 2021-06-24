/* component when page not found */
import { Component } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends Component {
    render() {
        return (
            <div>
                404- sorry it looks like you got lost
                <Link to="/home"></Link>
            </div>
        );
    }
}
