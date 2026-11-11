import React, { useReducer, useState } from "react";


const initialState={
  value:200
}

 const handleClick = (action) => {
    switch (action.type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      default:
        return count;
    }
  };


const Demo = () => {
  const [count, setCount] = useReducer(handleClick,initialState);

 
  return (
    <div>
      <p>{count.value}</p>
      <button
        className="p-2 bg-slate-400"
        onClick={() => handleClick(count, increment)}
      >
        +
      </button>
      <button
        onClick={() => handleClick(count, decrement)}
        className="p-2 bg-slate-500 m-2"
      >
        -
      </button>
    </div>
  );
};

export default Demo;
