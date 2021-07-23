import React, { useEffect, useRef } from "react";

const CountDown = ({ time, setTime, seconds, pause, setPause, winner }) => {
  const timeRef = useRef(time);

  useEffect(() => {
    const decreaseTime = () => setTime((prev) => prev - 1);

    if (time < 1 || pause) {
      setTime(seconds);
    } else {
      timeRef.current = setInterval(() => decreaseTime(), 1000);
      return () => clearInterval(timeRef.current);
    }
  }, [time, setTime, seconds, pause, setPause]);

  return <div>Time Left: {pause || winner ? seconds : time}</div>;
};

export default CountDown;
