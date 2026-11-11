import Reveal from './Reveal'

const groups = [
  {
    title: 'Languages',
    icon: '{}',
    items: ['Python', 'SQL', 'JavaScript', 'C++', 'Go', 'MATLAB'],
  },
  {
    title: 'Backend & APIs',
    icon: '⚡',
    items: ['FastAPI', 'SQLAlchemy', 'REST API Design', 'Postman', 'Pydantic', 'Asynchronous Processing'],
  },
  {
    title: 'Databases & Caching',
    icon: 'DB',
    items: ['PostgreSQL', 'Redis', 'SQLite', 'MongoDB', 'MySQL', 'SQL Indexing'],
  },
  {
    title: 'AI / LLM',
    icon: '🧠',
    items: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Engineering & Workflows', 'Document Extraction'],
  },
  {
    title: 'Frontend',
    icon: '</>',
    items: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'HTML/CSS'],
  },
  {
    title: 'Development & DevOps',
    icon: '🛠',
    items: ['Git', 'Docker', 'Linux', 'Cloudflare Tunnel', 'CI/CD'],
  },
  {
    title: 'Cloud',
    icon: '☁',
    items: ['AWS EC2', 'S3', 'Lambda', 'IAM', 'Google Cloud Run', 'RDS', 'Cloud Storage'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-5 md:px-6 relative">
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="max-w-5xl mx-auto relative">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            03.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Skills<span className="text-accent">/</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} direction={i % 2 === 0 ? 'up' : 'down'}>
              <div className="group bg-dark-800 border border-dark-700 rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:glow-accent hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono font-semibold text-accent tracking-widest uppercase">
                    {g.title}
                  </h3>
                  <span className="text-lg font-mono text-gray-500 group-hover:text-accent transition-colors">
                    {g.icon}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium text-gray-300 rounded-md border border-dark-600 bg-dark-900/50 group-hover:border-accent/20 group-hover:text-white transition-all duration-200"
                    >
                      {s}
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
