export default function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      <button
        type="button"
        className="flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm text-rose-300 bg-rose-950/30 border border-rose-900/40 hover:bg-rose-900/50 active:scale-95 transition-all focus:outline-none cursor-pointer"
        onClick={onDecrement}
      >
        <span className="text-lg sm:text-xl font-bold">−</span>
        <span>Decrease</span>
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 active:scale-95 transition-all focus:outline-none cursor-pointer"
        onClick={onReset}
      >
        <span>Reset</span>
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/30 border border-emerald-900/40 hover:bg-emerald-900/50 active:scale-95 transition-all focus:outline-none cursor-pointer"
        onClick={onIncrement}
      >
        <span className="text-lg sm:text-xl font-bold">+</span>
        <span>Increase</span>
      </button>
    </div>
  );
}