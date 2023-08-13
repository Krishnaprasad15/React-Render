import React,{useState} from 'react'
import { MemoizezdChildA } from './ChildsComp'

export const userContext = React.createContext()
const UserProvider= userContext.Provider

 const ParComp = () => {
    const [count,setCount]= useState(0)
    console.log("Parent rendering")
  return (
    <div>
        <button onClick={()=>setCount(e=>e+1)}>count - {count}</button>
        <UserProvider value={count}>
            <MemoizezdChildA/>
        </UserProvider>
    </div>
  )
}

export default ParComp
