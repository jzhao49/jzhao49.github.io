import { useState, useEffect, useRef, useCallback } from 'react'
import './ProfileImage.css'

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

const COLORS = ['#ff4444', '#ffdd44', '#44bbff', '#ff44dd', '#44ff88', '#ffaa22', '#aa66ff']

function createParticle() {
  return {
    id: Math.random(),
    x: randomBetween(5, 95),
    y: randomBetween(5, 95),
    particles: Array.from({ length: 18 }, () => ({
      angle: randomBetween(0, 360),
      distance: randomBetween(30, 120),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(3, 7),
      delay: randomBetween(0, 0.15),
    })),
  }
}

function ProfileImage() {
  const [hovering, setHovering] = useState(false)
  const [fireworks, setFireworks] = useState([])
  const intervalRef = useRef(null)

  const startFireworks = useCallback(() => {
    setHovering(true)
    setFireworks([createParticle(), createParticle(), createParticle()])
    intervalRef.current = setInterval(() => {
      setFireworks((prev) => {
        const next = [...prev, createParticle(), createParticle()]
        if (next.length > 30) next.splice(0, 2)
        return next
      })
    }, 150)
  }, [])

  const stopFireworks = useCallback(() => {
    setHovering(false)
    clearInterval(intervalRef.current)
    setFireworks([])
  }, [])

  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div
      className="profile-image-wrapper"
      onMouseEnter={startFireworks}
      onMouseLeave={stopFireworks}
    >
      {hovering && (
        <div className="fireworks-container">
          {fireworks.map((fw) => (
            <div
              key={fw.id}
              className="firework"
              style={{ left: `${fw.x}%`, top: `${fw.y}%` }}
            >
              {fw.particles.map((p, i) => (
                <span
                  key={i}
                  className="spark"
                  style={{
                    '--angle': `${p.angle}deg`,
                    '--distance': `${p.distance}px`,
                    '--color': p.color,
                    '--size': `${p.size}px`,
                    '--delay': `${p.delay}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
      <img
        className="profile-image"
        src="/images/Headshot.jpeg"
        alt="Justin Zhao"
      />
    </div>
  )
}

export default ProfileImage
