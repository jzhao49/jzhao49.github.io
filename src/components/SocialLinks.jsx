import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import './SocialLinks.css'

const links = [
  {
    href: 'mailto:justinzhao2013@gmail.com',
    icon: <FiMail />,
    label: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/jzhao49/',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/jzhao49',
    icon: <FaGithub />,
    label: 'GitHub',
  },
]

function SocialLinks() {
  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="social-link"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
