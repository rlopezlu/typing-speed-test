import React from 'react';
import '../Style/Completed.css'

export default function Completed(props){

  function getCompleted(){
    let completedArray = props.words.slice(0,props.currentIndex)
    return completedArray
  }

  return(
    <div className="Completed">
      {getCompleted().map(word => {
        return <span key={word}>{word + " "}</span>
      })}
    </div>
  )
}
