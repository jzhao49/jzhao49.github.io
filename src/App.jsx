import { useState, useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProfileImage from './components/ProfileImage'
import Introduction from './components/Introduction'
import SocialLinks from './components/SocialLinks'
import PokerLedger from './components/PokerLedger'
import Transition from './components/Transition'
import './App.css'

function getInitialPage() {
  const hash = window.location.hash.replace('#', '')
  return hash || 'home'
}

function App() {
  const [page, setPage] = useState(getInitialPage)
  const [transitioning, setTransitioning] = useState(false)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    document.body.style.background = page === 'poker-ledger' ? '#000' : ''
  }, [page])

  const navigateTo = useCallback((target) => {
    if (target === page || transitioning) return
    setNextPage(target)
    setTransitioning(true)
  }, [page, transitioning])

  const handleTransitionComplete = useCallback(() => {
    setPage(nextPage)
    setNextPage(null)
    setTransitioning(false)
    window.location.hash = nextPage === 'home' ? '' : nextPage
  }, [nextPage])

  const isReverse = nextPage === 'home'

  return (
    <div className={`container ${page === 'poker-ledger' ? 'container-dark' : ''}`}>
      <Navbar onNavigate={navigateTo} currentPage={page} />
      <Transition active={transitioning} reverse={isReverse} onComplete={handleTransitionComplete} />
      {page === 'home' && (
        <div className="content">
          <ProfileImage />
          <Introduction />
          <SocialLinks />
        </div>
      )}
      {page === 'poker-ledger' && <PokerLedger />}
    </div>
  )
}

export default App
