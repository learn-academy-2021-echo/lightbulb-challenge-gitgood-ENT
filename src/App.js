import React, { Component } from 'react'
import './App.css'
import AddRemove from "./components/AddRemove";



export default class App extends Component {
  render() {
    return (
      <>
      <h1 id='header'>Lightbulbs?!</h1>
      
      <div id='lights'>
        <AddRemove />   
       
        
      </div>
      </>
    )
  }
}
