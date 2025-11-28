export default function Footer() {
  return (
    <footer className="mt-0 border-t border-slate-800 bg-[#020617]/90 text-slate-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs md:flex-row md:text-left">
        {/* left */}
        <div className="space-y-1">
          <p className="font-medium text-slate-200">
            © {new Date().getFullYear()} AI Tools Directory
          </p>
          
        </div>

        {/* right */}
        <div className="flex flex-col items-center gap-1 text-[11px] md:items-end">
          
        <p className="text-[11px] text-slate-200">
            Designed by Shaik Khaleel Basha</p>
        </div>
      </div>
    </footer>
  )
}
