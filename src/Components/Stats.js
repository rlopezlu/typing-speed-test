import React from 'react'
import '../Style/Stats.css'

export default function Stats(props){
  return(
    <div className="Stats">
      <p>WPM</p>
      <p>Char/min</p>
      <p>Accuracy %</p>
      <p>Time left {props.timeLeft}</p>
      <p>Time Elapsed {props.elapsed}</p>
    </div>
  )
}
