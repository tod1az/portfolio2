import { PanelHeader } from '../PanelHeader'
import { Tag } from '../Tag'

interface Project {
  map: string
  meta: string
  title: string
  description: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  accent: { hover: string; mapBadge: string; launch: string }
}

const PROJECTS: Project[] = [
  {
    map: 'MAP: THE WAREHOUSE',
    meta: 'v2.4.0',
    title: 'OLLIE-OPS // CLOUD MONITOR',
    description:
      'High-throughput Kubernetes observability tool with retro CRT terminal skin, WebSocket live telemetry, and incident alerting.',
    tags: ['Go', 'React', 'Tailwind'],
    demoUrl: '#demo',
    repoUrl: '#repo',
    accent: {
      hover: 'hover:border-cyan-400',
      mapBadge: 'bg-orange-600/30 text-orange-400 border-orange-500',
      launch: 'bg-cyan-600 hover:bg-cyan-500',
    },
  },
  {
    map: 'MAP: SCHOOL II',
    meta: 'Three.js',
    title: 'DECK-CUSTOMIZER 3D',
    description:
      'Real-time WebGL deck and truck customizer with custom grip-tape stickers, physical shader wear-and-tear simulation, and SVG export.',
    tags: ['WebGL', 'Three.js', 'Zustand'],
    demoUrl: '#demo',
    repoUrl: '#repo',
    accent: {
      hover: 'hover:border-orange-500',
      mapBadge: 'bg-yellow-600/30 text-yellow-400 border-yellow-500',
      launch: 'bg-orange-600 hover:bg-orange-500',
    },
  },
  {
    map: 'MAP: PHILADELPHIA',
    meta: 'Web Audio API',
    title: 'GRIND-STEP // CHIPTUNE SYNTH',
    description:
      'Browser-based tracker synth reproducing 90s industrial and pop-punk drum machines with zero-latency audio worklets.',
    tags: ['AudioWorklet', 'WASM'],
    demoUrl: '#demo',
    repoUrl: '#repo',
    accent: {
      hover: 'hover:border-emerald-500',
      mapBadge: 'bg-emerald-600/30 text-emerald-400 border-emerald-500',
      launch: 'bg-emerald-600 hover:bg-emerald-500',
    },
  },
]

export function ProjectsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="PARK SELECTION: PROJECTS"
        subtitle="Featured Releases // High Stakes"
        titleClass="text-cyan-300"
        badge={
          <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500 text-cyan-300 font-mono text-[10px] rounded font-bold">
            GOLD MEDAL
          </span>
        }
      />

      {PROJECTS.map((p) => (
        <div
          key={p.title}
          className={`bg-[#171b21] rounded border-2 border-neutral-700 ${p.accent.hover} transition-colors p-3.5 shadow`}
        >
          <div className="flex justify-between items-center mb-1">
            <span className={`px-2 py-0.5 border text-[10px] font-mono font-bold ${p.accent.mapBadge}`}>{p.map}</span>
            <span className="text-xs font-mono text-gray-400">{p.meta}</span>
          </div>
          <h3 className="thps-font text-lg text-white mt-1">{p.title}</h3>
          <p className="text-xs text-gray-300 mt-1 font-sans">{p.description}</p>
          <div className="mt-3 flex items-center justify-between border-t border-neutral-800 pt-2">
            <div className="flex gap-1">
              {p.tags.map((t) => (
                <Tag key={t} bordered={false}>
                  {t}
                </Tag>
              ))}
            </div>
            <div className="flex space-x-2">
              <a
                href={p.demoUrl}
                className={`px-2.5 py-1 ${p.accent.launch} text-black thps-font text-xs rounded font-bold transition-colors`}
              >
                LAUNCH
              </a>
              <a
                href={p.repoUrl}
                className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs rounded border border-neutral-600"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
