import { useEffect, useRef, useState } from 'react'

const CHANNELS = [
  { label: 'EEG · Fz', color: '#A78BFA', kind: 'eeg', phase: 0 },
  { label: 'EEG · Cz', color: '#7C3AED', kind: 'eeg', phase: 2.1 },
  { label: 'ECG', color: '#22D3EE', kind: 'ecg', phase: 0 },
  { label: 'HR / HRV', color: '#FBBF24', kind: 'hr', phase: 0 },
]

function sample(ch, i, t) {
  const noise = Math.random() - 0.5
  if (ch.kind === 'eeg') {
    return (
      Math.sin(t * 0.006 + ch.phase + i) * 0.5 +
      Math.sin(t * 0.021 + ch.phase * 2 + i * 2) * 0.22 +
      Math.sin(t * 0.05 + ch.phase * 3 + i * 3) * 0.1 +
      noise * 0.12
    )
  }
  if (ch.kind === 'ecg') {
    const period = 92
    const p = (t + i * 11) % period
    let v = noise * 0.03
    if (p < 4) v -= 0.8 * (p / 4)
    else if (p < 8) v += 1.6 * ((p - 4) / 4) - 0.8
    else if (p < 12) v -= 0.8 * ((p - 8) / 4)
    if (p > 34 && p < 40) v += 0.22
    return v
  }
  return Math.sin(t * 0.01 + ch.phase) * 0.35 + Math.sin(t * 0.03) * 0.1 + noise * 0.05
}

export default function SignalStudioDemo({ height = 280, className = '' }) {
  const canvasRef = useRef(null)
  const pausedRef = useRef(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const N = 760
    const buffers = CHANNELS.map(() => new Array(N).fill(0))
    let raf
    let t = 0
    let width = 0
    let heightPx = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth
      heightPx = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(heightPx * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const bandH = () => heightPx / CHANNELS.length

    function drawGrid() {
      ctx.fillStyle = '#07080B'
      ctx.fillRect(0, 0, width, heightPx)
      ctx.strokeStyle = 'rgba(124,58,237,0.09)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = 0; x < width; x += 28) { ctx.moveTo(x, 0); ctx.lineTo(x, heightPx) }
      for (let y = 0; y < heightPx; y += 28) { ctx.moveTo(0, y); ctx.lineTo(width, y) }
      ctx.stroke()
      ctx.strokeStyle = 'rgba(148,163,184,0.14)'
      ctx.beginPath()
      for (let c = 1; c < CHANNELS.length; c++) {
        const y = c * bandH()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    function frame() {
      if (!pausedRef.current) {
        t += 1
        for (let c = 0; c < CHANNELS.length; c++) {
          buffers[c].push(sample(CHANNELS[c], 0, t))
          buffers[c].shift()
        }
      }
      drawGrid()
      const bh = bandH()
      for (let c = 0; c < CHANNELS.length; c++) {
        const cy = c * bh + bh / 2
        const amp = bh * 0.36
        const buf = buffers[c]
        ctx.beginPath()
        for (let i = 0; i < buf.length; i++) {
          const x = (i / (buf.length - 1)) * width
          const y = cy - buf[i] * amp
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = CHANNELS[c].color
        ctx.lineWidth = 1.6
        ctx.shadowColor = CHANNELS[c].color
        ctx.shadowBlur = 6
        ctx.stroke()
        ctx.shadowBlur = 0

        ctx.fillStyle = CHANNELS[c].color
        ctx.font = '11px "JetBrains Mono", monospace'
        ctx.fillText(CHANNELS[c].label, 10, c * bh + 16)
      }
      ctx.strokeStyle = 'rgba(34,211,238,0.55)'
      ctx.beginPath()
      ctx.moveTo(width - 1, 0)
      ctx.lineTo(width - 1, heightPx)
      ctx.stroke()
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={`bg-dark-800/80 border border-dark-600/50 rounded-xl overflow-hidden shadow-2xl shadow-accent/5 ${className}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-dark-600/50">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow inline-block shrink-0" />
          <span className="text-xs font-mono text-gray-200 truncate">Signal Studio — live view</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border border-amber/30 text-amber bg-amber/10">
            SIMULATION
          </span>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="text-[11px] font-mono text-gray-300 hover:text-white px-2 py-0.5 rounded border border-dark-600 hover:border-accent/40 transition-colors"
            aria-label={paused ? 'Resume signal animation' : 'Pause signal animation'}
          >
            {paused ? '▶ play' : '❚❚ pause'}
          </button>
        </div>
      </div>
      <canvas ref={canvasRef} className="w-full block" style={{ height }} />
      <div className="px-4 py-2 border-t border-dark-600/50 text-[11px] font-mono text-gray-400">
        Synthetic signals for demonstration — not patient data.
      </div>
    </div>
  )
}
