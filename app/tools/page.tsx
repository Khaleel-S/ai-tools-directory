import { Suspense } from 'react';
import ToolsClient from './ToolsClient';

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50">
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_60%)] opacity-60" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-slate-100">
            <span className="text-lg">←</span>
            Back to home
          </a>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-xs text-slate-300">
            Loading tools...
          </span>
        </div>

        <div className="mb-8 space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Browse all AI tools
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Filter, search and sort through the full collection of AI products.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading tools...</div>}>
          <ToolsClient />
        </Suspense>
      </div>
    </main>
  );
}
