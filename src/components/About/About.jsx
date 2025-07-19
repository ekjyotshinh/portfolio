import SectionContainer from '../Layout/SectionContainer'
import './About.css'

function About() {
  return (
    <SectionContainer id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I'm Ekjyot Singh Shinh, a driven Computer Science graduate from California State University, Sacramento, 
          graduating with a 3.96 GPA. I specialize in full-stack development, algorithm design, and building scalable software solutions.
          With a passion for crafting efficient and maintainable applications, I’ve contributed to a range of impactful projects across multiple domains.
          I’m eager to apply my skills to create innovative and reliable technology that makes a difference.
        </p>
      </div>
    </SectionContainer>
  )
}

export default About
