import React from 'react'
import ReactDOM from "react-dom/client";
import Mdp from './Mdp';
const RailwayStation =({person}) =>{
  return (
    <div>RailwayStation

        <h2>{`is a destation for ${person}`}</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mdp/>);
export default RailwayStation