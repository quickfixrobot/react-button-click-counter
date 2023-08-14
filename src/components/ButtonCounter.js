import React, { useState } from 'react';
import "./style.css";

function ButtonCounter() {
    const [counter, setCounter] = useState(0)
    return (
      <div className="ButtonCounter">
        <div>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter+1)}>Increment Counter</button>
        </div>
      </div>
    );
  }
  
  export default ButtonCounter;