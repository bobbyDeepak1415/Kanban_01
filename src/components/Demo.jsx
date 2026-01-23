import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const states = ["Offline", "Online", "Unknown", "loggedOut"];

  const [currentStatus, setCurrentStatus] = useState("");

  const indexRef = useRef(0);

  useEffect(() => {
    const interValRef = setInterval(() => {
      setCurrentStatus(states[indexRef.current]);
      indexRef.current = (indexRef.current + 1)%states.length;
    }, 1200);

    return () => clearInterval(interValRef);
  }, []);

  return (
    <div>
      <h1>{currentStatus}</h1>
    </div>
  );
};

export default Demo;
