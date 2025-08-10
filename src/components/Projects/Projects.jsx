import SectionContainer from '../Layout/SectionContainer'
import './Projects.css'

const projectList = [
  {
    title: 'ChemTrack Mobile App',
    description:
      'Let a team of 7 to develop an inventory tracking app with QR scanning, role-based access, and push & email notifications. Built using React Native, Go, and Firestore. Currently Deployed via testflight to internal users.',
    tech: ['React Native', 'Go', 'Firestore', 'GCS', 'CI/CD', 'TypeScript'],
    link: 'https://github.com/ekjyotshinh/ChemTrack',
    demo: 'https://imgur.com/a/chemtrack-demo-h9Tlx1o'
  },

  {
    title: 'Gold Price Website – Sarafa Association Bathinda',
    description:
      'Developed the official website for the Sarafa Association Bathinda to publish daily gold and silver prices. Features include real-time updates, admin dashboard, and archive access. Used daily by local vendors and customers.',
    tech: ['React', 'JavaScript', 'Firebase', 'GCS', 'GCR'],
    live: 'https://sarafaassociationbathinda.com/' 
  },

  {
    title: 'Programming Mentor RAG Chatbot',
    description:
      'A Retrieval-Augmented Generation (RAG) based chatbot designed to help users with programming questions by leveraging vector search and OpenAI’s language models for accurate, context-aware answers.',
    tech: ['LangChain', 'OpenAI API', 'Vector DB'],
    link: 'https://github.com/ekjyotshinh/Programming-Mentor-RAG-Chatbot/tree/main/rag-chatbot'
  },

  {
    title: 'Youtube Filter Extension',
    description:
      'A chrome extension extension that lets you filter out unwanted videos on youtube based on Keywords, Channel names, Subscription status, Mixes or Shorts content',
    tech: ['JavaScript', 'HTML', 'CSS', 'Manifest V3'],
    live: 'https://chromewebstore.google.com/detail/youtube-filter/illdholaaiimmiikblhejpkoplibhhjo',
    link: 'https://github.com/ekjyotshinh/youtube-filter-extension'
  },

  {
    title: 'Redis-like Key-Value Store',
    description:
      'Built a multithreaded key-value store in Python supporting RESP protocol, key expiration, and persistent disk storage. Addead a autosave mechanism to preiodically write active keys to disk and a autoload system to recuce cold starts.',
    tech: ['Python', 'Sockets', 'Multithreading'],
    link: 'https://github.com/ekjyotshinh/Lightweight-Redis-clone'
  },

  {
    title: 'Pharma Study Simulator',
    description:
      'Led a team of 7 to build a secure full-stack web app monitoring patient progress and viral loads with real-time updates and data integrity.',
    tech: ['React', 'Firebase', 'Node.js', 'JavaScript'],
    link: 'https://github.com/Runtime-Terror-131/Demo'
  }

]

function Projects() {
  return (
    <SectionContainer id="projects">
      <h2 className="projects-heading">Projects</h2>
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
                    rel="noreferrer"
                  >
                    {project.title.includes('Extension') ? 'Checkout Extension →' : 'View Website →'}
                  </a>
                </div>
              )}
              {project.link && (
                <div>
                  <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                    View Code →
                  </a>
                </div>
              )}
              {project.demo && (
                <div>
                  <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                    View Demo →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
