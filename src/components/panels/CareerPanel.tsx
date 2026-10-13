import { PanelHeader } from '../PanelHeader'
import { Tag } from '../Tag'

interface CareerStage {
  stage: string
  period: string
  title: string
  company: string
  points: string
  description: string
  tags: string[]
  accent: { border: string; label: string; badge: string }
}

const STAGES: CareerStage[] = [
  {
    stage: 'STAGE 03',
    period: '2022 - PRESENT',
    title: 'SENIOR FULL-STACK TECH LEAD',
    company: 'Apex Motion Studio • Remote',
    points: '100,000 PTS',
    description:
      'Architected low-latency web apps and WebGL rendering engine used by 1.2M monthly active users. Reduced bundle sizes by 44% and led cross-functional team of 9 engineers.',
    tags: ['TypeScript', 'Next.js', 'Node/Go', 'Docker'],
    accent: {
      border: 'border-l-orange-500',
      label: 'text-orange-400',
      badge: 'bg-cyan-950 text-cyan-300 border-cyan-700',
    },
  },
  {
    stage: 'STAGE 02',
    period: '2019 - 2022',
    title: 'CREATIVE WEB DEVELOPER',
    company: 'HyperGrind Interactive',
    points: '75,000 PTS',
    description:
      'Crafted high-impact promotional micro-sites, interactive 3D product visualizers with Three.js, and headless e-commerce architectures.',
    tags: ['React', 'Three.js', 'Tailwind'],
    accent: {
      border: 'border-l-yellow-500',
      label: 'text-yellow-400',
      badge: 'bg-yellow-950 text-yellow-300 border-yellow-700',
    },
  },
  {
    stage: 'STAGE 01',
    period: '2017 - 2019',
    title: 'FRONTEND SOFTWARE ENGINEER',
    company: 'Concrete Grid Labs',
    points: '50,000 PTS',
    description: 'Developed real-time analytics dashboards, client SPAs, and internal design systems.',
    tags: [],
    accent: {
      border: 'border-l-cyan-500',
      label: 'text-cyan-400',
      badge: 'bg-emerald-950 text-emerald-300 border-emerald-700',
    },
  },
]

export function CareerPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="CAREER GOALS & RECORD"
        subtitle="Total XP: 8+ Years / 4 Stages Unlocked"
        badge={
          <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500 text-yellow-300 font-mono text-[10px] rounded font-bold">
            ALL GOALS MET
          </span>
        }
      />

      {STAGES.map((s) => (
        <div
          key={s.stage}
          className={`griptape p-3.5 rounded border-l-4 ${s.accent.border} border border-neutral-800 shadow relative`}
        >
          <div className="flex justify-between items-start">
            <div>
              <span className={`font-mono text-[10px] ${s.accent.label} font-bold uppercase tracking-wider block`}>
                {s.stage} // {s.period}
              </span>
              <h3 className="thps-font text-base text-white">{s.title}</h3>
              <p className="text-xs text-gray-300">{s.company}</p>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${s.accent.badge}`}>{s.points}</span>
          </div>
          <p className="text-xs md:text-sm text-gray-300 mt-2 font-sans leading-relaxed">{s.description}</p>
          {s.tags.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {s.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
