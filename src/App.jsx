import ProfileImage from './components/ProfileImage'
import Introduction from './components/Introduction'
import SocialLinks from './components/SocialLinks'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <Introduction />
        <ProfileImage />
        <SocialLinks />
      </div>
    </div>
  )
}

export default App
