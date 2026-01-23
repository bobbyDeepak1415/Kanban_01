import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const states = ["online", "offline", "unKnown", "loggedOut"];

  const [currentStatus, setCurrentStatus] = useState("");

  const statusRef = useRef(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentStatus(states[statusRef.current]);
      statusRef.current = (statusRef.current + 1) % states.length;
    }, 1500);

    return () => clearInterval(intervalRef);
  });

  return <>{currentStatus}</>;
};

export default Demo;
