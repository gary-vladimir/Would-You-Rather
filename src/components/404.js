/* component when page not found */
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
// 404 page
export class NotFound extends Component {
    render() {
        return (
            <div
                style={{
                    color: '#e63946',
                    fontFamily: 'Montserrat',
                    textAlign: 'center',
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%,-50%)',
                }}
            >
                <h1
                    style={{
                        marginTop: '0px',
                        fontSize: '100px',
                        marginBottom: '0px',
                    }}
                >
                    404
                </h1>
                <h6 style={{ fontSize: '20px', marginTop: '10px' }}>
                    Page not found
                </h6>
                <Button
                    component={Link}
                    to="/home"
                    variant="contained"
                    color="secondary"
                >
                    Go Home
                </Button>
            </div>
        );
    }
}
