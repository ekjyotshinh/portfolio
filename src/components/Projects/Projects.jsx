import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";
import { projects as projectList } from "../../data/profileData";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlayCircle, FiChevronRight, FiX } from "react-icons/fi";

function Projects() {
  const [activeProject, setActiveProject] = useState(projectList[0] || null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);




  // Escape key support to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCardClick = (project) => {
    setActiveProject(project);
    setMobileDrawerOpen(true);
  };

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="projects-section-container">
      <h2 className="section-heading">Featured Projects</h2>

      <div className="projects-split-layout">
        {/* Left Column: Projects List */}
        <motion.div
          className="projects-list-column"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectList.map((project) => {
            const isActive = activeProject?.title === project.title;
            return (
              <motion.div
                key={project.title}
                className={`project-card-compact ${isActive ? "active" : ""}`}
                variants={item}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                tabIndex={0}
                onClick={() => handleCardClick(project)}
                onMouseEnter={() => {
                  // Only auto-update the active project on hover on desktop screens
                  if (window.innerWidth > 768) {
                    setActiveProject(project);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(project);
                  }
                }}
              >
                <div className="project-card-compact-header">
                  <h3>{project.title}</h3>
                  <FiChevronRight className={`indicator-arrow ${isActive ? "active" : ""}`} />
                </div>
                <p className="project-card-compact-preview">
                  {project.description.slice(0, 85)}...
                </p>
                <ul className="project-card-compact-tech">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                  {project.tech.length > 3 && (
                    <li className="tech-more">+{project.tech.length - 3}</li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Column: Sticky Project Details (Desktop only, hidden on mobile via CSS) */}
        <div className="project-details-column">
          <div className="sticky-details-panel glass-strong">
            <AnimatePresence mode="wait">
              {activeProject ? (
                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="details-panel-content"
                >
                  <h3 className="details-title">{activeProject.title}</h3>
                  <p className="details-description">{activeProject.description}</p>
                  
                  <h4 className="details-section-title">Tech Stack</h4>
                  <ul className="details-tech-list">
                    {activeProject.tech.map((t, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>

                  <h4 className="details-section-title">Links</h4>
                  <div className="details-links">
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink />
                        <span>Live Website</span>
                      </a>
                    )}
                    {activeProject.link && (
                      <a
                        href={activeProject.link}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiPlayCircle />
                        <span>View Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="details-placeholder">
                  <p>Hover or click a project to view details.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet Drawer */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {mobileDrawerOpen && activeProject && (
            <div className="drawer-overlay-container">
              <motion.div
                className="drawer-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileDrawerOpen(false)}
              />
              <motion.div
                className="project-drawer"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <button
                  className="drawer-close-btn"
                  onClick={() => setMobileDrawerOpen(false)}
                  aria-label="Close details"
                >
                  <span />
                  <span />
                  <span />
                </button>

                <div className="drawer-content">
                  <h3 className="details-title">{activeProject.title}</h3>
                  <p className="details-description">{activeProject.description}</p>
                  
                  <h4 className="details-section-title">Tech Stack</h4>
                  <ul className="details-tech-list">
                    {activeProject.tech.map((t, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t}
                      </motion.li>
                    ))}
                  </ul>

                  <h4 className="details-section-title">Links</h4>
                  <div className="details-links">
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink />
                        <span>Live Website</span>
                      </a>
                    )}
                    {activeProject.link && (
                      <a
                        href={activeProject.link}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                    {activeProject.demo && (
                      <a
                        href={activeProject.demo}
                        className="details-link-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiPlayCircle />
                        <span>View Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

export default Projects;
