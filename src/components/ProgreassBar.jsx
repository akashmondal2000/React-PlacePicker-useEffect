import { useState,useEffect } from "react";

const ProgreassBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const Interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      console.log("clear interval");
      clearInterval(Interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default ProgreassBar;
