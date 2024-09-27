import React from 'react'
import ReactDOM from "react-dom/client";
import { useState } from 'react';

function Day8_withOutUseContext() {
  const [person, setPerson] = useState("Jesse Hall");

  return (
    <div>
      {/* <h1>{`Hello ${user}!`}</h1> */}
      <Component2 Varname={person} />
    </div>
  );
}

function Component2({Varname}) { // Here Varname is prop
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 Varname={Varname} />
    </div>
  );
}

function Component3({Varname}) {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 Varname={Varname} />
    </div>
  );
}

function Component4({Varname}) {
  return (
    <div>
      <h1>Component 4</h1>
      <Component5 Varname={Varname} />
    </div>
  );
}

function Component5({Varname}) {
  return (
    <div>
      <h1>Component 5</h1>  
      <h2>{`Hello ${Varname} again!`}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Day8_withOutUseContext />);

export default Day8_withOutUseContext