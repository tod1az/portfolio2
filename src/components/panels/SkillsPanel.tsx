import { SKILL_GROUPS } from '../../data/profile'
import { PanelHeader } from '../PanelHeader'

const ACCENTS = [
  { border: 'border-orange-500/60', title: 'text-orange-400' },
  { border: 'border-cyan-500/60', title: 'text-cyan-400' },
  { border: 'border-emerald-500/60', title: 'text-emerald-400' },
  { border: 'border-pink-500/60', title: 'text-pink-400' },
]

const totalTechs = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0)

export function SkillsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="PARK EDITOR: TECH STACK"
        subtitle={`${totalTechs} Build Pieces // Engineering Toolkit`}
        titleClass="text-yellow-400"
        badge={
          <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500 text-yellow-300 font-mono text-[10px] rounded font-bold">
            EDITOR ON
          </span>
        }
      />

      <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs font-mono">
        {SKILL_GROUPS.map((g, i) => {
          const accent = ACCENTS[i % ACCENTS.length]
          return (
            <div key={g.title} className={`griptape p-3 rounded border ${accent.border} shadow`}>
              <span className={`${accent.title} font-bold block mb-1`}>{g.title}</span>
              <ul className="text-gray-300 space-y-1 text-[11px] md:text-xs">
                {g.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
