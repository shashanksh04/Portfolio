import { useState } from 'react'
import Reveal from './Reveal'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const contactInfo = [
  { label: 'Phone', value: '+91 9865224126', href: 'tel:+919865224126' },
  { label: 'Email', value: 'shashanksh2504@gmail.com', href: 'mailto:shashanksh2504@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shashankkumar029', href: 'https://linkedin.com/in/shashankkumar029' },
  { label: 'GitHub', value: 'github.com/shashanksh04', href: 'https://github.com/shashanksh04' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Could not send message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            06.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 md:mb-14">
            Contact<span className="text-accent">/</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-5 md:p-6 mb-6">
              <p className="text-xs font-mono text-accent tracking-wider mb-4">
                {/* Comment intentionally left */}
                const contactInfo = &#123;
              </p>
              <ul className="space-y-4">
                {contactInfo.map((c) => (
                  <li key={c.label} className="group">
                    <span className="text-[10px] font-mono text-gray-500 block mb-0.5">
                      // {c.label}
                    </span>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-gray-300 hover:text-accent transition-colors break-all flex items-center gap-2"
                    >
                      <span className="text-accent/50 group-hover:text-accent transition-colors">$</span>
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono text-gray-500 mt-4">&#125;</p>
            </div>

            <div className="hidden md:block bg-dark-800/50 border border-dark-700 rounded-xl p-4 font-mono text-[11px] leading-relaxed">
              <p className="text-gray-600 mb-2">{'/*'}</p>
              <p className="text-gray-600 ml-2">{'* Let\'s build something'}</p>
              <p className="text-gray-600 ml-2">{'* amazing together'}</p>
              <p className="text-gray-600 ml-2">{'*/'}</p>
              <p className="text-accent mt-2">{'function collaborate() {'}</p>
              <p className="text-gray-400 ml-4">{'return "hello@shashank.dev";'}</p>
              <p className="text-accent">{'}'}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-xl text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent transition-all duration-300 group-hover:border-dark-500"
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-cyan scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-xl text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent transition-all duration-300 group-hover:border-dark-500"
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-cyan scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-dark-800 border border-dark-600 rounded-xl text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-accent transition-all duration-300 group-hover:border-dark-500 resize-none"
                  />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-cyan scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>

                {error && (
                  <p className="text-red-400 text-sm font-mono flex items-center gap-2">
                    <span>✕</span> {error}
                  </p>
                )}
                {sent && (
                  <p className="text-green-400 text-sm font-mono flex items-center gap-2">
                    <span>✓</span> Message sent successfully!
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 glow-accent font-display"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
