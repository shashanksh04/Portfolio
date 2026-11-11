const socialLinks = [
  {
    href: 'https://github.com/shashanksh04',
    label: 'GitHub',
    svg: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />,
  },
  {
    href: 'https://linkedin.com/in/shashankkumar029',
    label: 'LinkedIn',
    svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  },
  {
    href: 'mailto:shashank7.cs@gmail.com',
    label: 'Email',
    svg: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />,
  },
]

const terminalLines = [
  { prefix: '$', text: 'npm run dev', color: 'text-cyan-DEFAULT' },
  { prefix: '>', text: 'shashank-ai-engineer@1.0.0 dev', color: 'text-gray-500' },
  { prefix: '>', text: 'vite', color: 'text-gray-500' },
  { prefix: '', text: '', color: '' },
  { prefix: '✓', text: 'ready in 312ms', color: 'text-green-400' },
  { prefix: '', text: '', color: '' },
  { prefix: '➜', text: 'Local:   http://localhost:5173/', color: 'text-cyan-DEFAULT' },
  { prefix: '➜', text: 'Network: http://192.168.1.100:5173/', color: 'text-gray-400' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-5 md:px-10 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative">
          <p className="text-accent font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow inline-block" />
            AI & Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-4">
            <span className="text-white">Shashank</span>
            <br />
            <span className="text-gradient">A Kumar</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6 max-w-lg">
            US Citizen &mdash; Rice MCS building research data platforms,
            EEG processing pipelines, and full-stack AI systems.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 glow-accent"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-dark-600 text-gray-200 font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              Resume
            </a>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/5 rounded-lg"
                aria-label={s.label}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="bg-dark-800/80 border border-dark-600/50 rounded-xl overflow-hidden shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-dark-600/50">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-gray-500 font-mono">terminal — portfolio</span>
            </div>
            <div className="p-4 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <p key={i} className={`${line.color} ${line.prefix ? 'flex gap-2' : ''}`}>
                  {line.prefix && (
                    <span className="text-accent shrink-0">{line.prefix}</span>
                  )}
                  <span className={line.prefix === '' ? 'block h-3' : ''}>
                    {line.text}
                    {i === 6 && (
                      <span className="inline-block w-2 h-4 bg-accent ml-0.5 animate-blink" />
                    )}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
