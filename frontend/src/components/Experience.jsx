import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const metricsByCompany = {
  'MD Anderson Cancer Center': [
    { value: '7', label: 'EEG', suffix: 'recordings ingested' },
    { value: '24,494', label: 'Music rows', suffix: 'feature data' },
    { value: '211', label: 'Tests', suffix: 'passing' },
  ],
  'Genworx AI': [
    { value: '92%', label: 'F1', suffix: 'on unseen templates' },
    { value: '85%', label: 'Less', suffix: 'manual review time' },
    { value: '10k+', label: 'Docs/day', suffix: 'processed' },
  ],
}

const fallback = [
  {
    id: 1,
    role: 'Research Software Engineer',
    company: 'MD Anderson Cancer Center',
    duration: 'Sept 2026 - Present',
    metrics: metricsByCompany['MD Anderson Cancer Center'],
    description: [
      'Built a PostgreSQL and FastAPI platform ingesting seven EEG recordings from four participants and 24,494 music-feature rows with SHA-256 file integrity checks and repeatable transactional imports',
      'Developed researcher-reviewed quality screening, MNE-Python preprocessing and band power/asymmetry extraction; preserved source timestamps, excluded intervals, and analysis provenance',
      'Established 211 passing tests covering ingestion, numerical behaviour, migrations, permissions, and concurrent retries; validated preprocessing with synthetic signals and imported 4,080 synthetic feature observations',
    ],
  },
  {
    id: 2,
    role: 'Software Development Intern',
    company: 'Genworx AI',
    duration: 'Oct 2025 - Jan 2026',
    metrics: metricsByCompany['Genworx AI'],
    description: [
      'Built an ingestion and LLM extraction service for medical claims, invoices, and vendor contracts across unstructured PDFs, scanned images, and text files',
      'Achieved 92% F1 on unseen document templates; added confidence scoring and typed JSON validation to route uncertain results for human review',
      'Reduced manual data entry and review time by 85%; used asynchronous processing and batching to support 10,000+ documents per day and reduce average API latency by 40%',
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
            04.
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
                  <span className="text-xs font-mono text-cyan-DEFAULT font-medium shrink-0 px-3 py-1 bg-cyan/10 rounded-full border border-cyan/20">
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
