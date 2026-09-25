import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setCount((prev) => prev + step);
      }

      if (event.key === "ArrowDown") {
        setCount((prev) => prev - step);
      }

      if (event.key.toLowerCase() === "r") {
        setCount(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

  const increment = () => {
    setCount((prev) => prev + step);
  };

  const decrement = () => {
    setCount((prev) => prev - step);
  };

  const reset = () => {
    setCount(0);
  };

  const addTen = () => {
    setCount((prev) => prev + 10);
  };

  const subtractTen = () => {
    setCount((prev) => prev - 10);
  };

  const getStatus = () => {
    if (count > 0) return "POSITIVE";
    if (count < 0) return "NEGATIVE";
    return "NEUTRAL";
  };

  return (
    <div className="counter-app">
      <div className="counter-card">

        {/* Header */}
        <div className="counter-header">
          <div className="header-icon">＋</div>

          <div>
            <p className="eyebrow">UTILITY</p>
            <h1>Counter</h1>
          </div>

          <div className={`status ${getStatus().toLowerCase()}`}>
            <span></span>
            {getStatus()}
          </div>
        </div>

        {/* Main Counter */}
        <div className="counter-display">

          <span className="display-label">CURRENT VALUE</span>

          <div
            className={`count-number ${
              count > 0
                ? "positive"
                : count < 0
                  ? "negative"
                  : "zero"
            }`}
          >
            {count}
          </div>

          <div className="count-info">
            <span>Step: {step}</span>
            <span>•</span>
            <span>Keyboard enabled</span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="main-controls">

          <button
            className="control-btn decrease"
            onClick={decrement}
            aria-label="Decrease counter"
          >
            <span>−</span>
          </button>

          <button
            className="reset-button"
            onClick={reset}
          >
            <span className="reset-icon">↻</span>
            Reset
          </button>

          <button
            className="control-btn increase"
            onClick={increment}
            aria-label="Increase counter"
          >
            <span>+</span>
          </button>

        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button onClick={subtractTen}>−10</button>
          <button onClick={() => setCount(0)}>Set 0</button>
          <button onClick={addTen}>+10</button>
        </div>

        {/* Step Selector */}
        <div className="step-section">

          <div className="section-heading">
            <span>STEP SIZE</span>
            <strong>{step}</strong>
          </div>

          <div className="step-options">
            {[1, 5, 10, 25, 50].map((value) => (
              <button
                key={value}
                className={step === value ? "active-step" : ""}
                onClick={() => setStep(value)}
              >
                {value}
              </button>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="counter-footer">
          <div>
            <span className="keyboard-key">↑</span>
            <span className="keyboard-key">↓</span>
            Change value
          </div>

          <div>
            <span className="keyboard-key">R</span>
            Reset
          </div>
        </div>

      </div>
    </div>
  );
};
export default Counter;