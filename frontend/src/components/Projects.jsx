import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const contextByTitle = {
  'Finance Tracker':
    'Accounts served. Sub-100 ms latency measured on the copilot retrieval endpoint in a local development benchmark.',
  'Password Manager':
    'p95 latency measured across 1,000 vault items on the Raspberry Pi 5 deployment.',
  'AI-Powered Resume Evaluator':
    'Agreement measured against human reviewers across a set of real resumes; 8 scoring dimensions.',
}

const fallback = [
  {
    id: 1,
    title: 'Finance Tracker',
    description: [
      'Eight-module finance platform with PostgreSQL-backed data for AI analysis and goal tracking',
      'Eight-node LangGraph copilot with specialized routing, SSE streaming and parallel retrieval',
      'Bill scanning with PaddleOCR, EasyOCR and LLM extraction; offline-first SQLite sync',
    ],
    tech_stack: 'React, Python, FastAPI, PostgreSQL, LangGraph, SQLite, Redis',
    github_url: 'https://finance.shashankakumar.com/',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Password Manager',
    description: [
      'Deployed on a Raspberry Pi 5 (8 GB RAM, 256 GB SSD)',
      'Browser-side vault encryption with server-side encrypted synchronization',
      'p95 metadata latency under 300 ms; local search under 100 ms across 1,000 items',
    ],
    tech_stack: 'Python, SQLite, Encryption, Raspberry Pi, Cloudflare Tunnel',
    github_url: 'https://password.shashankakumar.com/',
    status: 'Live',
  },
  {
    id: 3,
    title: 'AI-Powered Resume Evaluator',
    description: [
      'LLM-as-judge engine with Ollama (DeepSeek + Gemma)',
      'Eight evaluation dimensions, validated on real resumes',
      'Role-specific improvement suggestions',
    ],
    tech_stack: 'Python, Ollama, LangChain, FastAPI, React, PostgreSQL',
    github_url: 'https://github.com/shashanksh04/resume-evaluator',
    status: 'Live',
  },
  {
    id: 4,
    title: 'Multi-Agent Story Generation Engine',
    description: [
      'Five-agent LLM pipeline with LangGraph & LangChain',
      'Inter-agent context passing with structured validation',
      'Narrative consistency across multi-chapter outputs',
    ],
    tech_stack: 'Python, LangChain, LangGraph, FastAPI, React, Ollama',
    github_url: '',
    status: 'Demo',
  },
  {
    id: 5,
    title: 'Deep Research Autonomous Agent',
    description: [
      'Autonomous research system with RAG pipelines',
      'Dynamic research step planning and multi-source synthesis',
      'Self-correcting evaluation loop in LangGraph',
    ],
    tech_stack: 'Python, LangGraph, RAG, Ollama, FastAPI, PostgreSQL',
    github_url: '',
    status: 'Demo',
  },
]

const flagshipStats = [
  { value: '7.26M', label: 'timestamped sample frames' },
  { value: '146', label: 'recording-channel entries' },
  { value: '24,494', label: 'music-feature rows' },
  { value: '4,193', label: 'queryable events' },
]

export default function Projects() {
  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  function parseDesc(d) {
    if (Array.isArray(d)) return d
    if (typeof d === 'string') return d.split('\n').filter(Boolean)
    return []
  }

  useEffect(() => {
    fetch(`${API_BASE}/projects`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load')
        return r.json()
      })
      .then((data) => {
        setProjects(data.map((p) => ({ ...p, description: parseDesc(p.description), status: p.github_url ? 'Live' : 'Demo' })))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const items = error ? fallback : (projects || [])

  const statusColors = {
    Live: 'bg-green-500/10 text-green-300 border-green-500/20',
    Demo: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  }

  return (
    <section id="projects" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            02.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Featured Projects<span className="text-accent">/</span>
          </h2>
        </Reveal>

        <Reveal>
          <a
            href="#/work/music-in-medicine"
            className="block card-glow bg-dark-800 border border-dark-700 rounded-2xl p-6 md:p-8 mb-6 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold text-accent border border-accent/30 bg-accent/10 rounded-full px-2.5 py-1">
                FLAGSHIP
              </span>
              <span className="text-xs font-mono text-gray-400">MD Anderson Cancer Center</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
              Music-in-Medicine Research Signal Platform
            </h3>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl mb-5">
              Research data platform for ingesting, processing, synchronizing and visualizing
              physiological signals recorded during live music sessions &mdash; with traceable
              provenance and reproducible, tested pipelines.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {flagshipStats.map((s) => (
                <div key={s.label} className="bg-dark-900/60 border border-dark-600 rounded-xl p-3">
                  <p className="text-lg md:text-xl font-display font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {['Implemented', 'Tested with synthetic data', 'Awaiting hardware validation'].map((b) => (
                <span key={b} className="text-xs font-mono text-gray-300 px-2.5 py-1 rounded-full border border-dark-600 bg-dark-900/60">
                  {b}
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-accent">Read the case study →</span>
          </a>
        </Reveal>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <div className="card-glow bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 flex flex-col transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-display font-semibold text-white">{p.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.status && (
                      <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full border ${statusColors[p.status] || statusColors.Demo}`}>
                        {p.status}
                      </span>
                    )}
                    {p.github_url && (
                      <a
                        href={p.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label={p.github_url.includes('github.com') ? 'GitHub repository' : 'Visit project'}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          {p.github_url.includes('github.com') ? (
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                          ) : (
                            <path d="M14 3h7v7h-2V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 5H14V3zM5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                          )}
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <ul className="text-[15px] text-gray-300 leading-relaxed mb-4 flex-1 space-y-2">
                  {p.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {contextByTitle[p.title] && (
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 italic">
                    {contextByTitle[p.title]}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-dark-600/50">
                  {p.tech_stack.split(', ').slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono font-medium text-gray-300 rounded-md bg-dark-900 border border-dark-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 font-mono">
          Metrics are internal measurements; evaluation sets and conditions are noted per project.
        </p>
      </div>
    </section>
  )
}
