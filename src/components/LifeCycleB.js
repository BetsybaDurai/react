import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'San'
        }
        console.log('LifeB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() { //executes at last
        console.log('component did mount B')
    }

     shouldComponentUpdate() {
        console.log(' LifeCycleB shldcompupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCyleB componentDid update")
    }

    render() {
      console.log('render B')
    return (
      <div>LifeCycle B</div>
    )
  }
}

export default LifeCycleB
