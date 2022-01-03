import React, { Component } from 'react'
import  BulbOff  from "./svg/bulb-off.svg";
import  BulbOn  from "./svg/bulb-on.svg";
import KnifeOff from "./svg/knifeOff.svg";
import KnifeOn from "./svg/knifeOn.svg";

// In order to get the image to be a button I had to change the state to only include the path to the image and not img src, so that I could use the tags properly in the button tag below.

class LightSwitch extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: 'off',
      light: <img src={BulbOff}/>,
      switch: KnifeOff,
    }
  }

  lightToggle = () => {
    this.setState({
      status:
        this.state.status === 'off' ? // if it is off
          ('on') : // turn it on
          ('off'), // else turn it off
      light:
        this.state.status === 'on' ? // same logic as above but controlling color
          (<img src={BulbOff}/>) :
          (<img src={BulbOn}/>),
      switch:
        this.state.status === 'on' ? // same logic again
          (KnifeOff) :
          (KnifeOn)
        });
  };

 



  render(){
    return(
      <div id='cent'>

      <button id='switch'><img src={this.state.switch} onClick={this.lightToggle}/></button>
      
      {this.state.light}
      </div>
    )
  }
}
export default LightSwitch
