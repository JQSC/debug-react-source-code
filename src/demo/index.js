import React, { Component, createElement } from 'react';
import { render, createRoot } from 'react-dom';
import FnComp from './FnComp'
import ClassComp from './ClassComp'
import HighestPriority from './HighestPriority'
import React18 from './react18.js'

class App extends Component {
    render() {
        return (
            <div>
                <React18 />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));


// createRoot(
//     document.getElementById('root')
// ).render(<App />);