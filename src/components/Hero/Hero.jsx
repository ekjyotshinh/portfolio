import "./Hero.css";
import { general } from "../../data/profileData";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const scrollToNextSection = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-bg">
        <div className="hero-content animate-hero-content">
          <p className="hero-greeting animate-hero-greeting">
            Hey there 👋, I'm
          </p>

          {/* Animated Name with Gradient */}
          <h2>
            <span className="hero-name">
              {general.name}
            </span>
          </h2>

          {/* Description */}
          <p className="hero-description animate-hero-desc">
            I'm a Full Stack Developer with 2+ years of experience building
            scalable applications. I graduated in May 2025 with a Bachelor's
            in Computer Science from California State University. I'm also
            interested in parallel programming and exploring efficient and
            optimized solutions for complex problems.
          </p>

          {/* Social Links */}
          <div className="hero-socials animate-hero-socials">
            <a
              href={general.github}
              className="hero-social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={general.linkedin}
              className="hero-social-link"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          className="scroll-indicator"
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Hero;
