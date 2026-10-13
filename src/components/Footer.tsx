import { PROFILE } from '../data/profile'

export function Footer() {
  return (
    <footer className="mt-auto px-4 lg:px-8 py-3 bg-[#0d1013] border-t border-neutral-800 text-center text-xs font-mono text-gray-500">
      <div className="flex justify-center items-center gap-2 mb-1">
        <span className="inline-block w-2 h-2 bg-orange-600 rounded-sm" />
        <span className="text-gray-400 uppercase text-[11px]">DREAMCAST THPS2 TRIBUTE // NOT AFFILIATED WITH ACTIVISION</span>
        <span className="inline-block w-2 h-2 bg-orange-600 rounded-sm" />
      </div>
      <p className="text-[10px] uppercase">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite and Tailwind.
      </p>
    </footer>
  )
}
