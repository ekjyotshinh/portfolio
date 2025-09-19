import "./Hero.css";
import SectionContainer from "../Layout/SectionContainer";

function Hero() {
  return (
    <SectionContainer id="hero" className="hero-bg">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Ekjyot</span>
        </h1>
        <p>
          I'm a software developer passionate about developing scalable
          applications.
        </p>
        <a
          href="https://drive.google.com/file/d/1ifi4uxJcXVwBR5o7irkyWukOUk4Jl0ZC/view?usp=drive_link"
          className="hero-btn"
          target="_blank"
          rel="noreferrer">
          View Resume
        </a>
      </div>
    </SectionContainer>
  );
}

export default Hero;
