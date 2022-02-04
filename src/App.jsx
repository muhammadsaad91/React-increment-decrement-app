import react, { useState } from "react";


// jab bhi form lgaen ge tou form ki wjah se button click krne pe page auto refresh hoga 
             // isko sahi kr skte hain 'event.preventDefault();' lga kr


const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: '',
        number:'',

    });
    const change = (event) => {
        const { name, value } = event.target;
        setFullName((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const submit = (event) => {
        // event.preventDefault();
        console.log(fullName);
    };




    return (
        <>
            <form onSubmit={submit}>
                    <h1>Full Name:{fullName.fname} {fullName.lname} </h1>
                    <p>Email :{fullName.email}</p>
                    <p>Number:{fullName.number}</p>
                <div className="card">
                    <input type="text" name="fname" value={fullName.fname} onChange={change}  placeholder="Enter Your first name"/>
                    <input type="text" name="lname" value={fullName.lname} onChange={change}  placeholder="Enter Your last name"/>
                    <input type="text" name="email" value={fullName.email} onChange={change} placeholder="Enter Your email" />          
                    <input type="text" name="number" value={fullName.number} onChange={change} placeholder="Enter Your number" />
                    <button type="Submit" >Submit Here</button>
                </div>

            </form>
        </>
    );
}
export default App;