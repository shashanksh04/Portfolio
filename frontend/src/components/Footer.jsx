import { useState, useEffect } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 via-cyan/30 to-transparent" />

      <div className="py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Shashank A Kumar
          </p>



          {showTop && (
            <a
              href="#hero"
              className="text-xs text-gray-500 hover:text-accent font-mono transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              back to top
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
