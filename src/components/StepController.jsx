export default function StepController({ onStepChange, step }) {
  const handleChange = (e) => {
    const rawValue = e.target.value;

    const num = Number(rawValue);
    if (num > 0 && !isNaN(num)) onStepChange(num);
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
      <label
        htmlFor="step-input"
        className="text-sm font-medium text-slate-300"
      >
        Step Size
      </label>
      <div className="flex items-center gap-2">
        <input
          id="step-input"
          type="number"
          min={1}
          max={10}
          value={step}
          onChange={handleChange}
          className="w-20 px-3 py-1.5 text-center bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>
    </div>
  );
}
