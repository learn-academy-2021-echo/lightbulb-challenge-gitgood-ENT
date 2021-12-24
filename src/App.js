import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: 'off',
      lightColor: 'white',
    }
  }

  toggle = () => {
    this.setState({
      status:
        this.state.status === 'off' ? // if it is off
          (this.state.status = 'on') : // turn it on
          (this.state.status = 'off'), // else turn it off
      lightColor:
        this.state.status === 'off' ? // same logic as above but controlling color
          (this.state.lightColor = 'white') :
          (this.state.lightColor = 'yellow')
        });
  };

 

  

  render(){
    return(
      <>
      <button id='onOff' style={{backgroundColor: this.state.lightColor}} onClick={this.toggle}>
        {this.state.status}
      </button>
      </>
    )
  }
}
export default App
