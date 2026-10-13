import { PanelHeader } from '../PanelHeader'

interface SkillBlock {
  title: string
  items: string[]
  borderClass: string
  titleClass: string
}

const BLOCKS: SkillBlock[] = [
  {
    title: 'RAMPS // FRONTEND',
    borderClass: 'border-orange-500/60',
    titleClass: 'text-orange-400',
    items: ['React / Next.js 14', 'TypeScript 5.x', 'Vue / Nuxt', 'Tailwind CSS / PostCSS', 'WebGL / Three.js / Canvas'],
  },
  {
    title: 'RAILS // BACKEND',
    borderClass: 'border-cyan-500/60',
    titleClass: 'text-cyan-400',
    items: ['Node.js / Bun / Express', 'Go (Golang) / Fiber', 'PostgreSQL / Redis', 'GraphQL & REST APIs', 'Prisma / Drizzle ORM'],
  },
  {
    title: 'HALFPIPE // CLOUD',
    borderClass: 'border-emerald-500/60',
    titleClass: 'text-emerald-400',
    items: ['AWS / Cloudflare / Vercel', 'Docker / CI/CD Pipelines', 'Terraform / IAC', 'OpenTelemetry & Sentry'],
  },
  {
    title: 'DECALS // TOOLING',
    borderClass: 'border-pink-500/60',
    titleClass: 'text-pink-400',
    items: ['Git / GitHub Actions', 'Jest / Playwright / Vitest', 'Vite / Turbopack', 'Figma & UI Wireframing'],
  },
]

export function SkillsPanel() {
  return (
    <div className="space-y-3">
      <PanelHeader
        title="PARK EDITOR: TECH STACK"
        subtitle="Build Pieces & Engineering Toolkit"
        titleClass="text-yellow-400"
        badge={
          <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500 text-yellow-300 font-mono text-[10px] rounded font-bold">
            EDITOR ON
          </span>
        }
      />

      <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs font-mono">
        {BLOCKS.map((b) => (
          <div key={b.title} className={`griptape p-3 rounded border ${b.borderClass} shadow`}>
            <span className={`${b.titleClass} font-bold block mb-1`}>{b.title}</span>
            <ul className="text-gray-300 space-y-1 text-[11px] md:text-xs">
              {b.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
