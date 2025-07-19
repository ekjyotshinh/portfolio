import SectionContainer from '../Layout/SectionContainer'
import './Projects.css'

const projectList = [
  {
    title: 'ChemTrack Mobile App',
    description:
      'An inventory tracking app with QR scanning, role-based access, and push/email notifications. Built using React Native, Go, and Firestore.',
    tech: ['React Native', 'Go', 'Firestore', 'GCS', 'CI/CD'],
    link: 'https://github.com/ekjyotshinh/chemtrack'
  },
  {
    title: 'Redis-like Key-Value Store',
    description:
      'Built a multithreaded key-value store in Python supporting RESP protocol, key expiration, and persistent disk storage.',
    tech: ['Python', 'Sockets', 'Multithreading'],
    link: 'https://github.com/ekjyotshinh/redis-clone'
  },
  {
    title: 'Parallel Branch & Bound Solver',
    description:
      'Optimized load balancing for SOP in C++ using OpenMP, reducing runtime by 15% for large datasets.',
    tech: ['C++', 'OpenMP', 'Parallel Algorithms'],
    link: 'https://github.com/ekjyotshinh/parallel-sop'
  },
  {
    title: 'Secure Checkout Platform',
    description:
      'Engineered payment flow using Braintree, supporting $15K/day in transactions. Includes microservice-based queuing for email delivery.',
    tech: ['PHP', 'SQL Server', 'Braintree', 'Microservices'],
    link: 'https://github.com/ekjyotshinh/secure-checkout'
  }
]

function Projects() {
  return (
    <SectionContainer id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
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
