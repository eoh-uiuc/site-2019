import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from 'components/Nav';
import Home from 'scenes/Home';
import ExternalRoute from 'scenes/ExternalRoute';

import corporatePacket from 'assets/EOH_2019_Corporate_Packet.pdf';

import './styles.scss';

const exhibitorRegistration = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSe-32hmn_YxHhKz2fNZM7CKc9fP_x-QdBMIiSGYmOoJACKUAA/viewform?vc=0&c=0&w=1&usp=mail_form_link'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/sponsor" exact component={ExternalRoute(corporatePacket)} />
          <Route path="/register" exact component={ExternalRoute(exhibitorRegistration)} />
        </div>
      </Router>
    );
  }
}

export default App;
