import { useState } from 'react'
import './Navbar.css'

const projects = [
  { name: 'Poker Ledger Buddy', page: 'poker-ledger' },
]

function Navbar({ onNavigate, currentPage }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      {currentPage !== 'home' && (
        <button className="nav-label home-link" onClick={() => onNavigate('home')}>
          Home
        </button>
      )}
      <div
        className="nav-item"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className={`nav-label ${open ? 'active' : ''}`}>Projects</span>
        <div className={`dropdown ${open ? 'dropdown-open' : ''}`}>
          {projects.map((project) => (
            <button
              key={project.name}
              className="dropdown-item"
              onClick={() => {
                onNavigate(project.page)
                setOpen(false)
              }}
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
