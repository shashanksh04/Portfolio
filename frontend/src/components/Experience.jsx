import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const metricsByCompany = {
  'MD Anderson Cancer Center': [
    { value: '7.26M', label: 'sample frames', suffix: 'timestamped' },
    { value: '146', label: 'channel records', suffix: 'EEG + multimodal' },
    { value: '495+14', label: 'tests', suffix: 'backend + frontend' },
  ],
  'Genworx AI': [
    { value: '92%', label: 'F1', suffix: 'held-out templates' },
    { value: '85%', label: 'less review', suffix: 'internal measurement' },
    { value: '10k+', label: 'docs/day', suffix: 'async batching' },
  ],
}

const notesByCompany = {
  'MD Anderson Cancer Center':
    'Latest documented verification; reported separately from the live system, which has its own suite.',
  'Genworx AI': 'F1 measured on document templates not seen during development.',
}

const caseStudyCompanies = {
  'MD Anderson Cancer Center': '#/work/music-in-medicine',
}

const fallback = [
  {
    id: 1,
    role: 'Research Software Engineer',
    company: 'MD Anderson Cancer Center',
    duration: 'Sept 2026 - Present',
    metrics: metricsByCompany['MD Anderson Cancer Center'],
    description: [
      'Built a PostgreSQL and FastAPI research platform indexing 7.26M timestamped sample frames across seven physiological recordings',
      'Organized 146 recording-channel entries across EEG and multimodal recordings; stored 24,494 music-feature rows across six datasets for time-window queries',
      'Developed MNE-Python preprocessing with researcher-reviewed quality screening, band power/asymmetry extraction, and preserved provenance',
      'Built synchronized EEG/ECG/HR/HRV displays for up to four participants (verified with synthetic streams); registered 303 assets for traceable I/O',
    ],
  },
  {
    id: 2,
    role: 'Software Development Intern',
    company: 'Genworx AI',
    duration: 'Oct 2025 - Jan 2026',
    metrics: metricsByCompany['Genworx AI'],
    description: [
      'Built an ingestion and LLM extraction service for medical claims, invoices and vendor contracts across PDFs, scans and text',
      'Reached 92% F1 on held-out templates; confidence scoring and typed JSON validation route uncertain results to human review',
      'Cut manual data-entry and review time by 85% in internal measurement; async batching designed for 10,000+ documents per day',
    ],
  },
]

export default function Experience() {
  const [exp, setExp] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  function parseDesc(d) {
    if (Array.isArray(d)) return d
    if (typeof d === 'string') return d.split('\n').filter(Boolean)
    return []
  }

  useEffect(() => {
    fetch(`${API_BASE}/experience`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load')
        return r.json()
      })
      .then((data) => {
        setExp(data.map((e) => ({ ...e, description: parseDesc(e.description) })))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const items = error ? fallback : (exp || []).map((e) => ({
    ...e,
    metrics: metricsByCompany[e.company] || [],
  }))

  return (
    <section id="experience" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            03.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Experience<span className="text-accent">/</span>
          </h2>
        </Reveal>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        )}

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
                        <p className="text-xs text-gray-300 font-mono">{m.label}</p>
                        <p className="text-[11px] text-gray-500">{m.suffix}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2">
                  {e.description.map((point, j) => (
                    <li
                      key={j}
                      className="text-[15px] text-gray-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {notesByCompany[e.company] && (
                  <p className="text-xs text-gray-400 leading-relaxed mt-3 italic">
                    {notesByCompany[e.company]}
                  </p>
                )}

                {caseStudyCompanies[e.company] && (
                  <a
                    href={caseStudyCompanies[e.company]}
                    className="inline-block text-sm font-semibold text-accent hover:text-accent-light mt-4 transition-colors"
                  >
                    Read the Music-in-Medicine case study →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
