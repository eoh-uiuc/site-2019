import React, { Component } from 'react';
import logo from './assets/logo-white.png';
import './App.scss';

const wordList = [
  'Boundaries',
  'The Status Quo',
  'Rahul',
  'Time Linearity',
  'Limits',
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordIndex: 0,
      wordPortion: '',
    }
  }

  buildWord = () => {
    const { wordIndex, wordPortion } = this.state;
    const curWord = wordList[wordIndex];

    if (wordPortion.length === curWord.length) {
      setTimeout(this.destructWord, 1500);
    } else {
      this.setState({
        wordPortion: wordPortion + curWord.charAt(wordPortion.length),
      });

      setTimeout(this.buildWord, 100);
    }
  }

  destructWord = () => {
    const { wordIndex, wordPortion } = this.state;
    
    if (wordPortion.length === 0) {
      this.setState({
        wordIndex: (wordIndex + 1) % wordList.length,
      });
      setTimeout(this.buildWord, 800);
    } else {
      this.setState({
        wordPortion: wordPortion.slice(0, -1),
      });
      setTimeout(this.destructWord, 100);
    }
  }

  componentDidMount() {
    this.buildWord();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Engineering Open House</h1>
          <h2>
            Dare to Defy <span className="word">{this.state.wordPortion}</span>
            <span className="type-cursor">|</span>
          </h2>
          <h3>March 8th - 9th, 2019</h3>
        </header>
      </div>
    );
  }
}

export default App;
