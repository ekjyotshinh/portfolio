import SectionContainer from '../Layout/SectionContainer'
import './About.css'

function About() {
  return (
    <SectionContainer id="about">
      <h2>About Me</h2>
      <p className="about-text">
        I'm Ekjyot, a passionate software developer based in Sacramento, CA.
        I enjoy building full-stack applications and solving complex problems using clean, scalable code.
        I’m currently pursuing a B.S. in Computer Science at CSU Sacramento and love working on meaningful projects.
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

      <a href="/assets/Ekjyot_Resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </SectionContainer>
    
  )
}

export default About
