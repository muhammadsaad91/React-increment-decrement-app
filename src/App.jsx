import react, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const App = () => {
    const [count, setCount] = useState(0);
    const clickeneg = () => {
        setCount(count-1);

    }
    const clicknpos=()=>{
         setCount(count+1);
    }
    if( count<0){
        setCount(0);
        alert("Negative not allowed😜")
    }
  return(
      <>
<div className="Main-div">
    <div className="inner-div">
      <div className="header"> <h1> {count}</h1></div>
      <div className="input-div"> <button onClick={clicknpos}>+</button>
      <div className="list-div">
          <button onClick={clickeneg}>--</button>
      </div></div>
      </div>
      </div>
      </>
  )
}
export default App;