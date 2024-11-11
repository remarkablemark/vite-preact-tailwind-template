import { useState } from 'preact/hooks';
import preactLogo from 'src/assets/preact.svg';

import viteLogo from '/vite.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="m-4 h-24 hover:drop-shadow-2xl"
            alt="Vite logo"
          />
        </a>

        <a href="https://preactjs.com" target="_blank">
          <img
            src={preactLogo}
            className="m-4 h-24 hover:drop-shadow-2xl"
            alt="Preact logo"
          />
        </a>
      </div>

      <h1 className="my-10 text-5xl font-bold">Vite + Preact + Tailwind</h1>

      <div className="p-8">
        <button
          className="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-center text-sm font-medium text-slate-800 shadow-sm transition-all hover:border-slate-800 focus:border-slate-800 focus:bg-slate-50 active:border-slate-800 active:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => setCount((count) => count + 1)}
          type="button"
        >
          count is {count}
        </button>

        <p className="my-4 text-slate-600">
          Edit{' '}
          <code className="font-[monospace]">src/components/App/App.tsx</code>{' '}
          and save to test HMR
        </p>
      </div>

      <p className="text-slate-400">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
