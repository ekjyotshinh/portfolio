import SectionContainer from '../Layout/SectionContainer'
import './About.css'

function About() {
  return (
    <SectionContainer id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I'm Ekjyot Singh Shinh, a motivated Computer Science graduate from California State University, Sacramento, 
          with a 3.96 GPA. I specialize in full-stack development, algorithms, and scalable software solutions.
          Passionate about building efficient applications, I have hands-on experience in diverse projects and roles.
        </p>

        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Go</li>
            <li>C++</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Linux</li>
          </ul>
        </div>

      </div>
    </SectionContainer>
  )
}

export default About
