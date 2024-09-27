import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

//1. create context 
const UserConstVar = createContext();

const Day8_withUseContext =()=> {  
  const [user, setUser] = useState("pavan");

  return (
    <div>
      {/*provide the context value */}
      <UserConstVar.Provider value={user}>
        <Component2/>
        </UserConstVar.Provider>
      {/* <Component2 name={user} /> */}
    </div>
  );
}

const Component2 =() =>{
  return (
    <div>
      <h1>Component 2</h1>
      <Component3/>
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>Component 4</h1>
      <Component5/>
    </div>
  );
}

function Component5() {
 //3. consum/access the context value 
 const user = useContext(UserConstVar)
  return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Day8_withUseContext />);

export default Day8_withUseContext