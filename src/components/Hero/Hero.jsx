import "./Hero.css";
import SectionContainer from "../Layout/SectionContainer";

function Hero() {
  return (
    <SectionContainer id="hero" className="hero-bg">
      <div className="hero-content">
        <h1>
          Hey there 👋, I'm <span className="highlight">Ekjyot</span>
        </h1>
        <p>
          A curious mind who loves turning coffee ☕ into clean, scalable code.
          I build full-stack apps and optimize algorithms to make software
          faster and smarter.
        </p>
        <a
          href="https://drive.google.com/file/d/1ifi4uxJcXVwBR5o7irkyWukOUk4Jl0ZC/view?usp=drive_link"
          className="hero-btn"
          target="_blank"
          rel="noreferrer">
          🚀 View Resume
        </a>
      </div>
    </SectionContainer>
  );
}

export default Hero;
