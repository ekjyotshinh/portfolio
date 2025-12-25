import "./Projects.css";
import { projects as projectList } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlayCircle } from "react-icons/fi";

function Projects() {
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
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={item}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            tabIndex={0}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
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
            </div>

            <div className="project-links">
              {project.live && (
                <a
                  href={project.live}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
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
                >
                  <FiPlayCircle />
                  <span>View Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Projects;
