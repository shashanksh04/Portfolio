import SignalStudioDemo from '../components/SignalStudioDemo'
import Footer from '../components/Footer'

const dataScale = [
  {
    value: '7.26M',
    label: 'sample frames',
    detail: 'Indexed 7.26M timestamped sample frames across seven physiological recordings. These are time points, not individual channel values.',
  },
  {
    value: '146',
    label: 'channel records',
    detail: 'Organized 146 recording-channel entries across EEG and multimodal recordings — not 146 unique electrodes.',
  },
  {
    value: '24,494',
    label: 'music-feature rows',
    detail: 'Stored 24,494 music-feature rows across six datasets for time-window queries.',
  },
  {
    value: '4,193',
    label: 'events',
    detail: 'Made 4,193 recorded events queryable alongside physiological signals.',
  },
  {
    value: '303',
    label: 'registered assets',
    detail: 'Registered 303 file assets to support traceable research inputs and outputs.',
  },
  {
    value: '4',
    label: 'participant streams',
    detail: 'Built individual EEG/ECG/HR/HRV displays for up to four participants, verified with synthetic streams.',
  },
]

const status = [
  {
    title: 'Implemented',
    color: 'border-green-500/30 bg-green-500/10 text-green-300',
    items: [
      'Transactional ingestion with SHA-256 file integrity checks',
      'PostgreSQL schema for recordings, channels, samples, events, music features and assets',
      'FastAPI query API and MNE-Python preprocessing pipeline',
      'Synchronized multi-participant EEG/ECG/HR/HRV viewer',
    ],
  },
  {
    title: 'Tested with synthetic data',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    items: [
      'Preprocessing validated with synthetic signals',
      'Imported 4,080 synthetic feature observations',
      'Synchronization and viewer behaviour verified with synthetic streams',
    ],
  },
  {
    title: 'Awaiting hardware validation',
    color: 'border-cyan/30 bg-cyan/10 text-cyan-300',
    items: [
      'Live-concert capture on production hardware',
      'End-to-end timing on real acquisition devices',
    ],
  },
]

function Section({ eyebrow, title, children }) {
  return (
    <section className="py-10 md:py-14 border-t border-dark-700">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <header className="sticky top-0 z-40 bg-dark-900/85 backdrop-blur-xl border-b border-dark-700">
        <div className="max-w-4xl mx-auto px-5 md:px-6 h-14 flex items-center justify-between">
          <a href="#/" className="text-sm font-mono text-gray-300 hover:text-white transition-colors">
            ← Shashank A Kumar
          </a>
          <a
            href="#contact"
            className="text-xs font-mono text-gray-400 hover:text-accent transition-colors"
          >
            get in touch
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 md:px-6 pb-20">
        <div className="pt-12 md:pt-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Case Study · Flagship</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
            Music-in-Medicine Research Signal Platform
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
            A research data platform for ingesting, processing, synchronizing and visualizing
            physiological signals recorded during live music sessions.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Research Software Engineer', 'MD Anderson Cancer Center', 'PostgreSQL · FastAPI · MNE-Python'].map((t) => (
              <span key={t} className="text-xs font-mono text-gray-300 px-3 py-1 rounded-full border border-dark-600 bg-dark-800">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SignalStudioDemo height={300} />
          <p className="text-xs font-mono text-gray-400 mt-3">
            Figure 1 — Synchronized signal view (simulation). Rendered from synthetic signals; not patient data.
          </p>
        </div>

        <Section eyebrow="01" title="The research problem">
          <p className="text-base text-gray-300 leading-relaxed">
            Music-in-Medicine researchers study how live music affects physiological responses. Doing that
            rigorously means bringing together heterogeneous recordings, music features and event annotations,
            screening signal quality, and keeping every derived value traceable to its source. The team needed
            a platform that could do this repeatably rather than through one-off scripts.
          </p>
        </Section>

        <Section eyebrow="02" title="My contribution">
          <p className="text-base text-gray-300 leading-relaxed">
            I designed and built the research data platform end to end: the PostgreSQL schema and FastAPI
            service for ingestion and querying, the MNE-Python preprocessing pipeline, and the synchronized
            viewer used to inspect recordings. My focus was reliability and traceability — repeatable imports,
            recorded quality decisions, and provenance from raw data to derived values.
          </p>
        </Section>

        <Section eyebrow="03" title="Architecture">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-4 md:p-6 overflow-x-auto">
            <svg viewBox="0 0 720 210" className="w-full min-w-[620px]" role="img" aria-label="Platform architecture diagram">
              <defs>
                <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8 z" fill="#22D3EE" />
                </marker>
              </defs>
              {[
                { x: 10, title: 'Sources', lines: ['EEG / ECG', 'HR / HRV', 'Music features', 'Events'] },
                { x: 190, title: 'Ingestion', lines: ['FastAPI', 'SHA-256 checks', 'Transactional'] },
                { x: 370, title: 'Storage', lines: ['PostgreSQL', 'Channels · frames', 'Events · assets'] },
                { x: 550, title: 'Processing', lines: ['MNE-Python', 'Quality screen', 'Band power'] },
              ].map((b) => (
                <g key={b.title}>
                  <rect x={b.x} y="40" width="160" height="120" rx="12" fill="#0D1117" stroke="#21262D" />
                  <text x={b.x + 16} y="66" fill="#A78BFA" fontSize="12" fontFamily="JetBrains Mono, monospace">
                    {b.title}
                  </text>
                  {b.lines.map((l, i) => (
                    <text key={l} x={b.x + 16} y={92 + i * 20} fill="#C7CDD6" fontSize="12" fontFamily="Inter, sans-serif">
                      {l}
                    </text>
                  ))}
                </g>
              ))}
              {[170, 350, 530].map((x) => (
                <path key={x} d={`M${x} 100 H${x + 20}`} stroke="url(#flow)" strokeWidth="2" markerEnd="url(#arrow)" />
              ))}
            </svg>
            <p className="text-xs font-mono text-gray-400 mt-3">
              Figure 2 — High-level pipeline: sources → ingestion → storage → processing → viewer.
            </p>
          </div>
        </Section>

        <Section eyebrow="04" title="Synchronized signal viewing">
          <p className="text-base text-gray-300 leading-relaxed">
            The viewer aligns multiple signal types on a shared timeline: individual EEG, ECG, heart-rate and
            heart-rate-variability displays for up to four participants, shown alongside events and music
            features. Multi-participant behaviour was verified with synthetic streams, so the interface can be
            evaluated before live hardware is connected.
          </p>
        </Section>

        <Section eyebrow="05" title="Raw recording & quality checks">
          <p className="text-base text-gray-300 leading-relaxed">
            Source timestamps and excluded intervals are preserved rather than silently dropped, and quality
            screening is researcher-reviewed. This keeps analysis provenance intact: any displayed value can be
            traced back to the raw recording and the decisions applied to it.
          </p>
        </Section>

        <Section eyebrow="06" title="Validation & testing">
          <ul className="space-y-3">
            <li className="text-base text-gray-300 leading-relaxed">
              <span className="text-white font-medium">495 research-backend tests + 14 frontend tests</span> — latest
              documented research-platform verification; separate from the live system.
            </li>
            <li className="text-base text-gray-300 leading-relaxed">
              <span className="text-white font-medium">44 live-concert tests</span> — latest documented live-system
              suite, covering processing, recording and failure handling.
            </li>
            <li className="text-base text-gray-300 leading-relaxed">
              Preprocessing validated with synthetic signals; 4,080 synthetic feature observations imported.
            </li>
          </ul>
        </Section>

        <Section eyebrow="07" title="Data scale">
          <p className="text-sm text-gray-400 mb-2">
            Figures below are counted directly from the research database. Wording distinguishes time points,
            channel entries and datasets so the numbers are not over-read.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {dataScale.map((d) => (
              <div key={d.label} className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <p className="font-display font-bold text-2xl text-gradient">{d.value}</p>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">{d.label}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="08" title="Status & limitations">
          <div className="grid md:grid-cols-3 gap-4">
            {status.map((s) => (
              <div key={s.title} className="bg-dark-800 border border-dark-700 rounded-xl p-4">
                <span className={`inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${s.color}`}>
                  {s.title}
                </span>
                <ul className="mt-3 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-gray-300 leading-relaxed flex gap-2">
                      <span className="text-accent mt-1">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mt-4">
            The test totals reflect the latest documented verification runs and are reported separately from the
            live system, which has its own suite. Live-concert capture on production hardware remains pending.
          </p>
        </Section>

        <div className="pt-10 border-t border-dark-700 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors text-sm"
          >
            Back to featured work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-dark-600 text-gray-200 font-medium rounded-xl hover:border-accent hover:text-accent transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
