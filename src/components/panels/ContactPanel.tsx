import { useState, type FormEvent } from 'react'
import { LINKS, PROFILE } from '../../data/profile'
import { PanelHeader } from '../PanelHeader'

const INPUT_CLASS =
  'w-full bg-black/80 border border-neutral-700 focus:border-cyan-400 focus:ring-0 text-sm rounded px-3 py-1.5 text-white placeholder-gray-600 font-mono'

const visibleLinks = LINKS.filter((l) => l.href !== '')

export function ContactPanel() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <div className="space-y-3">
      <PanelHeader
        title="2 PLAYER: MULTIPLAYER CO-OP"
        subtitle={`Match Lobby: Start a Project with ${PROFILE.firstName}`}
        titleClass="text-cyan-300"
        badge={
          <span className="px-2 py-0.5 bg-cyan-600 text-black font-mono text-[10px] rounded font-bold">1P vs 2P</span>
        }
      />

      <form onSubmit={handleSubmit} className="griptape p-3.5 rounded border border-neutral-700 space-y-2.5">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-[11px] text-gray-300 mb-0.5">
            PLAYER 2 NAME / HANDLE
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Tony H. or Tech Recruiter"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-[11px] text-gray-300 mb-0.5">
            EMAIL TRANSMISSION LINK
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="partner@domain.com"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block font-mono text-[11px] text-gray-300 mb-0.5">
            GAME PLAN // MESSAGE / ROLE
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={3}
            placeholder="Describe your freelance project, contract, or full-time position..."
            className={INPUT_CLASS}
          />
        </div>

        {sent && (
          <p className="font-mono text-[11px] text-emerald-400 text-center" role="status">
            COMMUNICATION SENT TO 2P CONTROLLER! (Demo simulated message)
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-black thps-font text-base rounded shadow-lg tracking-wider active:scale-[0.99] transition-transform"
        >
          PRESS START: SEND TRANSMISSION
        </button>
      </form>

      {visibleLinks.length > 0 && (
        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
          {visibleLinks.map((l) => {
            const external = !l.href.startsWith('mailto:')
            return (
              <a
                key={l.label}
                href={l.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="p-2 bg-[#1b2027] hover:bg-[#252c36] rounded border border-gray-700 block transition-colors"
              >
                <span className="block text-gray-400 text-[10px]">{l.kind}</span>
                <span className="text-white font-bold">{l.label}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
