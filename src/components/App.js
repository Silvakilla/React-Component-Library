import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from './Home/Home';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}

export default App;