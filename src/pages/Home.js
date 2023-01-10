import './Home.css'

import Typing from '../components/Typing';

function Home() {
  const messages = ['Web Developer', 'Coding Instructor', 'Game Developer'];

  return (
    <div className='Home'>
        <h1>
            <Typing messages={messages} />
        </h1>
    </div>
  );
}

export default Home