import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  toggle = () => {
    this.setState(this.status === true ? this.status = false : this.status = true)
  }

  

  render(){

    let switchStyles = {
      border: "2px solid black",
      width: "70px",
      height: "140px",
      margin: "10px",
      padding: "10px"
    }


    return(
      <>
      <button style={switchStyles} onClick={this.toggle}>
        on/off
      </button>
        <h1>Hello World!</h1>
      </>
    )
  }
}
export default App
