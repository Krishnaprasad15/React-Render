import React ,{useState}from 'react'
import  { OptimizedChild } from './ChildComp'

const ParComp = () => {
    const [count,setCount]= useState(0)
    const [name,setName]= useState('Krishna')
    console.log("Parent Render")
  return (
    <div>
      <button onClick={()=>setCount(e=>e+1)}>Count- {count}</button>
      <button onClick={()=>setName('Kittu')}>name - {name}</button>
      <OptimizedChild name={name}/>
    </div>
  )
}

export default ParComp
