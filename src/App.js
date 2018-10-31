import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './components/Nav';
import Home from './scenes/Home';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
