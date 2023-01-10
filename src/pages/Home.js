import './Home.css'

import Typing from '../components/Typing';

function Home() {
  const messages = ['Web Developer', 'Coding Instructor', 'Game Developer'];

  return (
    <>
        <div className='Home'>
            <h2 className='first-hero'>Hi, I'm <span>Ethan Kovalenko</span>,</h2>
            <h1 className='second-hero'><Typing messages={messages} /></h1>
        </div>

        <div className="bookmark">
            <div className="lining">
                <div className="inside">
                    <span>LaunchCode Graduate</span>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home