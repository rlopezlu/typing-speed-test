import React, {Component} from 'react';
import '../Style/Current.css'

export default class Current extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputChars : "",
      lastChar: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      inputChars:e.target.value,
      lastChar: e.target.value[e.target.value.length -1]
    })
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      console.log("enter was pressed");
    }
  }

  render(){
    return(
      <div className="Current">
        <input
          placeholder={this.props.words[this.props.currentIndex]}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        <p>{this.props.words[this.props.currentIndex] + " "}</p>
      </div>
    )
  }
}
