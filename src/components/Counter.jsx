import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView.js'

export default function Counter({ to, duration = 1800, prefix = '', suffix = '', style, className }) {
  const [ref, inView] = useInView()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const target = parseFloat(String(to).replace(/[^0-9.]/g, ''))
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(target * ease))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView])

  return (
    <span ref={ref} style={style} className={className}>
      {prefix}{val.toLocaleString('fr-FR')}{suffix}
    </span>
  )
}
