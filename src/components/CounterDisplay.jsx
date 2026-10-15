export default function CounterDisplay({ count = 0 }) {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-inner">
      <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
        Current Count
      </span>

      <div className="my-4 text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white select-none max-w-full truncate px-2">
        {count}
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
        <span
          className={`h-2 w-2 rounded-full animate-pulse ${
            count > 0
              ? "bg-green-400"
              : count < 0
              ? "bg-red-400"
              : "bg-gray-400"
          }`}
        />
        {count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}
      </div>
    </div>
  );
}