import React from 'react'
import TestComp from './TestComp'

const Mango =() =>{
return(
    <h1>Mangoes are my favorites</h1>
)
}

const Graps=() =>{   {/* const is used to define a variable that can't be changed. const:prevents reassignment,*/}
    return(
        <h2>Grapes are my favorites</h2>
    )
}

function Sample() {
  return (
    <div>
         <TestComp/>  {/* rendering/ calling component from differnt component file */}
        <Mango/>  {/* rendering/ calling component from same component file */}
        <Graps/>

    </div>
  )
}

export default Sample