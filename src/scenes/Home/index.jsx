import React, { Component } from 'react';

import MainView from './scenes/MainView';
import About from './scenes/About';
import Judge from './scenes/Judge';
import Sponsors from './scenes/Sponsors';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MainView />
        <About />
        <Judge />
        <Sponsors />
      </div>
    );
  }
}

export default Home;
