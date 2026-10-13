import { useCallback, useState, type JSX } from 'react'
import { TopBar } from './components/TopBar'
import { HeaderBanner } from './components/HeaderBanner'
import { WheelMenu } from './components/WheelMenu'
import { QuickNav } from './components/QuickNav'
import { Footer } from './components/Footer'
import { CareerPanel } from './components/panels/CareerPanel'
import { ProjectsPanel } from './components/panels/ProjectsPanel'
import { StatsPanel } from './components/panels/StatsPanel'
import { SkillsPanel } from './components/panels/SkillsPanel'
import { ContactPanel } from './components/panels/ContactPanel'
import { ResumePanel } from './components/panels/ResumePanel'
import { useRetroSfx } from './hooks/useRetroSfx'
import type { MenuKey } from './data/menu'

const PANELS: Record<MenuKey, () => JSX.Element> = {
  career: CareerPanel,
  projects: ProjectsPanel,
  stats: StatsPanel,
  skills: SkillsPanel,
  contact: ContactPanel,
  resume: ResumePanel,
}

export default function App() {
  const [active, setActive] = useState<MenuKey>('career')
  const { enabled: soundEnabled, toggle: toggleSound, play } = useRetroSfx(true)

  const selectMenu = useCallback(
    (key: MenuKey) => {
      play(520, 'square', 0.06)
      setActive(key)
    },
    [play],
  )

  const ActivePanel = PANELS[active]

  return (
    <div className="text-gray-200 antialiased min-h-screen relative selection:bg-orange-600 selection:text-white">
      {/* Scanline & Noise Layer */}
      <div className="fixed inset-0 scanlines z-40 pointer-events-none opacity-40" />
      <div className="fixed inset-0 grunge-overlay z-30 pointer-events-none opacity-50" />

      {/* Page container: phone column on small screens, wide console frame on large ones */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-7xl mx-auto min-h-screen flex flex-col bg-[#111417] border-x border-[#2d333b] relative z-10 shadow-2xl pb-10 lg:pb-0">
        <TopBar soundEnabled={soundEnabled} onToggleSound={toggleSound} />
        <HeaderBanner />

        <main className="px-4 py-2 md:px-6 lg:px-8 lg:py-6 flex flex-col lg:flex-row lg:items-start lg:gap-10 xl:gap-14 flex-1">
          {/* Left: wheel + quick nav (sticky on desktop) */}
          <div className="w-full lg:w-[400px] xl:w-[470px] lg:shrink-0 lg:sticky lg:top-6 flex flex-col items-center">
            <div className="w-full text-center mb-3">
              <div className="inline-block px-3 py-1 bg-neutral-900/90 border border-orange-500/40 rounded shadow">
                <p className="text-[11px] lg:text-xs font-mono tracking-tight text-gray-300">
                  <span className="text-orange-500 font-bold">SELECT MODE</span> // TAP HUB OPTIONS OR WHEEL TO NAVIGATE
                </p>
              </div>
            </div>

            <WheelMenu active={active} onSelect={selectMenu} />
            <QuickNav active={active} onSelect={selectMenu} />
          </div>

          {/* Right: active panel */}
          <div className="w-full mt-4 lg:mt-0 lg:flex-1 min-w-0">
            <ActivePanel />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
