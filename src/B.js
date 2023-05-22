import React, { useRef } from 'react'
import { useStore } from './appStore'
export const B = () => {
    const locRef=useRef()
    const set=useStore((state)=>{
       return state.set
    })
    const fnClick=()=>{
        const loc=locRef.current.value;
        set({loc:loc})
    }
  return (
    <div>
        <h1>B</h1>
        <p>
            Location:<input ref={locRef} />
        </p>
        <p>
            <button onClick={fnClick}>Submit</button>
        </p>
    </div>
  )
}
