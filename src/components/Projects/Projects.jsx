import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { projects as projectList } from "../../data/profileData";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlayCircle, FiChevronDown } from "react-icons/fi";

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const cardRefs = useRef([]);
  const expandedIndexRef = useRef(expandedIndex);

  useEffect(() => {
    expandedIndexRef.current = expandedIndex;
  }, [expandedIndex]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // triggers when card is in the center 50% of screen
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"), 10);
        if (entry.isIntersecting) {
          setExpandedIndex(index);
        } else if (expandedIndexRef.current === index) {
          setExpandedIndex(null);
        }
      });
    }, observerOptions);

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <h2 className="section-heading">Featured Projects</h2>
      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectList.map((project, index) => {
          const isExpanded = index === (clickedIndex !== null ? clickedIndex : expandedIndex);
          return (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`project-card ${isExpanded ? "is-expanded" : ""}`}
              variants={item}
              whileHover={{
                y: -4,
                transition: { duration: 0.3 },
              }}
              tabIndex={0}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
              onFocus={() => setExpandedIndex(index)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setExpandedIndex(null);
                }
              }}
              onClick={() => {
                if (clickedIndex === index) {
                  setClickedIndex(null);
                } else {
                  setClickedIndex(index);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (clickedIndex === index) {
                    setClickedIndex(null);
                  } else {
                    setClickedIndex(index);
                  }
                }
              }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <FiChevronDown className="expand-indicator" />
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    className="project-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <p className="project-description">{project.description}</p>
                    
                    <ul className="tech-list">
                      {project.tech.map((t, i) => (
                        <motion.li
                          key={i}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {t}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="project-links">
                      {project.live && (
                        <a
                          href={project.live}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink />
                          <span>Live Website</span>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="project-link"
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiPlayCircle />
                          <span>View Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

export default Projects;
