import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import StepController from "./StepController";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    const safeStep = Number(step);

    setCount((prev) => Number(prev) + safeStep);
  };

  const handleDecrement = () => {
    const safeStep = Number(step);
    setCount((prev) => Number(prev) - safeStep);
  };

  const handleReset = () => {
    setCount(0); // number reset
  };
  return (
    <section className="w-full max-w-md p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 rounded-3xl shadow-2xl space-y-6">
      <header className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">
            Interactive Counter
          </h2>
          <p className="text-xs text-slate-400">
            Modular counter with step controller
          </p>
        </div>
        <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          v1.0.0
        </span>
      </header>

      <main className="space-y-6">
        <CounterDisplay count={count} />

        <StepController step={step} onStepChange={setStep} />

        <CounterControls
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>
    </section>
  );
}
