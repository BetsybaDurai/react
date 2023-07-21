import React from "react";

// example of function component
const greet = props => {
    // console.log(props);
const {name, FatherName}=props
    return (
        <div>
        <h1>Hello {name} {FatherName}</h1>
            {/* {prop.children} */}
            {/* more than one component means , then need to use div tag */}
           
        </div>
    )
}

export default greet;