import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Betsyba"
      }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"Betsyba"
            })
        },2000)  //1st arg -> arrow function, 2nd is time interval
    }
  render() {
    console.log("Parent Comp Render")
    return (
      <div>
            ParentComp
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
