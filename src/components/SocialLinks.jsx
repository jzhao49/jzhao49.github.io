import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import './SocialLinks.css'

const links = [
  {
    href: 'mailto:justinzhao2013@gmail.com',
    icon: <FiMail />,
    label: 'Email',
    tooltip: 'Who even uses this anymore? (Email)',
  },
  {
    href: 'https://www.linkedin.com/in/jzhao49/',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    tooltip: 'LARP-ing to the max (LinkedIn)',
  },
  {
    href: 'https://github.com/jzhao49',
    icon: <FaGithub />,
    label: 'GitHub',
    tooltip: 'Beep boop (GitHub)',
  },
  {
    href: '/data/JDZ_Resume_20260409.pdf',
    icon: <HiOutlineDocumentText />,
    label: 'Resume',
    tooltip: 'My professional life on a single PDF (Resume)',
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
          <span className="social-tooltip">{link.tooltip}</span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
