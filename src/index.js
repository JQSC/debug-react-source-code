import React, { Component ,createElement} from 'react';
import { render, createRoot } from 'react-dom';
import FnComp from './demo/FnComp'

class App extends Component {

    render() {
        return (
            <div>
                <FnComp />
            </div>
        );
    }
}

//render(<FnComp />, document.getElementById('root'));


createRoot(
    document.getElementById('root')
).render(<FnComp />);