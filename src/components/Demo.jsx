import React, { useState } from "react";

const Demo = () => {
  
const [count,setCount]=useState(0)

const handleClick=()=>{

}

  return <div>
    <p>{count}</p>
    <button  onClick={handleClick}>+</button>
    <button  onClick={handleClick}>-</button>
  </div>;
};

export default Demo;
