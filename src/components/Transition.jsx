import { useEffect, useState } from 'react'
import './Transition.css'

function Transition({ active, reverse, onComplete }) {
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    if (active) {
      if (reverse) {
        setPhase('curtain-close')
        const timer = setTimeout(() => {
          onComplete()
          setPhase('curtain-open')
        }, 700)
        const cleanup = setTimeout(() => {
          setPhase('idle')
        }, 1500)
        return () => {
          clearTimeout(timer)
          clearTimeout(cleanup)
        }
      } else {
        setPhase('expanding')
        const timer = setTimeout(() => {
          onComplete()
          setPhase('contracting')
        }, 600)
        const cleanup = setTimeout(() => {
          setPhase('idle')
        }, 1200)
        return () => {
          clearTimeout(timer)
          clearTimeout(cleanup)
        }
      }
    }
  }, [active, reverse, onComplete])

  if (phase === 'idle') return null

  if (phase === 'curtain-close' || phase === 'curtain-open') {
    return (
      <div className="curtain-container">
        <div className={`curtain curtain-left ${phase}`} />
        <div className={`curtain curtain-right ${phase}`} />
      </div>
    )
  }

  return (
    <div className={`transition-overlay ${phase}`} />
  )
}

export default Transition
