import React, { Component } from 'react';

import dare from 'assets/dare_to_defy.png';
import dareMobile from 'assets/dare_to_defy_mobile.png';

import './styles.scss';

const wordList = [
  'The Status Quo',
  'Limitations',
  'Standards',
  'Expectations',
  'Constraints',
  'Bounds',
];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      wordIndex: Math.floor(Math.random() * wordList.length)
    };
  }

  replaceText = () => {
    this.setState((prevState) => ({
      wordIndex: (prevState.wordIndex + 1) % wordList.length,
    }));
  }

  render() {
    return (
      <main>
        <img id="dare" src={dare} alt="Dare To Defy" />
        <img id="dare-mobile" src={dareMobile} alt="Dare To Defy" />
        <h2 className="rotating-text" onAnimationIteration={this.replaceText}>
          { wordList[this.state.wordIndex] }
        </h2>
        <h4>Engineering Open House</h4>
        <h4>March 8th - 9th, 2019</h4>

        <div className="overlay" />
      </main>
    );
  }
}

export default Home;
