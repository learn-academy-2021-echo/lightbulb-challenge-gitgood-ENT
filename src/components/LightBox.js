import React, { Component } from 'react'


class LightBox extends Component{
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
          ('on') : // turn it on
          ('off'), // else turn it off
      lightColor:
        this.state.status === 'on' ? // same logic as above but controlling color
          ('white') :
          ('yellow')
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
export default LightBox
