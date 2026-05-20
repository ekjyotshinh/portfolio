import { lazy, Suspense } from "react";
import "./Hero.css";
import { general } from "../../data/profileData";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";

const TypeAnimation = lazy(() =>
  import("react-type-animation").then((mod) => ({ default: mod.TypeAnimation }))
);

function Hero() {
  const scrollToNextSection = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-bg">
        {/* Animated Background Shapes */}
        <div className="hero-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting with subtle animation */}
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hey there 👋, I'm
            </motion.p>

            {/* Animated Name with Gradient */}
            <h1>
              <span className="hero-name gradient-text">
                {general.name}
              </span>
            </h1>

            {/* Typing Animation for Role */}
            <div className="hero-role">
              <Suspense fallback={<span className="typing-text">Full Stack Developer</span>}>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Tech Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="typing-text"
                />
              </Suspense>
            </div>

            {/* Description */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I'm a Full Stack Developer with 2+ year of experience building
              scalable applications. I graduated in May 2025 with a Bachelor's
              in Computer Science from California State University. I'm also
              interested in parallel programming and exploring efficient and
              optimized solutions for complex problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a
                href={general.resume}
                className="hero-btn hero-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <span>View Resume</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L8 11M8 11L12 7M8 11L4 7M1 15L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#contact" className="hero-btn hero-btn-secondary">
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
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
              <a
                href={general.resume}
                className="hero-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <FaFileAlt />
              </a>
            </motion.div>
          </motion.div>
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
