import React, { useState, useEffect } from 'react';
import "./Stopwatch.css";

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setCount(0);
  }

  return (
    <div>
      <h1>My Stopwatch</h1>

      <div className="stopwatch">
        <div className="display">
          {count} seconds
        </div>

        <button className="btn" onClick={start}>
          Start
        </button>

        <button className="btn" onClick={stop}>
          Stop
        </button>

        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
