import { PROFILE, SKILL_GROUPS, SPECIAL_TRICKS } from '../../data/profile'
import { PanelHeader } from '../PanelHeader'

const maxTechs = Math.max(...SKILL_GROUPS.map((g) => g.items.length))

export function StatsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="CUSTOM SKATER PROFILE"
        subtitle={`${PROFILE.name} // ${PROFILE.role} // ${PROFILE.location}`}
        badge={
          <div className="w-8 h-8 shrink-0 rounded-full border-2 border-orange-500 bg-orange-600/30 flex items-center justify-center font-bold font-mono text-xs text-white">
            {PROFILE.initials}
          </div>
        }
      />

      <div className="grid gap-3 md:grid-cols-5">
        {/* Attribute meters: one per skill group, scaled by how many techs it holds */}
        <div className="md:col-span-3 griptape p-3.5 rounded border border-neutral-800 space-y-2.5">
          <h3 className="thps-font text-sm text-yellow-400 tracking-wide">ATTRIBUTE POINTS</h3>
          {SKILL_GROUPS.map((g) => (
            <div key={g.name}>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-gray-300">{g.name}</span>
                <span className="text-cyan-400 font-bold">{g.items.length} TECHS</span>
              </div>
              <div className="w-full bg-black/80 h-3 rounded p-0.5 border border-gray-700 flex gap-0.5">
                <div
                  className="bg-gradient-to-r from-orange-600 to-yellow-400 h-full rounded-sm"
                  style={{ width: `${(g.items.length / maxTechs) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed pt-1">{PROFILE.intro}</p>
        </div>

        {/* Unlocked special tricks */}
        <div className="md:col-span-2 bg-[#181d24] p-3 rounded border border-neutral-700">
          <h3 className="thps-font text-sm text-cyan-300 mb-2">UNLOCKED SPECIAL TRICKS</h3>
          <div className="space-y-1.5 text-xs font-mono">
            {SPECIAL_TRICKS.map((t) => (
              <div key={t.name} className="bg-black/50 p-1.5 rounded border border-neutral-800">
                <span className="block text-yellow-400 font-bold">{t.name}</span>
                <span className="block text-[10px] text-gray-400">{t.combo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
