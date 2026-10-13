import type { ReactNode } from 'react'

interface PanelHeaderProps {
  title: string
  subtitle: string
  titleClass?: string
  badge: ReactNode
}

export function PanelHeader({ title, subtitle, titleClass = 'text-orange-400', badge }: PanelHeaderProps) {
  return (
    <div className="metal-plate p-3 rounded border border-gray-700 flex justify-between items-center">
      <div>
        <h2 className={`thps-font text-lg ${titleClass}`}>{title}</h2>
        <p className="font-mono text-[11px] text-gray-400">{subtitle}</p>
      </div>
      {badge}
    </div>
  )
}
