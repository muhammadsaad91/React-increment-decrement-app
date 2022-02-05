import react, { useState } from "react";

const App = () => {
    const[name , setName]=useState('');
    const[clname,setClname]=useState([]);
   
   
    const change=(e)=>{
        setName(e.target.value);
    }
const clicked=()=>{
    setClname( (olditems)=>{
    return [...olditems,name];
    } )   
    setName('');
}

return (
    <>
    <div className="Main-div">
        <div className="inner-div">
           <div className="header"> <h1>ToDo List</h1></div>
       <div className="flex-inp">  
        <div className="input-div"><input type="text" placeholder="Enter Item Name" value={name} onChange={change}/></div>
        <button onClick={clicked}>+</button>
        </div> 
       {clname.map( (itemval,index)=>{
           return(
           <div className="list-div">
               <button  
               onClick={
                     ()=>{
                        setClname( (old)=>{
                            return old.filter( (val,id)=>{
                                return id!==index;
                            })
                        })
                     }
               }
            >x</button><p>{itemval}</p></div>
       )})}

        </div>
    </div>
    </>
    )
}
export default App;