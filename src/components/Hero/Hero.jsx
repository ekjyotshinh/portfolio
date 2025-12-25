import "./Hero.css";
import { general } from "../../data/profileData";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  const scrollToNextSection = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-bg">
        {/* Animated Background Shapes */}
        <div className="hero-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Software Engineer",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
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
              in Computer Science from California State University. I’m also
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
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
