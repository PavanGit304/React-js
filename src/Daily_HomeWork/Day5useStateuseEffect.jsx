import React from "react";
import {useState,useEffect} from "react";

const Day5useStateuseEffect =()=> { 

    const [city,setCity] = useState("sa");
    
  useEffect(() => {                      
    if(city === "Hyb") 
      setCity("vizag")
    else 
    setCity("midrand")
},[city]);

  return (
    <div>i live {city} </div>
  )
}

export default Day5useStateuseEffect