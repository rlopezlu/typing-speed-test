import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Settings from './Components/Settings.js'
import Stats from './Components/Stats'
import InputBarWrapper from './Components/InputBarWrapper'
var wordList = require('english-word-list')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: [],
      currentWord: 3
    }
  }

  componentDidMount(){
    // console.log(wordList.amount(5));
    this.setState({words:wordList.amount(10)})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Speed test. Powered by React</h1>
        </header>
        <Stats />
        <Settings />
        <InputBarWrapper
          words={this.state.words}
          currentIndex={this.state.currentWord}
        />
      </div>
    );
  }
}

export default App;
