import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const handleClick = (count, action) => {
    switch (action.type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      default:
        return count;
    }
  };

  return (
    <div>
      <p>{count}</p>
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
