import React from 'react'
import Stats from './Stats'
import Settings from './Settings'

export default function InfoSettings(props){
  return(
    <div className="InfoSettings">
      <Stats
        timeLeft={props.timeLeft}
        elapsed={props.initialTime - props.timeLeft}
      />
      <Settings
        handleReset={props.handleReset}
        highlightInput={props.highlightInput}
        startCounter={props.startCounter}
        handleReady={props.handleReady}
        readyToCount={props.readyToCount}
        counting={props.counting}
      />
    </div>
  )
}
