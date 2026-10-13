import { MENU_ROTATIONS, MENU_TITLES, WHEEL_ITEMS, type MenuKey } from '../data/menu'

interface WheelMenuProps {
  active: MenuKey
  onSelect: (key: MenuKey) => void
}

/* Geometry (viewBox units). Proportions sampled from the THPS2 Dreamcast menu wheel sprite. */
const SIZE = 300
const C = SIZE / 2
const R_OUTER = 140
const R_HOLE = 52
const R_TEXT_SINGLE = 108
const R_TEXT_OUTER = 119
const R_TEXT_INNER = 97
const ARC_SPAN = 44 // half-span in degrees of each label's text path

const WHEEL_FONT = "'Oswald', 'Arial Narrow', 'Impact', sans-serif"

function polar(r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180
  return [C + r * Math.cos(a), C + r * Math.sin(a)]
}

/** Clockwise arc from startDeg to endDeg (degrees clockwise from 12 o'clock). */
function arcPath(r: number, startDeg: number, endDeg: number): string {
  const [x1, y1] = polar(r, startDeg)
  const [x2, y2] = polar(r, endDeg)
  const large = endDeg - startDeg > 180 ? 1 : 0
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`
}

/** Deterministic circumferential scratches on the urethane. */
const SCRATCHES = Array.from({ length: 18 }, (_, i) => {
  const r = R_HOLE + 6 + ((i * 37) % (R_OUTER - R_HOLE - 12))
  const start = (i * 97) % 360
  const span = 18 + ((i * 29) % 70)
  const light = i % 3 !== 0
  return {
    d: arcPath(r, start, start + span),
    stroke: light ? '#c9d6de' : '#000',
    opacity: light ? 0.06 + ((i * 13) % 6) / 100 : 0.18,
    width: 0.5 + ((i * 7) % 3) * 0.35,
  }
})

export function WheelMenu({ active, onSelect }: WheelMenuProps) {
  return (
    <div className="relative my-1 flex items-center justify-center select-none w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] xl:w-[440px] xl:h-[440px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out drop-shadow-[0_10px_18px_rgba(0,0,0,0.85)]"
        style={{ transform: `rotate(${MENU_ROTATIONS[active]}deg)` }}
        role="menu"
        aria-label="Main menu wheel"
      >
        <defs>
          {/* Urethane tread: black lip, blue-grey highlight band near the hub, dark again at the hole. */}
          <radialGradient id="wheel-tread" cx="50%" cy="50%" r="50%">
            <stop offset="0.36" stopColor="#090c0d" />
            <stop offset="0.40" stopColor="#2a3236" />
            <stop offset="0.46" stopColor="#7f929f" />
            <stop offset="0.52" stopColor="#76889a" />
            <stop offset="0.64" stopColor="#62717c" />
            <stop offset="0.78" stopColor="#333c40" />
            <stop offset="0.90" stopColor="#141819" />
            <stop offset="1" stopColor="#030404" />
          </radialGradient>

          {/* Hole: show the dark deck behind with an inset shadow. */}
          <radialGradient id="wheel-hole" cx="50%" cy="50%" r="50%">
            <stop offset="0.7" stopColor="#05070a" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>

          {/* Gold label fill, slightly brighter on top like the painted sprite text. */}
          <linearGradient id="wheel-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f3bf2e" />
            <stop offset="1" stopColor="#c4890a" />
          </linearGradient>

          {/* Grit overlay clipped to the tread. */}
          <filter id="wheel-grit" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="11" result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.75  0 0 0 0 0.82  0 0 0 0 0.9  0 0 0 0.22 0"
              result="tint"
            />
            <feComposite in="tint" in2="SourceGraphic" operator="in" />
          </filter>

          {/* Selected-label glow: violet-blue halo around near-white text. */}
          <filter id="wheel-glow" x="-40%" y="-80%" width="180%" height="260%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.6" result="blur" />
            <feFlood floodColor="#6a6cff" floodOpacity="0.95" />
            <feComposite in2="blur" operator="in" result="halo" />
            <feMerge>
              <feMergeNode in="halo" />
              <feMergeNode in="halo" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Text paths: one per item per radius. */}
          {WHEEL_ITEMS.map((item) => (
            <g key={item.key}>
              <path id={`tp-${item.key}-s`} d={arcPath(R_TEXT_SINGLE, item.angle - ARC_SPAN, item.angle + ARC_SPAN)} />
              <path id={`tp-${item.key}-o`} d={arcPath(R_TEXT_OUTER, item.angle - ARC_SPAN, item.angle + ARC_SPAN)} />
              <path id={`tp-${item.key}-i`} d={arcPath(R_TEXT_INNER, item.angle - ARC_SPAN, item.angle + ARC_SPAN)} />
            </g>
          ))}
        </defs>

        {/* Tread */}
        <circle cx={C} cy={C} r={R_OUTER} fill="url(#wheel-tread)" />
        <path
          d={`M ${C - R_OUTER} ${C} a ${R_OUTER} ${R_OUTER} 0 1 0 ${R_OUTER * 2} 0 a ${R_OUTER} ${R_OUTER} 0 1 0 ${-R_OUTER * 2} 0 M ${C - R_HOLE} ${C} a ${R_HOLE} ${R_HOLE} 0 1 0 ${R_HOLE * 2} 0 a ${R_HOLE} ${R_HOLE} 0 1 0 ${-R_HOLE * 2} 0`}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#wheel-grit)"
          style={{ mixBlendMode: 'overlay' }}
        />
        {SCRATCHES.map((s, i) => (
          <path key={i} d={s.d} fill="none" stroke={s.stroke} strokeOpacity={s.opacity} strokeWidth={s.width} strokeLinecap="round" />
        ))}
        {/* Lip highlight and hole */}
        <circle cx={C} cy={C} r={R_OUTER - 1} fill="none" stroke="#1d2326" strokeWidth="1.5" />
        <circle cx={C} cy={C} r={R_HOLE} fill="url(#wheel-hole)" />
        <circle cx={C} cy={C} r={R_HOLE + 1} fill="none" stroke="#000" strokeOpacity="0.8" strokeWidth="2" />

        {/* Labels */}
        {WHEEL_ITEMS.map((item) => {
          const isActive = item.key === active
          const [first, second] = item.lines
          const lineProps = {
            fontFamily: WHEEL_FONT,
            fontWeight: 700,
            fontSize: 17,
            letterSpacing: 0.6,
            textAnchor: 'middle' as const,
            fill: isActive ? '#eefcff' : 'url(#wheel-gold)',
            stroke: isActive ? '#3b36e6' : '#140d02',
            strokeWidth: isActive ? 1.1 : 1.4,
            paintOrder: 'stroke' as const,
            strokeLinejoin: 'round' as const,
          }
          return (
            <g
              key={item.key}
              role="menuitem"
              aria-label={item.lines.join(' ')}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={0}
              className="cursor-pointer outline-none transition-transform hover:brightness-110"
              filter={isActive ? 'url(#wheel-glow)' : undefined}
              onClick={(e) => {
                e.stopPropagation()
                onSelect(item.key)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(item.key)
                }
              }}
            >
              {second ? (
                <>
                  <text {...lineProps}>
                    <textPath href={`#tp-${item.key}-o`} startOffset="50%">
                      {first}
                    </textPath>
                  </text>
                  <text {...lineProps}>
                    <textPath href={`#tp-${item.key}-i`} startOffset="50%">
                      {second}
                    </textPath>
                  </text>
                </>
              ) : (
                <text {...lineProps}>
                  <textPath href={`#tp-${item.key}-s`} startOffset="50%">
                    {first}
                  </textPath>
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Hub HUD sitting in the bearing hole (does not rotate) */}
      <div className="relative w-[33%] h-[33%] rounded-full z-20 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
        <span className="text-[8px] lg:text-[10px] font-mono tracking-widest text-gray-500 uppercase">SELECTED</span>
        <span className="thps-font text-[11px] sm:text-xs lg:text-sm xl:text-base font-black text-cyan-200 drop-shadow-[0_0_8px_#6a6cff] leading-tight">
          {MENU_TITLES[active]}
        </span>
        <span className="w-6 h-0.5 bg-orange-500 mt-1" />
      </div>
    </div>
  )
}
