import { React, Component } from "react";

// example of class component
class Welcome extends Component {
   render() {
      const { name, FatherName } = this.props;
      // const { state1, state2 } = this.state;
      return <h1>Hi {name} {FatherName} </h1>
   }
}
export default Welcome;