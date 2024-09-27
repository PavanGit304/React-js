import React from 'react'

function destructingChaildComp({name, age}) {
  return (
    <div>
        <h1>Name is :{name.name}</h1>
        <h1>Age is : {age.age} </h1>

    </div>
  );
}

export default destructingChaildComp