import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Reg Comp Render")

    return (
      <div>
        Reg Comp {this.props.name}
      </div>
    )
  }
}

export default RegComp
