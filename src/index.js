import React from 'react';
import ReactDOM from 'react-dom';
import FnComp from './demo/FnComp'

class App extends React.Component {

    render() {
        return (
            <div>
                <FnComp />
            </div>
        );
    }
}

// ReactDOM.render(<FnComp />, document.getElementById('root'));


ReactDOM.unstable_createRoot(
    document.getElementById('root')
).render(<FnComp />);