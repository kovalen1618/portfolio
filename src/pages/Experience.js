// TODO: Make an experience page detailing all of your work experience with lite tabs to examine different jobs in detail and a scroll feature to go through them
import './Experience.css';

function Experience() {
  return (
    <div className='Experience'>
        <div className="tabs">
          <button>The Coder School</button>
          <button>Mastery Coding</button>
        </div>

        {/* // TODO: These are just placeholders, they will be put into a Firebase database for dynamic edits */}
        <div className="work">
          <div>
            <h2>The Coder School</h2>
            <h3>Coding Instructor</h3>
            <h4>August 2020 - March 2022</h4>
            <p>
              Taught children ages seven to eighteen relevant skills in coding with languages such as Python, JavaScript, and C# in order to help them build their futures in technology
            </p>
          </div>
          <div>
            <h2>Mastery Coding</h2>
            <h3>Coding Instructor / Curriculum Developer</h3>
            <h4>November 2021 - February 2023</h4>
            <p>
              Give large virtual lectures to students grades 5 to 12 teaching them fundamental web and game development skills using HTML, CSS, JavaScript and the p5.js library
            </p>
          </div>
        </div>
    </div>
  )
}

export default Experience