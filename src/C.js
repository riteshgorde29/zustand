import React from 'react'
import { useStore } from './appStore'

const C = () => {
  const state=useStore((state)=>{
    return state;
  })
  return (
    <div>
        <h1>C</h1>
        <h3>Name:{state.name}</h3>
        <h3>Location:{state.loc}</h3>
    </div>
  )
}

export default C