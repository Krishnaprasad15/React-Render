import React, {useReducer} from 'react'

const initialcount=0
const reducer= (state,action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return initialcount
        default:
            return state
    }
}
const Reducer = () => {
    console.log("Rendering")
    const [count,dispatch]= useReducer(reducer,initialcount)
  return (
    <div>
      count - {count}
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
      <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default Reducer
