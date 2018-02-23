import React from 'react';
import '../Style/Next.css'

export default function Next(props){
  function getNext(){
    // return props.words.slice(props.currentIndex + 1,props.words.length)
    return props.words.slice(props.currentIndex + 1,props.currentIndex + 4)
  }

  return(
    <div className="Next">
      {getNext().map(word =>{
        return <span key ={word}>{word + " "}</span>
      })}
    </div>
  )
}
