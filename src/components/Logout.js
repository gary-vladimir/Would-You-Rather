/* component for loggin out */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUserToNull } from '../actions/AuthenticatedUser';
// log out component
class Logout extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(setAuthedUserToNull(null));
    }
    render() {
        return <Redirect to="/" />;
    }
}

export default connect(null)(Logout);
