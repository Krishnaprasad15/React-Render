import React, { useState } from 'react'

const iniState=['k','p']
const ArrUseState = () => {
    const [persons,setPersons]= useState(iniState)
    const Handler=()=>{
        // persons.push('S')
        // persons.push('A')
        // setPersons(persons)
        const newPerson= [...persons]
        newPerson.push('S')
        newPerson.push('A')
        setPersons(newPerson)
    }
    console.log("Array useState rendering")
  return (
    <div>
      <button onClick={Handler}>Click</button>
      {
        persons.map(person=> <div key={person}>{person}</div> )
      }
    </div>
  )
}

export default ArrUseState
