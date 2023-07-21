import React from 'react'

function PersonList({person, key}) {
  return (
    <div>
       {key} <h1>I am {person.name}. I am {person.age} years old. My skill set is {person.skill}</h1>
      
    </div>
  )
}

export default PersonList
