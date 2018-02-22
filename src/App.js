import React, { Component } from 'react';
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
      counting:false,
      blocked: false
    }
  }

  //when the app loads, get a list of words
  componentDidMount(){
    // console.log(wordList.amount(5));
    this.setState({words:wordList.amount(100)})
  }

  //when a word is typed and submitted, move on to the next word
  wordSubmitted = (correctOrFalse, inputWord)=>{
    this.setState({
      currentWord: this.state.currentWord + 1,
      correctWords: this.state.correctWords.concat(correctOrFalse),
      wordsEntered: this.state.wordsEntered.concat(inputWord)
    })
  }

  //ready state, waiting on user to start timer by typing
  handleReady = ()=>{
    console.log("ready to start");
    this.highlightInput()
    this.setState({
      // readyToCount: true
    })
  }

  //set state indicating timer is running
  startCounter = ()=>{
    let interval = setInterval(this.myTick, 500)
    this.setState({
      interval: interval,
      counting: true
    })
  }

  //stop and reset the counter (by clearing interval)
  resetCounter = () =>{
    let interval = this.state.interval
    clearInterval(interval);
    this.setState({
      timeLeft: this.state.initialTime,
      counting:false,
      currentWord: 0,
    })
  }

  //every time the interval is reached, decrement time left, or stop if 0
  myTick = ()=>{
    if(this.state.timeLeft <= 0){
        let interval = this.state.interval
        clearInterval(interval);
        this.setState({
          blocked: true
        })
    } else {
      this.setState({
        timeLeft: this.state.timeLeft - .5
      })
    }
  }

  //get reference to main input field
  getInput =(inputItem) =>{
    this.input = inputItem
  }

  //highlight (focus) the main input field
  highlightInput = () =>{
    this.input.focus()
  }

  //reset app to intial state
  handleReset = ()=>{
    console.log("clearing the state");
    clearInterval(this.state.interval)
    this.setState({
      correctWords:[],
      wordsEntered:[],
      currentWord: 0,
      timeLeft:10.00,
      initialTime: 10,
      // readyToCount:false,
      counting:false,
      blocked: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Speed test. Powered by React</h1>
        </header>
        <InfoSettings
          //methods passed as props
          highlightInput={this.highlightInput}
          startCounter={this.startCounter}
          handleReset={this.handleReset}
          handleReady={this.handleReady}
          //state passed as props
          timeLeft={this.state.timeLeft}
          initialTime={this.state.initialTime}
          counting={this.state.counting}
        />
        <InputBarWrapper
          //methods passed as props
          refToInput={this.getInput}
          highlightInput={this.highlightInput}
          wordSubmit={this.wordSubmitted}
          startCounter={this.startCounter}
          //state passed as props
          blocked={this.state.blocked}
          counting={this.state.counting}
          wordsEntered={this.state.wordsEntered}
          correctWords={this.state.words}
          words={this.state.words}
          currentIndex={this.state.currentWord}
        />
      </div>
    );
  }
}

export default App;
