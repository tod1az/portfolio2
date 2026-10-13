import { PROJECTS } from '../../data/profile'
import { PanelHeader } from '../PanelHeader'
import { Tag } from '../Tag'

const ACCENTS = [
  {
    hover: 'hover:border-cyan-400',
    mapBadge: 'bg-orange-600/30 text-orange-400 border-orange-500',
    launch: 'bg-cyan-600 hover:bg-cyan-500',
  },
  {
    hover: 'hover:border-orange-500',
    mapBadge: 'bg-yellow-600/30 text-yellow-400 border-yellow-500',
    launch: 'bg-orange-600 hover:bg-orange-500',
  },
  {
    hover: 'hover:border-emerald-500',
    mapBadge: 'bg-emerald-600/30 text-emerald-400 border-emerald-500',
    launch: 'bg-emerald-600 hover:bg-emerald-500',
  },
]

export function ProjectsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="PARK SELECTION: PROJECTS"
        subtitle={`${PROJECTS.length} Releases // Featured Work`}
        titleClass="text-cyan-300"
        badge={
          <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500 text-cyan-300 font-mono text-[10px] rounded font-bold">
            GOLD MEDAL
          </span>
        }
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const accent = ACCENTS[i % ACCENTS.length]
          return (
            <div
              key={p.title}
              className={`bg-[#171b21] rounded border-2 border-neutral-700 ${accent.hover} transition-colors p-3.5 shadow flex flex-col`}
            >
              <div className="flex justify-between items-center mb-1 gap-2">
                <span className={`px-2 py-0.5 border text-[10px] font-mono font-bold ${accent.mapBadge}`}>
                  MAP: {p.category}
                </span>
                <span className="text-xs font-mono text-gray-400">{p.stack}</span>
              </div>
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="mt-2 w-full aspect-video object-cover rounded border border-neutral-800"
                  loading="lazy"
                />
              )}
              <h3 className="thps-font text-lg text-white mt-1">{p.title}</h3>
              <p className="text-xs md:text-sm text-gray-300 mt-1 font-sans">{p.description}</p>
              <div className="mt-auto pt-3 flex items-center justify-between gap-2 border-t border-neutral-800">
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <Tag key={t} bordered={false}>
                      {t}
                    </Tag>
                  ))}
                </div>
                <div className="flex space-x-2 shrink-0">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-2.5 py-1 ${accent.launch} text-black thps-font text-xs rounded font-bold transition-colors`}
                    >
                      LAUNCH
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs rounded border border-neutral-600"
                    >
                      CODE
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
