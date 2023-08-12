import React from 'react'

export const ChildComp = () => {
    console.log("Child Render")
  return (
    <div>
      Child component
    </div>
  )
}
export const OptimizedChild= React.memo(ChildComp)
