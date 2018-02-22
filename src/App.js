import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import InputBarWrapper from './Components/InputBarWrapper'
import InfoSettings from './Components/InfoSettings'
var wordList = require('english-word-list')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: [],
      correctWords:[],
      wordsEntered:[],
      currentWord: 0,
      timeLeft:10.00,
      initialTime: 10,
      counting:false
    }
  }

  componentDidMount(){
    // console.log(wordList.amount(5));
    this.setState({words:wordList.amount(100)})
  }

  wordSubmitted = (correctOrFalse, inputWord)=>{
    this.setState({
      currentWord: this.state.currentWord + 1,
      correctWords: this.state.correctWords.concat(correctOrFalse),
      wordsEntered: this.state.wordsEntered.concat(inputWord)
    })
  }

  startCounter = ()=>{
    let interval = setInterval(this.myTick, 10)
    this.setState({
      interval: interval,
      counting: true
    })
  }

  myTick = ()=>{
    if(this.state.timeLeft <= 0){
        let interval = this.state.interval
        clearInterval(interval);
    } else {
      this.setState({
        timeLeft: this.state.timeLeft - .01
      })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Speed test. Powered by React</h1>
        </header>
        <InfoSettings
          timeLeft={this.state.timeLeft}
          startCounter={this.startCounter}
          initialTime={this.state.initialTime}
        />
        <InputBarWrapper
          wordsEntered={this.state.wordsEntered}
          correctWords={this.state.words}
          words={this.state.words}
          currentIndex={this.state.currentWord}
          wordSubmit={this.wordSubmitted}
        />
      </div>
    );
  }
}

export default App;
