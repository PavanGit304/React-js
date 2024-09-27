import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <h1>Name is:{props.name}</h1> 
        <h1>Age is :{props.age}</h1>

    </div>
  )
}

export default ChildComponent