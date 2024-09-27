import React from "react";
import { useState } from "react";

const Day5useState = () => { // useSate: it adds state(data) to the funcational components and it is userdefine 
const [count, setCount] = useState(0);
const add=()=>{
  return(
  setCount(count+1)
  );
};
const substract =() =>{
  return (
  setCount(count-1)
  );
};

return(
  <div>
  <button onClick={substract}>-</button>
  <span>{count} </span>
  <button onClick={add}>+</button>
  </div>
)
};
export default Day5useState