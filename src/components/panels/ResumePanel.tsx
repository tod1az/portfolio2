import { useState } from 'react'
import { PanelHeader } from '../PanelHeader'

const SETTINGS = [
  { label: 'CODE EDITOR THEME', value: 'THPS2 GRUNGE DARK', valueClass: 'text-orange-400' },
  { label: 'TIMEZONE', value: 'UTC-5 / NYC (OPEN TO GLOBAL)', valueClass: 'text-cyan-400' },
  { label: 'AVAILABILITY', value: 'IMMEDIATE / 2 WEEKS', valueClass: 'text-emerald-400' },
]

export function ResumePanel() {
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      <PanelHeader
        title="OPTIONS & RESUME CASSETTE"
        subtitle="System Preferences // PDF Download"
        badge={
          <span className="px-2 py-0.5 bg-neutral-800 text-gray-300 font-mono text-[10px] rounded border border-neutral-600">
            CONF.SYS
          </span>
        }
      />

      <div className="griptape p-4 rounded border-2 border-orange-500 text-center space-y-2">
        <h3 className="thps-font text-xl text-white">DOWNLOAD OFFICIAL CV / RESUME</h3>
        <p className="text-xs text-gray-300 font-sans">
          Get the high-resolution printable PDF version with comprehensive project descriptions, references, and
          contact coordinates.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setDownloadMsg('Demo: Triggering PDF Resume Download!')}
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black thps-font text-sm rounded shadow-lg tracking-wider active:scale-95 transition-transform"
          >
            DOWNLOAD RESUME (.PDF)
          </button>
        </div>
        {downloadMsg && (
          <p className="font-mono text-[11px] text-emerald-400" role="status">
            {downloadMsg}
          </p>
        )}
      </div>

      <div className="bg-[#171b21] p-3 rounded border border-neutral-800 space-y-2 font-mono text-xs">
        <h4 className="text-gray-400 text-[11px] uppercase tracking-wider">DEV ENVIRONMENT SETTINGS</h4>
        {SETTINGS.map((s) => (
          <div key={s.label} className="flex justify-between py-1 border-b border-neutral-800">
            <span className="text-gray-300">{s.label}</span>
            <span className={`${s.valueClass} font-bold`}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
