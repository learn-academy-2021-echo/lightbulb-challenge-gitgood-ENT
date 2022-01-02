import React, { Component } from 'react'
import LightSwitch from './LightSwitch'

// Create an array to store the number of boxes

export default class AddRemove extends Component {
    constructor(props){
        super(props)
        this.state={
            numberOfLights: 0,
            array: []
        }
    }

    add = () => {
        this.setState({numberOfLights: this.state.numberOfLights + 1}) // Just counts how many lights there are
        this.state.array.push(this.state.numberOfLights) // adds another box by pushing onto the array
    }

    remove = () => {
        this.setState({numberOfLights: this.state.numberOfLights - 1}) // still counting how many lights there are
        this.state.array.pop(this.state.numberOfLights) // removes a light from the array
    }

    clear = () => {
        this.setState({numberOfLights: 0})
        this.setState({array: []})
    }


    render() {
        return (
            <>
                <div id='buttons'>
                    <button onClick={this.add} id='add'>
                        Click here for more lights
                    </button>
                    <button onClick={this.remove} id='remove'>
                        Click here for less lights
                    </button>
                    
                </div>
                <div id='display'>{this.state.array.map(value=><h1><LightSwitch /></h1>)}</div>
            </>
        )
    }
}
