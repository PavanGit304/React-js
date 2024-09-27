import { useState,useEffect } from "react";
import React from 'react'

const  Day7_setTimeout=() =>{ // setTimeout(()=>{},time)
  const [count,setCount]=useState(0)
  
  // useEffect(()=>{},[count]);
  const delayedincreament =() =>{
    setTimeout(()=>{
      setCount(count+1)
    },2000)
  }
  
  return (
    <div>
      <p>Count:{count}</p>

      <button onClick={delayedincreament}>increment</button>
    </div>
  )
}

export default Day7_setTimeout