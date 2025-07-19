import SectionContainer from '../Layout/SectionContainer'
import './Projects.css'

const projectList = [
  {
    title: 'ChemTrack Mobile App',
    description:
      'An inventory tracking app with QR scanning, role-based access, and push/email notifications. Built using React Native, Go, and Firestore.',
    tech: ['React Native', 'Go', 'Firestore', 'GCS', 'CI/CD', 'TypeScript'],
    link: 'https://github.com/ekjyotshinh/ChemTrack',
    demo: 'https://imgur.com/a/chemtrack-demo-h9Tlx1o'
  },

  {
    title: 'Gold Rate Website – Sarafa Association Bathinda',
    description:
      'Developed an official website for the Sarafa Association Bathinda to publish daily gold and silver rates. Features include real-time updates, admin dashboard, and archive access. Used daily by local vendors and customers.',
    tech: ['React', 'TypeScript', 'Firebase', 'GCS', 'GCR'],
    live: 'https://sarafaassociationbathinda.com/' 
  },

  {
    title: 'Redis-like Key-Value Store',
    description:
      'Built a multithreaded key-value store in Python supporting RESP protocol, key expiration, and persistent disk storage.',
    tech: ['Python', 'Sockets', 'Multithreading'],
    link: 'https://github.com/ekjyotshinh/Lightweight-Redis-clone'
  },

  {
    title: 'Youtube Filter Extension',
    description:
      'A chrome extension extension that lets you filter out unwanted videos on youtube based on Keywords, Channel names, Subscription status, Mixes or Shorts content',
    tech: ['JavaScript', 'HTML', 'CSS', 'Manifest V3'],
    live: 'https://chromewebstore.google.com/detail/youtube-filter/illdholaaiimmiikblhejpkoplibhhjo'
  },

  {
    title: 'Pharma Study Simulator',
    description:
      'Lead a team of 7 to build a secure web application to monitor patient progress and viral loads for Vendia Inc',
    tech: ['React', 'Firebase', 'Node.js', 'JavaScript'],
    link: 'https://github.com/Runtime-Terror-131/Demo'
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
            {project.live && (
              <a
                href={project.live}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                {project.title.includes('Extension') ? 'Checkout Extension →' : 'View Website →'}
              </a>
            )}

            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Code →
              </a>
            )}

            {project.demo && (
              <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                View Demo →
              </a>
            )}

          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
