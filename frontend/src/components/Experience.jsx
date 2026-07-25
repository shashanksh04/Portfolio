import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const fallback = [
  {
    id: 1,
    role: 'Software Development Intern',
    company: 'Genworx AI',
    duration: 'Oct 2025 - Jan 2026',
    metrics: [
      { value: '5', label: 'Agents', suffix: '-agent pipeline' },
      { value: '3-4hr', label: 'To', suffix: '< 15 min' },
      { value: '30', label: 'Stories', suffix: 'generated' },
    ],
    description: [
      '5-agent LLM pipeline with orchestrator, genre, character, plot & writer agents',
      'Reduced story generation from 3-4 hours to under 15 minutes',
      'Maintained narrative consistency across multi-chapter outputs',
      'Completed 30 story generation requests successfully',
    ],
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'Ether InfoTech',
    duration: 'Jan 2024 - Feb 2024',
    metrics: [
      { value: '2.8%', label: 'MAE', suffix: 'test-set error' },
      { value: '31%', label: 'Improvement', suffix: 'over baseline' },
      { value: '19', label: 'Features', suffix: 'selected from 47' },
    ],
    description: [
      'Built LSTM stock forecasting model on 10 years of OHLCV data across 15 tickers',
      'Achieved test-set MAE of 2.8% — 31% improvement over moving-average baseline',
      'Reduced features from 47 to 19 via correlation selection, cutting training time by 25%',
    ],
  },
]

export default function Experience() {
  const [exp, setExp] = useState(null)
  const [error, setError] = useState(false)

  function parseDesc(d) {
    if (Array.isArray(d)) return d
    if (typeof d === 'string') return d.split('\n').filter(Boolean)
    return []
  }

  useEffect(() => {
    fetch(`${API_BASE}/api/experience`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load')
        return r.json()
      })
      .then((data) => setExp(data.map((e) => ({ ...e, description: parseDesc(e.description) }))))
      .catch(() => setError(true))
  }, [])

  const items = error || !exp ? fallback : exp.map((e) => ({
    ...e,
    metrics: [],
  }))

  return (
    <section id="experience" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            04.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Experience<span className="text-accent">/</span>
          </h2>
        </Reveal>

        <div className="space-y-8 md:space-y-10">
          {items.map((e, i) => (
            <Reveal key={e.id} delay={i * 150} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                      {e.role}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      @ {e.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-cyan font-medium shrink-0 px-3 py-1 bg-cyan/10 rounded-full border border-cyan/20">
                    {e.duration}
                  </span>
                </div>

                {e.metrics && e.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {e.metrics.map((m) => (
                      <div key={m.label} className="bg-dark-900/50 rounded-lg p-3 text-center border border-dark-600">
                        <p className="text-lg md:text-xl font-display font-bold text-gradient">{m.value}</p>
                        <p className="text-[10px] text-gray-500 font-mono">{m.label}</p>
                        <p className="text-[10px] text-gray-600">{m.suffix}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-1.5">
                  {e.description.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 shrink-0">
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
