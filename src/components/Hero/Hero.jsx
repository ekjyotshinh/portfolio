import './Hero.css'
import SectionContainer from '../Layout/SectionContainer'
function Hero() {
  return (
    <SectionContainer id="hero" className="hero-bg">
      <div className="hero-content">
        <h1>Hello, I'm <span className="highlight">Ekjyot</span></h1>
        <p>I'm a software developer passionate about building clean and scalable applications.</p>
        <a href="#projects" className="hero-btn">Resume</a> // TODO : update link to point to the resume
      </div>
    </SectionContainer>
  )
}

export default Hero
