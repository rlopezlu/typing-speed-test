import React from 'react'
import '../Style/Stats.css'

export default function Stats(props){
  function setAccuracy(){
    if(props.wordsEntered === 0)
      return 0
    else
      return Math.floor(100 * props.countCorrect / props.wordsEntered)
  }
  return(
    <div className="Stats">
      <div className="viewGrid">
        <div>Words/min <p>{props.countCorrect}</p></div>
        <div>Char/min <p>{props.charsPerMin}</p></div>
        <div>Accuracy <p>{setAccuracy()}%</p></div>
      </div>
      <div className="timeLeft">
        {/* Time left */}
        <p>{Math.floor(props.timeLeft)} sec</p>
        </div>
      {/* <p>Time Elapsed {Math.floor(props.elapsed)} sec</p> */}
    </div>
  )
}
