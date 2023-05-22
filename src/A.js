import React, { useRef } from 'react'
import { useStore } from './appStore'
const A = () => {
  const nameRef=useRef()
  const set=useStore((state)=>{
   return state.set
  })
  const fnClick=()=>{
    const name=nameRef.current.value;
    set({name:name})
  }
  return (
    <div>
        <h1>A</h1>
        <p>
            Name:<input ref={nameRef} />
        </p>
        <p>
            <button onClick={fnClick}>Submit</button>
        </p>
    </div>
  )
}

export default A