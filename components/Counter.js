"use client";

import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(Number(initialCount) || 0);
  const [step, setStep] = useState(Math.max(1, Number(initialStep) || 1));

  const decrementDisabled = count - step < 0;

  function handleStepChange(e) {
    const next = Math.max(1, Number(e.target.value));
    setStep(Number.isFinite(next) ? next : 1);
  }

  return (
    <div className="card">
      <div aria-live="polite" aria-atomic="true" className="count">
        Count: <strong>{count}</strong>
      </div>

      <div className="row">
        <button
          type="button"
          onClick={() => setCount((c) => c + step)}
          aria-label={`Increment by ${step}`}
        >
          +{step}
        </button>

        <button
          type="button"
          onClick={() => setCount((c) => c - step)}
          disabled={decrementDisabled}
          aria-disabled={decrementDisabled}
          aria-label={`Decrement by ${step}`}
          title={decrementDisabled ? "Cannot go below 0" : undefined}
        >
          -{step}
        </button>

        <button
          type="button"
          onClick={() => setCount(0)}
          aria-label="Reset to 0"
          className="reset"
        >
          Reset
        </button>
      </div>

      <label className="row step">
        <span>Step</span>
        <input
          type="number"
          min="1"
          value={step}
          onChange={handleStepChange}
          inputMode="numeric"
          aria-label="Step amount"
        />
      </label>
    </div>
  );
}
