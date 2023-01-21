import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
  return (
    <div className='About'>
      <h1>About</h1>

      <h3>Who?</h3>
      <ul>
        <li><span></span> Born and raised in St. Louis, Missouri</li>
        <li>Grew with 9 siblings in a Russian-Ukranian family</li>
        <li>Brought up by an architect mother and a biologist father</li>
      </ul>

      <h3>What?</h3>
      <ul>
        <li>Software Developer & Instructor</li>
        <li>Graduate of LaunchCode Coding Camp in Web Development</li>
        <li>Classical opera singer & pianist</li>
      </ul>

      <h3>Why?</h3>
      <ul>
        <li>Passionate about bringing real and thoughtful experiences to people</li>
        <li>Love to teach and love to learn</li>
        <li>Next to coding are music, books, and mother nature</li>
      </ul>
    </div>
  )
}

export default About