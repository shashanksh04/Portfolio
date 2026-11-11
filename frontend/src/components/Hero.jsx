import SignalStudioDemo from './SignalStudioDemo'

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
    href: 'mailto:sk367@rice.edu',
    label: 'Email',
    svg: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />,
  },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-5 md:px-10 pt-28 pb-16 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
          <p className="font-mono text-xs tracking-widest uppercase mb-4 text-accent">
            Shashank A Kumar
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.12] mb-5 text-white">
            Software Engineer building <span className="text-gradient">research platforms</span> and
            applied AI systems.
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 max-w-xl">
            Rice University MCS student developing tools for physiological signal analysis,
            real-time visualization and reliable data processing.
          </p>
          <p className="text-sm text-gray-400 font-mono mb-8">
            Houston &middot; U.S. citizen &middot; Open to opportunities
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 glow-accent"
            >
              Featured work
            </a>
            <a
              href="#/work/music-in-medicine"
              className="px-6 py-3 border border-dark-600 text-gray-200 font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              Music-in-Medicine case study
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-200 p-2 hover:bg-accent/5 rounded-lg"
                aria-label={s.label}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {s.svg}
                </svg>
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-accent font-mono transition-colors"
            >
              resume.pdf
            </a>
          </div>
        </div>

        <div className="relative">
          <SignalStudioDemo height={300} />
        </div>
      </div>
    </section>
  )
}
