import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const currentIndex = useRef(0);

  const statusArr = ["online", "offline", "unKnown", "loggedOut"];

  useEffect(() => {
    let intervalIndex = setInterval(() => {
      setCurrentStatus(statusArr[currentIndex]);

      currentIndex.current = (currentIndex.current + 1) % statusArr.length;

      return () => clearInterval(intervalIndex);
    }, 1200);
  }, []);

  return (
    <div>
      <h1>jello</h1>

      <p>{currentStatus}</p>
    </div>
  );
};

export default Demo;
