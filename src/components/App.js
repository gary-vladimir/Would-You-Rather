/* App component */
import { Component } from 'react';

import { handleInitialData } from '../actions';

class App extends Component {
    state = {};
    componentDidMount() {
        console.log('componentDidMount()');
        this.props.dispatch(handleInitialData());
    }
    render() {
        return <div>hola gary el pro</div>;
    }
}

export default App;
