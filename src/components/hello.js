import React from "react";

const hello =() => {
    // return (<div><h1>Hello Betsyba!</h1></div>)
    return React.createElement('div', {id:'hello', className:'dummy-class'},
        React.createElement('h1',null, 'Hello Betsyba')
    )
}

export default hello;