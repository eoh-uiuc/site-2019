import React, { Component } from 'react';

import MainView from './scenes/MainView';
import About from './scenes/About';
import VisGuide from './scenes/VisGuide';
import Sponsors from './scenes/Sponsors';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MainView />
        <About />
        <VisGuide />
        <Sponsors />
      </div>
    );
  }
}

export default Home;
