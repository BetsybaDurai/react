import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Betsyba'
        }
        console.log('Life Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() { //executes at last
        console.log('component did mount')
    }

    shouldComponentUpdate() {
        console.log(' LifeCycleA shldcompupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCyleA componentDid update")
    }
    changeState =() => {
        this.setState({
            name:'codeVolution'
        })
    }
    render() {
      console.log('render')
    return (
        <div><div>LifeCycle A</div>
            <button onClick={this.changeState}>Change State</button>
        <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA
