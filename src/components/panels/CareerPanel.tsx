import { EXPERIENCE, type Experience } from '../../data/profile'
import { PanelHeader } from '../PanelHeader'
import { Tag } from '../Tag'

/** Visual accent cycles down the list so each stage reads as its own level. */
const ACCENTS = [
  { border: 'border-l-orange-500', label: 'text-orange-400' },
  { border: 'border-l-yellow-500', label: 'text-yellow-400' },
  { border: 'border-l-cyan-500', label: 'text-cyan-400' },
  { border: 'border-l-emerald-500', label: 'text-emerald-400' },
  { border: 'border-l-pink-500', label: 'text-pink-400' },
]

const KIND_BADGE: Record<Experience['kind'], { text: string; className: string }> = {
  work: { text: 'WORK', className: 'bg-cyan-950 text-cyan-300 border-cyan-700' },
  education: { text: 'DIPLOMA', className: 'bg-yellow-950 text-yellow-300 border-yellow-700' },
}

const years = EXPERIENCE.map((e) => e.date.match(/\d{4}/g) ?? []).flat()
const span = `${Math.min(...years.map(Number))} - ${Math.max(...years.map(Number))}`

export function CareerPanel() {
  const total = EXPERIENCE.length
  return (
    <div className="space-y-3">
      <PanelHeader
        title="CAREER GOALS & RECORD"
        subtitle={`${total} Stages Cleared // ${span}`}
        badge={
          <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500 text-yellow-300 font-mono text-[10px] rounded font-bold">
            ALL GOALS MET
          </span>
        }
      />

      {EXPERIENCE.map((e, i) => {
        const accent = ACCENTS[i % ACCENTS.length]
        const stage = String(total - i).padStart(2, '0')
        const badge = KIND_BADGE[e.kind]
        return (
          <div
            key={`${e.title}-${e.date}`}
            className={`griptape p-3.5 rounded border-l-4 ${accent.border} border border-neutral-800 shadow relative`}
          >
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className={`font-mono text-[10px] ${accent.label} font-bold uppercase tracking-wider block`}>
                  STAGE {stage} // {e.date}
                </span>
                <h3 className="thps-font text-base text-white">{e.title}</h3>
                <p className="text-xs text-gray-300">{e.organization}</p>
              </div>
              <span className={`shrink-0 text-[10px] font-mono px-2 py-0.5 rounded border ${badge.className}`}>
                {badge.text}
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-300 mt-2 font-sans leading-relaxed">{e.description}</p>
            {e.tags.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1">
                {e.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
