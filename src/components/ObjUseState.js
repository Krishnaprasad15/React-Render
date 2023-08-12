import React, {useState} from 'react'

const iniState= {
    fname:'Krishna',
    lname:'Prasad'
}
const ObjUseState = () => {
    const [person,setPerson]= useState(iniState)
    const Handler=()=>{
        // person.fname='Kittu'
        // person.lname='Krishna'
        // setPerson(person)
        const newPerson= {...person}
        newPerson.fname='Kittu'
        newPerson.lname='krishna'
        setPerson(newPerson)
    }
    console.log("UseState render")
  return (
    <div>
        <button onClick={Handler}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjUseState
