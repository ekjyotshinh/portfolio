import "./Hero.css";
import SectionContainer from "../Layout/SectionContainer";
import { general } from "../../data/profileData";

function Hero() {
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <h1>
          Hey there 👋, I'm <span className="highlight">{general.name.split(" ")[0]}</span>
        </h1>
        <p>
          I'm a Full Stack Developer with over a year of experience building
          scalable web applications. I graduated in May 2025 with a Bachelor's
          in Computer Science from California State University. I’m also
          interested in parallel programming and exploring efficient and
          optimized solutions for complex problems.
        </p>
        <a
          href={general.resume}
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
