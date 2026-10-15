import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center p-4 md:p-8 bg-slate-950 overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <header className="relative z-10 w-full max-w-md flex justify-between items-center py-4">
        <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
          React Playground
        </span>
      </header>

      <div className="relative z-10 w-full flex justify-center items-center my-auto">
        <Counter />
      </div>

      <footer className="relative z-10 w-full max-w-md text-center py-4 text-xs text-slate-600 border-t border-slate-900">
        Built with React & Tailwind CSS
      </footer>
    </div>
  );
}