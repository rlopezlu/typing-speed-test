import React from 'react'
import '../Style/Stats.css'

export default function Stats(props){
  return(
    <div className="Stats">
      <p>WPM</p>
      <p>Char/min</p>
      <p>Accuracy %</p>
      <p>Time left</p>
      <p>Time Elapsed</p>
    </div>
  )
}
