import { useCallback, useRef, useState } from 'react'

type LegacyWindow = Window & { webkitAudioContext?: typeof AudioContext }

export function useRetroSfx(initialEnabled = true) {
  const [enabled, setEnabled] = useState(initialEnabled)
  const ctxRef = useRef<AudioContext | null>(null)

  const play = useCallback(
    (freq = 440, type: OscillatorType = 'square', duration = 0.05, force = false) => {
      if (!enabled && !force) return
      try {
        if (!ctxRef.current) {
          const Ctor = window.AudioContext || (window as LegacyWindow).webkitAudioContext
          if (!Ctor) return
          ctxRef.current = new Ctor()
        }
        const ctx = ctxRef.current
        if (ctx.state === 'suspended') void ctx.resume()

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = type
        osc.frequency.setValueAtTime(freq, ctx.currentTime)
        gain.gain.setValueAtTime(0.12, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + duration)
      } catch {
        // Audio policy fallback: ignore
      }
    },
    [enabled],
  )

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev
      if (next) play(600, 'triangle', 0.08, true)
      return next
    })
  }, [play])

  return { enabled, toggle, play }
}
