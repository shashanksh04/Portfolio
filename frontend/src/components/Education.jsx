import Reveal from './Reveal'

const schools = [
  {
    degree: 'Master of Computer Science',
    school: 'Rice University',
    location: 'Houston, TX',
    period: 'Fall 2026 – Expected',
    icon: '🎓',
    coursework: [
      'Machine Learning',
      'Natural Language Processing',
      'Distributed Systems',
      'AI & Deep Learning',
    ],
  },
  {
    degree: 'Bachelor of Engineering in Computer Science',
    school: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore, India',
    period: 'Nov 2022 – May 2026',
    icon: '🎓',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Software Engineering',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            02.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Education<span className="text-accent">/</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-cyan to-transparent" />

          <div className="space-y-8 md:space-y-10">
            {schools.map((s, i) => (
              <Reveal key={s.school} delay={i * 150}>
                <div className="relative pl-6 md:pl-16">
                  <div className="absolute left-[-3.5px] md:left-[29px] top-1 w-2 h-2 rounded-full bg-accent ring-4 ring-dark-900" />

                  <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 hover:border-accent/30 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-display font-semibold text-white">
                          {s.degree}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {s.school} <span className="text-gray-600">&mdash;</span> {s.location}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-accent font-medium shrink-0 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                        {s.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {s.coursework.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium bg-dark-900 text-gray-300 rounded-md border border-dark-600"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
