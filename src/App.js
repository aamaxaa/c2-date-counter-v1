import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleStep(flag) {
    if (flag === 1) {
      setStep((s) => s - 1);
    }
    if (flag === 2) {
      setStep((s) => s + 1);
    }
  }

  function handleCount(flag) {
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
        <button onClick={() => handleStep(1)}>-</button>
        Step:{step}
        <button onClick={() => handleStep(2)}>+</button>
      </div>
      <div>
        <button onClick={() => handleCount(1)}>-</button>
        Count:{count}
        <button onClick={() => handleCount(2)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
