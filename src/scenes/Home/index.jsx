import React, { Component } from 'react';

import MainView from './scenes/MainView';
import Sponsors from './scenes/Sponsors';
import './styles.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MainView />
        <Sponsors />
      </div>
    );
  }
}

export default Home;
