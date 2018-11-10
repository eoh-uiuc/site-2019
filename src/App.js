import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from 'components/Nav';
import Home from 'scenes/Home';
import ExternalRoute from 'scenes/ExternalRoute';
import Error from 'scenes/Error';

import corporatePacket from 'assets/EOH_2019_Corporate_Packet.pdf';

import './styles.scss';

const exhibitorRegistration = 'https://goo.gl/forms/KGz0PT04lFHevOio1';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sponsor" exact component={ExternalRoute(corporatePacket)} />
            <Route path="/register" exact component={ExternalRoute(exhibitorRegistration)} />
            <Route component={Error("Page Not Found")} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
