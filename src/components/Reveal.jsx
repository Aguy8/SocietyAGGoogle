import useInView from '../hooks/useInView.js'

export default function Reveal({ children, className = '', direction = 'up', delay = 0, style }) {
  const [ref, inView] = useInView()
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal'
  return (
    <div
      ref={ref}
      className={`${dirClass}${inView ? ' revealed' : ''} ${className}`}
      style={{ transitionDelay: delay + 'ms', ...style }}
    >
      {children}
    </div>
  )
}
