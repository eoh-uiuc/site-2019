import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from 'components/Nav';
import Home from 'scenes/Home';
import Events from 'scenes/Events';
import ExternalRoute from 'scenes/ExternalRoute';
import { ErrorHOC } from 'scenes/Error';

import corporatePacket from 'assets/EOH_2019_Corporate_Packet.pdf';

const exhibitorRegistration = 'https://goo.gl/forms/KGz0PT04lFHevOio1';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/sponsor" exact component={ExternalRoute(corporatePacket)} />
            <Route path="/register" exact component={ExternalRoute(exhibitorRegistration)} />
            <Route component={ErrorHOC('Page Not Found')} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
