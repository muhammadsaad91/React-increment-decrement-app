import react, { useState } from "react";

const App = () => {
    const[name , setName]=useState('');
    const[clname,setClname]=useState('');
   
   
    const change=(e)=>{
        setName(e.target.value);
    }
const clicked=()=>{
    setClname(name)   
}
return (
    <>
    <div className="Main-div">
        <div className="inner-div">
           <div className="header"> <h1>ToDo List</h1></div>
       <div className="flex-inp">  
        <div className="input-div"><input type="text" placeholder="Enter Item Name" onChange={change}/></div>
        <button onClick={clicked}>+</button>
        </div> 
        <div className="list-div"><button>-</button><p>{clname}</p></div>

        </div>
    </div>
    </>
    )
}
export default App;