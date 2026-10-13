import { PanelHeader } from '../PanelHeader'

interface Stat {
  label: string
  value: number
  valueClass?: string
  barClass?: string
}

const STATS: Stat[] = [
  { label: 'FRONTEND ARCHITECTURE', value: 95 },
  { label: 'BACKEND / API DESIGN', value: 88 },
  { label: 'SYSTEM PERFORMANCE & CORE VITALS', value: 92 },
  { label: 'UI / CREATIVE POLISH', value: 96 },
  {
    label: 'COFFEE CONSUMPTION',
    value: 99,
    valueClass: 'text-red-400',
    barClass: 'from-red-600 to-orange-400',
  },
]

const TRICKS = [
  { name: '900° ZERO-DOWNTIME DEPLOY', combo: 'UP, DOWN + ROLLBACK' },
  { name: 'KICKFLIP TO GRAPHQL', combo: 'LEFT, RIGHT + QUERY' },
  { name: 'MANUAL MEMORY GC', combo: 'UP, UP + FLUSH' },
]

export function StatsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="CUSTOM SKATER PROFILE"
        subtitle="Stance: Regular // Style: Street / Fullstack"
        badge={
          <div className="w-8 h-8 rounded-full border-2 border-orange-500 bg-orange-600/30 flex items-center justify-center font-bold font-mono text-xs text-white">
            AR
          </div>
        }
      />

      <div className="grid gap-3 md:grid-cols-5">
        {/* Attribute meters */}
        <div className="md:col-span-3 griptape p-3.5 rounded border border-neutral-800 space-y-2.5">
          <h3 className="thps-font text-sm text-yellow-400 tracking-wide">ATTRIBUTE POINTS</h3>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-gray-300">{s.label}</span>
                <span className={`${s.valueClass ?? 'text-cyan-400'} font-bold`}>{s.value} / 100</span>
              </div>
              <div className="w-full bg-black/80 h-3 rounded p-0.5 border border-gray-700 flex gap-0.5">
                <div
                  className={`bg-gradient-to-r ${s.barClass ?? 'from-orange-600 to-yellow-400'} h-full rounded-sm`}
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Unlocked special tricks */}
        <div className="md:col-span-2 bg-[#181d24] p-3 rounded border border-neutral-700">
          <h3 className="thps-font text-sm text-cyan-300 mb-2">UNLOCKED SPECIAL TRICKS</h3>
          <div className="space-y-1.5 text-xs font-mono">
            {TRICKS.map((t) => (
              <div
                key={t.name}
                className="flex justify-between items-center bg-black/50 p-1.5 rounded border border-neutral-800"
              >
                <span className="text-yellow-400 font-bold">{t.name}</span>
                <span className="text-[10px] text-gray-400">{t.combo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
