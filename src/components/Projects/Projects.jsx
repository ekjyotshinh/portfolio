import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";
import { projects as projectList } from "../../data/profileData";
import { FiGithub, FiExternalLink, FiPlayCircle, FiChevronRight } from "react-icons/fi";

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

  return (
    <div className="projects-section-container">
      <h2 className="section-heading">Featured Projects</h2>

      <div className="projects-split-layout">
        {/* Left Column: Projects List */}
        <div className="projects-list-column">
          {projectList.map((project) => {
            const isActive = activeProject?.title === project.title;
            return (
              <div
                key={project.title}
                className={`project-card-compact ${isActive ? "active" : ""}`}
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
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Project Details (Desktop only, hidden on mobile via CSS) */}
        <div className="project-details-column">
          <div className="sticky-details-panel glass-strong">
            {activeProject ? (
              <div className="details-panel-content">
                <h3 className="details-title">{activeProject.title}</h3>
                <p className="details-description">{activeProject.description}</p>
                
                <h4 className="details-section-title">Tech Stack</h4>
                <ul className="details-tech-list">
                  {activeProject.tech.map((t, i) => (
                    <li key={i}>{t}</li>
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
            ) : (
              <div className="details-placeholder">
                <p>Hover or click a project to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet Drawer */}
      {typeof document !== "undefined" && createPortal(
        <div className={`drawer-overlay-container ${mobileDrawerOpen && activeProject ? "open" : ""}`}>
          <div className="drawer-backdrop" onClick={() => setMobileDrawerOpen(false)} />
          {activeProject && (
            <div className="project-drawer">
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
                    <li key={i}>{t}</li>
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
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}

export default Projects;
