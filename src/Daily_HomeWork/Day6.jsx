import React, { useState } from 'react'

const Day6 =()=> {

    const[count, setCount]=  useState(0);

    const increaseNumber=()=>{
        setCount(count+1);
    }
    const decreaseNumber=()=>{
        if(count>0){
        setCount(count-1);
    }
}
    const resetNumber=()=>{
        setCount(0);
    }
       return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseNumber}>IncreaseNumber</button>
        <button onClick={decreaseNumber}>DecreaseNumber</button>
        <button onClick={resetNumber}>Reset</button>
    </div>
  )
}

export default Day6