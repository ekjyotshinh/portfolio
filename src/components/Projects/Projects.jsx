import SectionContainer from '../Layout/SectionContainer'
import './Projects.css'

const projectList = [
  {
    title: 'ChemTrack Mobile App',
    description:
      'An inventory tracking app with QR scanning, role-based access, and push/email notifications. Built using React Native, Go, and Firestore.',
    tech: ['React Native', 'Go', 'Firestore', 'GCS', 'CI/CD', 'TypeScript','Testing'],
    link: 'https://github.com/ekjyotshinh/ChemTrack'
  },
  {
    title: 'Redis-like Key-Value Store',
    description:
      'Built a multithreaded key-value store in Python supporting RESP protocol, key expiration, and persistent disk storage.',
    tech: ['Python', 'Sockets', 'Multithreading'],
    link: 'https://github.com/ekjyotshinh/Lightweight-Redis-clone'
  },
  {
    title: 'Parallel Branch & Bound Solver',
    description:
      'Optimized load balancing for SOP in C++ using OpenMP, reducing runtime by 15% for large datasets.',
    tech: ['C++', 'Parallel Algorithms', 'Multithreading'],
    link: 'https://github.com/jacobnormington/SOP_Solver'
  },

]

function Projects() {
  return (
    <SectionContainer id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card" tabIndex={0}>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
              View Code →
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
