import { Link } from 'react-router-dom'

import gitHubLogo from '../images/github-mark-white.png'
import linkedInLogo from '../images/LI-In-Bug.png'

// Styles
import './Sidebar.css'

function Sidebar() {
  return (
    <nav className='sidebar'>
        <Link to="/">
          <div className="home">
            <span>&#1180;</span>
            <p>Full Stack Developer</p>
          </div>
        </Link>
        <hr style={{height: '10px', backgroundColor: '#BF7C34', margin: '0', border: 'none'}} />

        <div className='nav-links'>
          <Link>
            <p>About</p>
          </Link>
          <Link>
            <p>My Skills</p>
          </Link>
          <Link>
            <p>Portfolio</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>

        <div className="external-links">
          <a href="https://github.com/kovalen1618" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ethan-kovalenko-758b14208/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="" />
          </a>
        </div>
    </nav>
  )
}

export default Sidebar