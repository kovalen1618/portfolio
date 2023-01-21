import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Styles
import './Sidebar.css'

function Sidebar() {
  return (
    <nav className='sidebar'>
        <Link to="/">
          <div className="home-button">
            <span>&#1180;</span>
            <p>Software Developer</p>
          </div>
          <hr style={{height: '10px', backgroundColor: '#BF7C34', margin: '0', border: 'none'}} />
        </Link>

        <div className='nav-links'>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link>
            <p>My Skills</p>
          </Link>
          <Link>
            <p>Portfolio</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>

        <div className="external-links">
          <a href="https://github.com/kovalen1618" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ethan-kovalenko-758b14208/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
    </nav>
  )
}

export default Sidebar