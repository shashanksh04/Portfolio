import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    const ids = links.map((l) => l.href.slice(1))
    const onScrollActive = () => {
      const scrollY = window.scrollY + 120
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScrollActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScrollActive)
    }
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4">
        <nav
          className={`w-full max-w-2xl flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-dark-900/80 backdrop-blur-xl border-dark-600/50 shadow-lg shadow-black/30'
              : 'bg-dark-900/40 border-transparent'
          }`}
        >
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="text-lg font-display font-bold tracking-tight"
          >
            <span className="text-gradient">SA</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-accent/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <ul className="absolute top-20 left-4 right-4 max-w-2xl mx-auto flex flex-col items-center gap-2 py-4 px-4 bg-dark-900/95 backdrop-blur-xl rounded-2xl border border-dark-600/50 shadow-xl">
            {links.map((l) => (
              <li key={l.href} className="w-full">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fixed top-0 left-0 w-full z-40">
        <div className="progress-bar rounded-none">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </>
  )
}
