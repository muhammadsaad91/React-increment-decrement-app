import { useState } from "react";
// import react {useState} from "react";

const App = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [final, setFinal] = useState('');
    const clicked = () => {
        setFinal('Hello '+fname + " " + lname);
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
                <input type="text" value={fname} onChange={changef} />
                <input type="text" value={lname} onChange={changel} />
                <button onClick={clicked}>Submitted</button>
            </div>
        </>
    );
}
export default App;