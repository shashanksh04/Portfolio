import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './pages/CaseStudy'

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${(i * 6.8 + 2) % 100}%`,
  animationDelay: `${i * 2.1}s`,
  animationDuration: `${22 + (i % 6) * 3}s`,
  width: `${1 + (i % 2)}px`,
  height: `${1 + (i % 2)}px`,
}))

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-animated" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute -top-[20%] -left-[10%] w-[60vmax] h-[60vmax] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 60%)' }} />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60vmax] h-[60vmax] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 60%)' }} />
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10px',
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: p.width,
            height: p.height,
            background: ['#7C3AED', '#22D3EE', '#A78BFA'][p.id % 3],
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const hash = useHashRoute()
  const isCaseStudy = hash.startsWith('#/work/')

  useEffect(() => {
    if (isCaseStudy) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash && !hash.startsWith('#/') ? hash.slice(1) : ''
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView()
    }
  }, [hash, isCaseStudy])

  if (isCaseStudy) {
    return (
      <div className="relative min-h-screen bg-dark-900">
        <Background />
        <div className="relative z-10">
          <CaseStudy />
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-dark-900">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <About />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <Projects />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <Experience />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <Skills />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <Education />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
