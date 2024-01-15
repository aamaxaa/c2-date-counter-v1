import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  function handleStep(e) {
    setStep(e);
  }

  function handleJump(e) {
    setCount(e);
  }
  function handleCountStep(flag) {
    if (flag === 1) {
      setCount((c) => c - step);
    }
    if (flag === 2) {
      setCount((c) => c + step);
    }
  }
  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          value={step}
          type="range"
          min="0"
          max="10"
          onChange={(e) => handleStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={() => handleCountStep(1)}>-</button>
        <input
          type="text"
          placeholder={count}
          value={count}
          onChange={(e) => handleJump(Number(e.target.value))}
        />
        <button onClick={() => handleCountStep(2)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
