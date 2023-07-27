import React, {useState} from 'react'

function HookCountThree() {

    const [name, setName]=useState( { firstName:'', lastName:''})
  return (
      <form>
          <input type='text'
              value={name.firstName}
              onChange={e=>setName({...name, firstName:e.target.value})}
          />
           <input type='text'
              value={name.lastName}
              onChange={e=>setName({...name ,lastName:e.target.value})}
          />
          <h1>your first name :{name.firstName}</h1>
          <h1>your last name :{name.lastName}</h1>
          {/* stringify will display here only one field value , set the name using spread operator to show both first and last name */}
          <h1>{JSON.stringify(name)}</h1>  
          

    </form>
  )
}

export default HookCountThree
