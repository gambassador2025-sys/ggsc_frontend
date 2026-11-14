import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col justify-between p-6 sm:p-12">
      <header className="flex items-center justify-between max-w-5xl mx-auto w-full pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <img src="/vite.svg" className="h-8 w-8" alt="Vite logo" />
          <span className="font-semibold text-lg tracking-tight">GGSC Frontend</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          React + Vite + Tailwind CSS
        </div>
      </header>

      <main className="max-w-3xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          Clean State Scaffolding
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">GGSC Frontend</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8">
          The project has been migrated from Next.js to React with Vite and Tailwind CSS.
          Start editing <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-sm text-slate-900 dark:text-slate-100">src/App.tsx</code> to build your application.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-2.5 rounded-lg font-medium text-sm bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 active:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            Count is {count}
          </button>
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-lg font-medium text-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Vite Docs
          </a>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto w-full pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-500">
        GGSC Frontend • Built with React 19, Vite & Tailwind CSS
      </footer>
    </div>
  )
}
