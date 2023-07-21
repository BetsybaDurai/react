import React from 'react'
import Person from './PersonList'
function NameList() {
    const names=['Bruce', 'Clark', 'Dianna', 'Bruce']
    const persons = [
        {
            id: 1,
            name: "Betsyba",
            age: "27",
            skill:"Dev"
        },
        {
            id: 2,
            name: "Suthiya",
            age: "27",
            skill:"Tech"
        },
        {
            id: 3,
            name: "Suvetha",
            age: "27",
            skill:"Back Dev"
        }
    ]
              
    const NameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{NameList} </div>
  
}

export default NameList
