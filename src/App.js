import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from 'components/Nav';
import Home from 'scenes/Home';
import FileServer from 'scenes/FileServer';

import corporatePacket from 'assets/EOH_2019_Corporate_Packet.pdf';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/sponsor" exact component={FileServer(corporatePacket)} />
        </div>
      </Router>
    );
  }
}

export default App;
