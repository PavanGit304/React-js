import React from "react";
import {useState} from "react";

const Day5useStateArray =()=> {
const [count,setCount] = useState({num:1,id:"abcd"});

const add =()=>{
    setCount((prev)=>{ 
        return{
            ...prev, num:prev.num+1
        };
    });
}; 
const substract=()=>{
    setCount((prev)=>{
        return{
            ...prev,  num: prev.num-1
        }
    })
};
  return (
    <div>
        <button onClick={substract}>-</button>
        <spam>{count.num}</spam>   {/* Accessing the num property of the count object */}
        <spam>{count.id}</spam>
        <button onClick={add}>+</button>
    </div>
  )
}

export default Day5useStateArray