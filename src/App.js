import React, { Component } from 'react'
import './App.css'
import LightBox from './components/LightBox'
import LightSwitch from "./components/LightSwitch";



export default class App extends Component {
  render() {
    return (
      <>
      <h1>Lightbulbs?!</h1>
      <div id='lights'>
        <LightSwitch />
       
        
      </div>
      </>
    )
  }
}
