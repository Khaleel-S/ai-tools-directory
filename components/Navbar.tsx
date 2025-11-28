'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-900/90 backdrop-blur-xl px-4 md:px-6 lg:px-8 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Brand */}
       <Link
  href="/"
  className="relative inline-flex items-center"
>
    <span
    className="font-display text-2xl md:text-3xl font-semibold tracking-tight
               bg-gradient-to-r from-slate-100 via-blue-300 to-indigo-400
               bg-[length:250%_100%] bg-clip-text text-transparent
               animate-[shimmerText_6s_ease-in-out_infinite]"
  >
    AI Verse
  </span>

  {/* glow underline */}
  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-blue-400/0 via-blue-400/70 to-indigo-400/0 blur-[1px] opacity-70" />
</Link>


        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-1.5 text-[11px] font-medium text-slate-300 shadow-sm sm:inline-flex">
            <span>Made with ❤️ using Next.js</span>
          </span>
        </div>
      </div>
    </nav>
  )
}
