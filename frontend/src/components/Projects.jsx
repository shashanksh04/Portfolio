import { useState, useEffect } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const fallback = [
  {
    id: 1,
    title: 'AI-Powered Resume Evaluator',
    description: [
      'LLM-as-judge engine with Ollama (DeepSeek + Gemma)',
      '8 evaluation dimensions with 85% agreement with human reviewers',
      'Validated on 20+ real resumes with role-specific suggestions',
    ],
    tech_stack: 'Python, Ollama, LangChain, FastAPI, React, PostgreSQL',
    github_url: 'https://github.com/shashanksh04/resume-evaluator',
    status: 'Live',
  },
  {
    id: 2,
    title: 'AI-Powered Finance Tracker',
    description: [
      'Full-stack finance platform with JWT authentication',
      'Multi-account transaction management',
      'Bill OCR with 94% accuracy — receipts processed in under 1.2s',
      'Financial Copilot with Redis memory',
    ],
    tech_stack: 'React, Python, FastAPI, PostgreSQL, Celery, Redis, Ollama',
    github_url: 'https://github.com/shashanksh04/finance-tracker',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Multi-Agent Story Generation Engine',
    description: [
      '5-agent LLM pipeline with LangGraph & LangChain',
      'Agents: genre analyzer, character creator, chapter title generator, content writer',
      'Inter-agent context passing with structured validation',
      'Narrative consistency across multi-chapter outputs',
    ],
    tech_stack: 'Python, LangChain, LangGraph, FastAPI, React, Ollama',
    github_url: '',
    status: 'Demo',
  },
  {
    id: 4,
    title: 'Deep Research Autonomous Agent',
    description: [
      'Autonomous research system with RAG pipelines',
      'Dynamic research step planning and multi-source data scraping',
      'Self-correcting evaluation loop in LangGraph',
      'Autonomous query refinement and source verification',
    ],
    tech_stack: 'Python, LangGraph, RAG, Ollama, FastAPI, PostgreSQL',
    github_url: '',
    status: 'Demo',
  },
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
    Live: 'bg-green-500/10 text-green-400 border-green-500/20',
    Demo: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Private: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  }

  return (
    <section id="projects" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            05.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Projects<span className="text-accent">/</span>
          </h2>
        </Reveal>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <div className="card-glow bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 flex flex-col transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-display font-semibold text-white">{p.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.status && (
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${statusColors[p.status] || statusColors.Demo}`}>
                        {p.status}
                      </span>
                    )}
                    {p.github_url && (
                      <a
                        href={p.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <ul className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 space-y-1.5">
                  {p.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-dark-600/50">
                  {p.tech_stack.split(', ').map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium text-gray-400 rounded-md bg-dark-900 border border-dark-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
