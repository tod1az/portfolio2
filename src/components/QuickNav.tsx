import { QUICK_NAV, type MenuKey } from '../data/menu'

interface QuickNavProps {
  active: MenuKey
  onSelect: (key: MenuKey) => void
}

export function QuickNav({ active, onSelect }: QuickNavProps) {
  return (
    <div className="w-full flex justify-between items-center gap-1.5 mt-3 px-1 overflow-x-auto py-1 scrollbar-none">
      {QUICK_NAV.map((tab) => {
        const isActive = tab.key === active
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onSelect(tab.key)}
            className={`flex-1 min-w-[58px] py-1.5 px-1 text-center border rounded text-[11px] thps-font hover:text-white transition-all ${
              isActive ? 'bg-[#1e232b] border-orange-500 text-orange-400' : 'bg-[#191d24] border-gray-700 text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
