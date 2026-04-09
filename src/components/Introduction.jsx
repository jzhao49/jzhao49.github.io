import { useState } from 'react'
import './Introduction.css'

const nameText = 'Justin Zhao'

function Introduction() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="introduction">
      <h1 className="name">
        {nameText.split('').map((char, i) => (
          <span
            key={i}
            className={`name-letter ${hoveredIndex === i ? 'ripple' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <p className="bio">
        I am currently a Senior Software Engineer at{' '}
        <a href="https://eliseai.com/" target="_blank" rel="noopener noreferrer">
          EliseAI
        </a>
        , previously working in quant trading at Five Rings. I graduated from
        Johns Hopkins University in 2023 with a BS in Computer Science and a
        double major in Applied Mathematics and Statistics as well as MSE in
        Computer Science.
      </p>
    </div>
  )
}

export default Introduction
