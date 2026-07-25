import useInView from '../hooks/useInView'

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView(0.1)

  const dirClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${dirClasses[direction] || dirClasses.up}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
