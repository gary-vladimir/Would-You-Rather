/* component for loggin out */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/AuthenticatedUser';

class Logout extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(logoutUser(null));
    }
    render() {
        return <Redirect to="/" />;
    }
}

export default connect(null)(Logout);
