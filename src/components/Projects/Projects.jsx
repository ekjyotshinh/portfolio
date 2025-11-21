import "./Projects.css";
import { projects as projectList } from "../../data/profileData";

function Projects() {
  return (
    <>
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card" tabIndex={0}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.live && (
                <div>
                  <a
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer">
                    {project.title.includes("Extension")
                      ? "Checkout Extension →"
                      : "View Website →"}
                  </a>
                </div>
              )}
              {project.link && (
                <div>
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer">
                    View Code →
                  </a>
                </div>
              )}
              {project.demo && (
                <div>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer">
                    View Demo →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
