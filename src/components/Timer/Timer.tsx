import { useState, useEffect } from "react";
import './Timer.css';
import Menu from '../Menu/Menu';

export default function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let from: number = 10;
    let timer = setInterval(() => {
      if (from === 0) {
        clearInterval(timer);
        return <Menu />;
      }
      from--;
      let sec: number = from;
      setSeconds(sec);
    }, 1000);
  }, [])

  return (
    <div className="timer_block" onLoad={Timer}>
      <h1 className="timer">{seconds}</h1>
    </div>
  );
}
