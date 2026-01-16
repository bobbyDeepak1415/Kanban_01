import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const indexRef = useRef(0);

  const statusArr = ["online", "offline", "unKnown", "loggedOut"];

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentStatus(statusArr[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % statusArr.length;
    }, 1200);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>{currentStatus}</p>
    </div>
  );
};

export default Demo;
