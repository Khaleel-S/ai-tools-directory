'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllTools, getToolsByCategory } from '../lib/data'
import ToolCard from '../components/ToolCard'

export default function Home() {
  const allTools = getAllTools()
  const featuredTools = allTools.slice(0, 6)
  const categories = [...new Set(allTools.map((t) => t.category))]

  const [showScrollHint, setShowScrollHint] = useState(true)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 80) {
        setShowScrollHint(false)
      } else {
        setShowScrollHint(true)
      }
    }

    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50">
      {/* Top gradient background */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_60%)] opacity-70" />

      {/* Page container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/80 px-6 py-16 md:px-12 md:py-20 shadow-[0_25px_80px_rgba(15,23,42,0.9)] animate-[fadeUp_0.7s_ease-out]">
          {/* glow blobs */}
          <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-sm text-slate-300">
              🔍 Curated library of AI tools · {allTools.length}+ tools · {categories.length} categories
            </span>

           <h1
  className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight
             bg-gradient-to-r from-slate-50 via-blue-300 to-indigo-400
             bg-[length:250%_100%] bg-clip-text text-transparent
             animate-[shimmerText_10s_ease-in-out_infinite]"
>
  Discover the best AI tools in one place
</h1>

<p
  className="font-sans max-w-2xl text-base md:text-lg text-slate-300
             animate-[fadeUp_1s_ease-out_0.4s_backwards]"
>
  A hand–picked collection of AI products for developers, creators, and founders.
  Compare tools, explore categories, and find the perfect fit for your next project.
</p>


            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/40"
              >
                Browse all tools
                <span className="ml-2 text-lg">↗</span>
              </Link>

              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-3 text-sm md:text-base font-semibold text-slate-100 transition hover:border-blue-400 hover:bg-slate-900/90"
              >
                View featured
              </Link>
            </div>

            {/* quick stats */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 animate-[floatSlow_4s_ease-in-out_infinite]">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Fast to scan & filter</span>
              </div>
              <div className="flex items-center gap-2 animate-[floatSlow_4s_ease-in-out_infinite_0.2s]">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span>No login · No ads</span>
              </div>
              <div className="flex items-center gap-2 animate-[floatSlow_4s_ease-in-out_infinite_0.4s]">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span>Always up‑to‑date stack</span>
              </div>
            </div>

            {/* scroll hint – hides after scrolling */}
            {showScrollHint && (
              <div className="mt-10 flex items-center justify-center animate-[fadeUp_0.6s_ease-out]">
                <div className="flex flex-col items-center gap-2 text-xs text-slate-400">
                  <div className="h-10 w-6 rounded-full border border-slate-500/80 bg-slate-900/60 flex items-start justify-center p-1 shadow-[0_0_18px_rgba(15,23,42,0.9)]">
                    <div className="h-2 w-2 rounded-full bg-slate-100 animate-[scrollHint_1.6s_ease-in-out_infinite]" />
                  </div>
                 
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Featured Tools */}
        <section
          id="featured"
          className="mt-16 space-y-6 animate-[fadeUp_0.7s_ease-out_0.1s_backwards]"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Tools
            </h2>
            <p className="max-w-xl text-xs md:text-sm text-slate-300">
              Handpicked AI tools that are making waves right now.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="transform transition hover:scale-[1.02] hover:-translate-y-1"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-20 mb-0 rounded-3xl border border-slate-800 bg-slate-950/60 px-6 py-10 md:px-10 animate-[fadeUp_0.7s_ease-out_0.2s_backwards]">
          <div className="mb-8 flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Explore by category
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Jump directly into the areas you care about most.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 12).map((category) => (
              <Link
                key={category}
                href={`/tools?category=${encodeURIComponent(category)}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-sm md:text-base transition hover:border-blue-500 hover:bg-slate-900/90"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-50 group-hover:text-blue-300">
                    {category}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-blue-300">
                    View →
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {getToolsByCategory(category).length} tools
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
