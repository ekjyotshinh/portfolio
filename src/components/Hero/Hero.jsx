import "./Hero.css";
import SectionContainer from "../Layout/SectionContainer";

function Hero() {
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <h1>
          Hey there 👋, I'm <span className="highlight">Ekjyot</span>
        </h1>
        <p>
          I'm a Full Stack Developer with over a year of experience building
          scalable web applications. I graduated in May 2025 with a Bachelor's
          in Computer Science from California State University. I’m also
          interested in parallel programming and high-performance computing,
          exploring efficient and optimized software design.
        </p>
        <a
          href="https://drive.google.com/file/d/1ifi4uxJcXVwBR5o7irkyWukOUk4Jl0ZC/view?usp=drive_link"
          className="hero-btn"
          target="_blank"
          rel="noreferrer">
          🚀 View Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
