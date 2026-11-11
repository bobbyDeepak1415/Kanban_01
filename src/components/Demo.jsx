import React, { useReducer, useState } from "react";


const initialState={
  value:200
}

 const handleClick = (count,action) => {
    switch (action.type) {
      case "increment":
        return {
          value:count.value+1
        }
      case "decrement":
        return {

          value:count.value - 1
        }
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
        disabled={count.value===200}
        className="p-2 bg-slate-400"
        onClick={() => setCount({type:"increment"})}
      >
        +
      </button>
      <button
        onClick={() =>setCount({type: "decrement"})}
        className="p-2 bg-slate-500 m-2"
      >
        -
      </button>
    </div>
  );
};

export default Demo;
