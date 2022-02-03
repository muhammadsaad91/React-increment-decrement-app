import react, { useState } from "react";
// import React {useState} from "react";
// import react {useState} from "react";

const App = () => {
    const[ but,setBut]=useState('')
    const [butname, setButname] = useState('Submit');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [final, setFinal] = useState('');
    const clicked = () => {
        setFinal('Hello ' + fname + " " + lname);
        setButname('Submitted See Your Name Above');
    }
    const up=()=>{
        setBut('clicked');
    }
    const changef = (e) => {
        setFname(e.target.value);
    }
    const changel = (e) => {
        setLname(e.target.value);
    }

    return (
        <>
            <div className="card">
                <h1>{final}</h1>
                <input type="text" value={fname} onChange={changef} placeholder="Enter First Name" />
                <input type="text" value={lname} onChange={changel} placeholder="Enter Second Name" />
                <button onClick={clicked} onMouseOut={up}>{butname}</button>
            </div>
        </>
    );
}
export default App;