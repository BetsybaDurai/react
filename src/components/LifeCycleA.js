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
    render() {
      console.log('render')
    return (
        <div><div>LifeCycle A</div>
        <LifeCycleB/>
        </div>
    )
  }
}

export default LifeCycleA
