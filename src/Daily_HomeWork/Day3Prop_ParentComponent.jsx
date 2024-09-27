import React from 'react'
import FirstComp from '../propcontainer/FirstComp'
import Secondcomp from '../propcontainer/Secondcomp'
import ThridComp from '../propcontainer/ThridComp'
import FourthComp from '../propcontainer/FourthComp'
import ChildComponent from '../propcontainer/ChildComponent'


function Day3Prop_ParentComponent() {
  return (
    <div><h1>Day3</h1>
    <ChildComponent name ='pavanReddy' age = {31} />  


    {/* <div>
    <FirstComp  name = {user.name}/>                  {/* its a keys and value pair 
    <Secondcomp name = {user.city}/>
    <ThridComp  name = {user.area}/>
    <FourthComp name = {user.state}/>
    </div> */}
    </div>
    
  )
}

// const user ={  // user is object name
//   name: "pavan",
//   city: "Sandton",
//   area: "Bowling avenu",
//   state: "Joburg"
// }


export default Day3Prop_ParentComponent