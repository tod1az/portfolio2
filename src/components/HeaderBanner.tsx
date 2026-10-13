export function HeaderBanner() {
  return (
    <section className="p-4 pt-5 pb-3 text-center relative overflow-hidden bg-gradient-to-b from-[#1c222b] via-[#15191f] to-[#111417]">
      {/* Background caution stripe accent */}
      <div className="absolute -top-3 -right-12 w-44 h-8 bg-yellow-500/20 rotate-12 pointer-events-none border-y border-yellow-500/30" />

      {/* Distressed THPS2 logo emblem */}
      <div className="inline-block relative mb-2">
        <div className="px-6 py-2 rounded-full metal-plate transform -rotate-1 shadow-lg border-2 border-orange-500/90 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600/30 via-transparent to-blue-500/20 pointer-events-none" />
          <h1 className="thps-font text-3xl sm:text-4xl italic font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-gray-400 tracking-wider drop-shadow-[0_3px_2px_rgba(0,0,0,1)]">
            DEV&apos;S PRO CODER
          </h1>
          <div className="absolute -right-3 -top-2 w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg transform rotate-12">
            <span className="thps-font text-white text-2xl font-black italic -ml-0.5">2</span>
          </div>
        </div>
      </div>

      {/* Subtitle badge */}
      <div className="flex justify-center items-center space-x-2 mt-1">
        <span className="h-px w-8 bg-orange-600" />
        <p className="font-mono text-xs uppercase font-semibold text-orange-400 tracking-wider">
          ALEX RIVERS // FULL-STACK &amp; CREATIVE DEV
        </p>
        <span className="h-px w-8 bg-orange-600" />
      </div>

      {/* Status ticket / score bar */}
      <div className="mt-3 py-1.5 px-3 bg-black/60 rounded border border-gray-800 flex justify-between items-center text-xs font-mono">
        <div className="text-left">
          <span className="text-gray-500 text-[10px] block">CAREER SCORE</span>
          <span className="text-yellow-400 font-bold tracking-wider">984,250 PTS</span>
        </div>
        <div className="text-center">
          <span className="text-gray-500 text-[10px] block">SPECIAL METER</span>
          <span className="text-cyan-400 font-bold animate-pulse">MAXED OUT</span>
        </div>
        <div className="text-right">
          <span className="text-gray-500 text-[10px] block">STATUS</span>
          <span className="text-emerald-400 font-bold">READY TO HIRE</span>
        </div>
      </div>
    </section>
  )
}
