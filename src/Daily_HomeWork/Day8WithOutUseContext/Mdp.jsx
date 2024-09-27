import React, { useState } from 'react'
import Ramatalkies from './Ramatalkies'

function Mdp() {
    const[person, setPerson]=useState("pavan");
  return (
    <div>Mdp
        <h1>{`is start station for ${person}`}</h1>
        <Ramatalkies name={person}/>
      
    </div>
  )
}

export default Mdp