import React, {useState} from 'react'

function HookCountTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)  //setCount is a function
    
  return (
    <div>
          Count: {count}
          <button onClick={() =>setCount(initialCount)}>Reset</button>
          <button onClick={() =>setCount(count + 1)}>Increment</button>
          <button onClick={() =>setCount(count - 1)}>Decrement</button>
          
    </div>
  )
}

export default HookCountTwo
