import React, { useEffect, useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let animationFrame;

    if (running) {
      const startTime = performance.now() - elapsed;

      const updateTimer = () => {
        setElapsed(performance.now() - startTime);
        animationFrame = requestAnimationFrame(updateTimer);
      };

      animationFrame = requestAnimationFrame(updateTimer);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [running]);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const reset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const formatTime = (time) => {
    const totalMilliseconds = Math.floor(time);

    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      milliseconds: String(milliseconds).padStart(2, "0"),
    };
  };

  const time = formatTime(elapsed);

  return (
    <div className="app">
      <div className="stopwatch-card">
        <div className="header">
          <span className="status-dot"></span>
          <span>{running ? "STOPWATCH RUNNING" : "STOPWATCH"}</span>
        </div>

        <h1>Precision Timer</h1>

        <div className="display">
          <div className="time">
            <span>{time.hours}</span>
            <span className="separator">:</span>
            <span>{time.minutes}</span>
            <span className="separator">:</span>
            <span>{time.seconds}</span>
            <span className="milliseconds">.{time.milliseconds}</span>
          </div>

          <div className="labels">
            <span>HOURS</span>
            <span>MINUTES</span>
            <span>SECONDS</span>
            <span>MS</span>
          </div>
        </div>

        <div className="controls">
          {!running ? (
            <button className="btn start-btn" onClick={start}>
              <span>▶</span>
              Start
            </button>
          ) : (
            <button className="btn pause-btn" onClick={stop}>
              <span>Ⅱ</span>
              Pause
            </button>
          )}

          <button className="btn reset-btn" onClick={reset}>
            <span>↻</span>
            Reset
          </button>
        </div>

        <div className="footer">
          <span>High precision timing</span>
          <span className="footer-dot">•</span>
          <span>Milliseconds enabled</span>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
