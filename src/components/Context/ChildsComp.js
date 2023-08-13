import React, { useContext } from 'react'
import { userContext } from './ParComp'

export const ChildA = () => {
    console.log("Child A rendering")
    return (
    <div>
      Child A
      <ChildB/>
    </div>
  )
}
export const MemoizezdChildA= React.memo(ChildA)
export const ChildB = () => {
    console.log("Child B rendering")
    return (
      <div>
      Child B 
      <ChildC/> 
      </div>
    )
}

export const ChildC = () => {
    console.log("Child C rendering")
    const count= useContext(userContext)
    return (
      <div>
        Child C count - {count}
      </div>
    )
  }


