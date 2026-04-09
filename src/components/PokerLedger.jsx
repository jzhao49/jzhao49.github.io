import { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'
import './PokerLedger.css'

const screenshots = [
  {
    src: '/images/IMG_4308.PNG',
    alt: 'Sessions list',
    title: 'Session Dashboard',
    description:
      'View all your poker sessions at a glance. Sort by date or name, filter by players, and see session status, player count, and duration. Create new sessions with one tap.',
  },
  {
    src: '/images/IMG_4304.PNG',
    alt: 'Session detail',
    title: 'Live Session Tracking',
    description:
      'Track buy-ins and cash-outs in real time. Add players on the fly, adjust buy-ins with re-buys, and watch net profit update instantly. Each player card shows their current standing.',
  },
  {
    src: '/images/IMG_4327.PNG',
    alt: 'Venmo settlement',
    title: 'Venmo Settlement',
    description:
      'Once the books are balanced, settle up instantly. Winners get paid and losers get charged — all with one-tap Venmo deep links pre-filled with the exact amount and session name.',
  },
  {
    src: '/images/IMG_4305.PNG',
    alt: 'Auto-balance',
    title: 'Smart Auto-Balancing',
    description:
      'When the books don\'t quite add up, the auto-balance feature fairly distributes rounding differences across all players. Preview every adjustment before applying, and revert anytime.',
  },
  {
    src: '/images/IMG_4306.PNG',
    alt: 'Player history',
    title: 'Player Leaderboard',
    description:
      'See cumulative profit and loss for every player across all sessions. Sort by name or P&L to find out who\'s up and who\'s down. Rename players and track session counts.',
  },
  {
    src: '/images/IMG_4307.PNG',
    alt: 'Player detail chart',
    title: 'Performance Charts',
    description:
      'Dive into individual player stats with interactive cumulative P&L charts. Green segments show winning streaks, red shows losses. Every session broken down below with buy-in, cash-out, and net.',
  },
]

const features = [
  { icon: '♠', title: 'Real-Time Tracking', desc: 'Buy-ins, cash-outs, and net profit updated live as the game unfolds.', screenshotIndex: 1 },
  { icon: '♥', title: 'Venmo Settlement', desc: 'One-tap Venmo deep links to settle up instantly when the session ends.', screenshotIndex: 2 },
  { icon: '♣', title: 'Auto-Balance', desc: 'Smart rounding algorithm ensures the books always balance to the penny.', screenshotIndex: 3 },
  { icon: '♦', title: 'Player Analytics', desc: 'Cumulative P&L charts and per-session breakdowns for every player.', screenshotIndex: 5 },
]

function PokerLedger() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <div className="poker-ledger">
      <div className="chip-cluster chip-cluster-tl">
        <div className="chip chip-red" style={{ top: 5, left: 10, transform: 'rotate(-12deg)' }} />
        <div className="chip chip-white" style={{ top: -15, left: 50, transform: 'rotate(25deg)' }} />
        <div className="chip chip-blue" style={{ top: 40, left: -10, transform: 'rotate(-35deg)' }} />
        <div className="chip chip-green" style={{ top: 60, left: 65, transform: 'rotate(8deg)' }} />
        <div className="chip chip-red" style={{ top: -5, left: -30, transform: 'rotate(40deg)' }} />
      </div>
      <div className="chip-cluster chip-cluster-tr">
        <div className="chip chip-blue" style={{ top: 10, right: 15, transform: 'rotate(18deg)' }} />
        <div className="chip chip-green" style={{ top: -10, right: 55, transform: 'rotate(-30deg)' }} />
        <div className="chip chip-white" style={{ top: 50, right: -5, transform: 'rotate(42deg)' }} />
        <div className="chip chip-red" style={{ top: 35, right: 70, transform: 'rotate(-15deg)' }} />
        <div className="chip chip-blue" style={{ top: 70, right: 40, transform: 'rotate(5deg)' }} />
      </div>
      <div className="chip-cluster chip-cluster-bl">
        <div className="chip chip-green" style={{ bottom: 10, left: 20, transform: 'rotate(22deg)' }} />
        <div className="chip chip-white" style={{ bottom: -10, left: -15, transform: 'rotate(-18deg)' }} />
        <div className="chip chip-red" style={{ bottom: 45, left: 50, transform: 'rotate(35deg)' }} />
        <div className="chip chip-blue" style={{ bottom: 65, left: -5, transform: 'rotate(-8deg)' }} />
        <div className="chip chip-green" style={{ bottom: 20, left: 75, transform: 'rotate(-40deg)' }} />
      </div>
      <div className="chip-cluster chip-cluster-br">
        <div className="chip chip-white" style={{ bottom: 5, right: 10, transform: 'rotate(-20deg)' }} />
        <div className="chip chip-red" style={{ bottom: -15, right: 60, transform: 'rotate(30deg)' }} />
        <div className="chip chip-green" style={{ bottom: 40, right: -10, transform: 'rotate(-5deg)' }} />
        <div className="chip chip-blue" style={{ bottom: 55, right: 50, transform: 'rotate(38deg)' }} />
        <div className="chip chip-white" style={{ bottom: 75, right: 25, transform: 'rotate(-28deg)' }} />
      </div>
      <section className="poker-hero">
        <h1 className="poker-ledger-title">Poker Ledger Buddy</h1>
        <p className="poker-subtitle">
          The complete poker night companion. Track sessions, balance the books,
          and settle up with Venmo — all from your phone.
        </p>
        <div className="poker-cta-group">
          <a
            href="https://poker-ledger-webapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="poker-cta"
          >
            <FiGlobe className="cta-icon" />
            Web
          </a>
          <button className="poker-cta poker-cta-disabled">
            <FaApple className="cta-icon" />
            iOS
          </button>
        </div>
      </section>

      <section className="poker-features">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card"
            onClick={() => {
              setActiveScreenshot(feature.screenshotIndex)
              document.querySelector('.poker-gallery')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="poker-gallery">
        <h2 className="gallery-heading">See It in Action</h2>
        <div className="gallery-content">
          <div className="gallery-phone">
            <div className="phone-frame">
              <img
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                className="phone-screenshot"
              />
            </div>
          </div>
          <div className="gallery-info">
            <h3 className="gallery-info-title">
              {screenshots[activeScreenshot].title}
            </h3>
            <p className="gallery-info-desc">
              {screenshots[activeScreenshot].description}
            </p>
            <div className="gallery-nav">
              <button
                className="gallery-arrow"
                onClick={() => setActiveScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
                aria-label="Previous screenshot"
              >
                &#8249;
              </button>
              <div className="gallery-dots">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    className={`gallery-dot ${i === activeScreenshot ? 'active' : ''}`}
                    onClick={() => setActiveScreenshot(i)}
                    aria-label={`View screenshot ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="gallery-arrow"
                onClick={() => setActiveScreenshot((prev) => (prev + 1) % screenshots.length)}
                aria-label="Next screenshot"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PokerLedger
