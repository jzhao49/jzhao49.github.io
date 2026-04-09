import { useEffect, useState } from 'react'
import './Transition.css'

function Transition({ active, reverse, onComplete }) {
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    if (active) {
      setPhase(reverse ? 'contracting-in' : 'expanding')
      const timer = setTimeout(() => {
        onComplete()
        setPhase(reverse ? 'expanding-out' : 'contracting')
      }, 600)
      const cleanup = setTimeout(() => {
        setPhase('idle')
      }, 1200)
      return () => {
        clearTimeout(timer)
        clearTimeout(cleanup)
      }
    }
  }, [active, reverse, onComplete])

  if (phase === 'idle') return null

  return (
    <div className={`transition-overlay ${phase}`} />
  )
}

export default Transition
