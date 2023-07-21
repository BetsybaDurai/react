import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoggedIn: true
      }
    }
    render() {
        if (this.state.isLoggedIn) {
            return (<div>Welcome Betsyba</div>)
        } else {
            return (<div>Welcome Suthiya</div>)

        }
    // return (
    //     <div>
    //         <div>Welcome Betsyba</div>
    //         <div>Welcome Suthiya</div>

    //     </div>
    // )
  }
}
export default UserGreeting