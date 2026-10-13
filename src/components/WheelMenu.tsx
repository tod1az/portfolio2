import { MENU_ROTATIONS, MENU_TITLES, WHEEL_ITEMS, type MenuKey } from '../data/menu'

interface WheelMenuProps {
  active: MenuKey
  onSelect: (key: MenuKey) => void
}

export function WheelMenu({ active, onSelect }: WheelMenuProps) {
  return (
    <div className="relative w-72 h-72 my-1 flex items-center justify-center select-none">
      {/* External rim */}
      <div
        className="skate-wheel-rim w-72 h-72 rounded-full absolute flex items-center justify-center transition-transform duration-500 ease-out"
        style={{ transform: `rotate(${MENU_ROTATIONS[active]}deg)` }}
      >
        <div className="w-64 h-64 rounded-full border border-gray-700/60 pointer-events-none absolute" />

        {WHEEL_ITEMS.map((item) => {
          const isActive = item.key === active
          const sizeClass = item.size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          return (
            <button
              key={item.key}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onSelect(item.key)
              }}
              style={item.style}
              className={`absolute ${item.className} font-skate thps-font ${sizeClass} font-bold tracking-wide transition-all transform hover:scale-110 active:scale-95 z-20 ${
                isActive ? 'active-wheel-glow' : 'inactive-wheel-item'
              }`}
            >
              <span className="block px-2 py-0.5 rounded">{item.label}</span>
            </button>
          )
        })}
      </div>

      {/* Center hub (bearing hole) with active title HUD */}
      <div className="skate-wheel-hub w-28 h-28 rounded-full z-20 flex flex-col items-center justify-center p-2 text-center pointer-events-none border-4 border-[#12161b]">
        <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">SELECTED</span>
        <span className="thps-font text-xs sm:text-sm font-black text-cyan-300 drop-shadow-[0_0_8px_#38bdf8] leading-tight">
          {MENU_TITLES[active]}
        </span>
        <span className="w-8 h-0.5 bg-orange-500 mt-1" />
      </div>
    </div>
  )
}
