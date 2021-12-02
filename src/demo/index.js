import React, { Component, createElement } from 'react';
import { render, createRoot } from 'react-dom';
import FnComp from './FnComp'
import ClassComp from './ClassComp'
import HighestPriority from './HighestPriority'

class App extends Component {
    render() {
        return (
            <div>
                <ClassComp />
            </div>
        );
    }
}

//render(<App />, document.getElementById('root'));


createRoot(
    document.getElementById('root')
).render(<App />);