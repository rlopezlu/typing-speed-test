import React from 'react'
import Current from './CurrentInput.js'
import Completed from './Completed.js'
import Next from './Next.js'
import '../Style/InputWrapper.css'

export default function InputBarWrapper(props){
  return(
    <div className="input-wrapper">

      <Completed
        words={props.words}
        currentIndex={props.currentIndex}
      />
      <Current
        words={props.words}
        currentIndex={props.currentIndex}
      />
      <Next
        words={props.words}
        currentIndex={props.currentIndex}
      />
    </div>
  )
}
