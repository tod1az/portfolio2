interface TopBarProps {
  soundEnabled: boolean
  onToggleSound: () => void
}

export function TopBar({ soundEnabled, onToggleSound }: TopBarProps) {
  return (
    <header className="w-full bg-[#181c22] border-b-2 border-orange-600/80 px-4 lg:px-8 py-2 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
        <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping" />
        <span className="font-mono text-xs uppercase text-orange-400 font-bold tracking-widest">SYS.DC-2000 // READY</span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onToggleSound}
          className="px-2 py-0.5 text-[10px] font-mono tracking-tighter uppercase bg-black/60 border border-neutral-600 hover:border-orange-500 text-gray-300 rounded flex items-center gap-1 active:scale-95 transition-transform"
        >
          <span className={soundEnabled ? 'text-orange-500 font-bold' : 'text-gray-500 font-bold'}>
            SFX: {soundEnabled ? 'ON' : 'OFF'}
          </span>
        </button>
        <span className="text-xs font-mono text-gray-400">60 FPS</span>
      </div>
    </header>
  )
}
