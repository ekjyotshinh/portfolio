import "./Projects.css";

const projectList = [
  {
    title: "ChemTrack Mobile App",
    description:
      "Led a team of 7 to develop an inventory tracking app with QR scanning, role-based access, and push/email notifications. Built with React Native, Go, and Firestore. Deployed via TestFlight for internal use.",
    tech: ["React Native", "Go", "Firestore", "GCS", "CI/CD", "TypeScript"],
    link: "https://github.com/ekjyotshinh/ekjyotshinh",
    demo: "https://imgur.com/a/chemtrack-demo-h9Tlx1o",
  },
  {
    title: "Distributed Rate Limiter & API Gateway",
    description:
      "Engineered an API Gateway in Go supporting routing, JWT authentication, request validation, and centralized logging. Developed a standalone Rate Limiter using a Redis Lua-based atomic token-bucket algorithm, enforcing per-user and per-endpoint quotas across the system.",
    tech: ["Go", "Redis", "gRPC", "Docker", "JWT"],
    link: "https://github.com/ekjyotshinh/Rate-Limiter-API-Gateway",
  },
  {
    title: "Lightweight Redis-like Key-Value Store",
    description:
      "Built a multithreaded in-memory key-value store with RESP protocol support, mutex-based thread safety, and key expiration. Added autosave/autoload for persistent storage, reducing cold start latency and ensuring data durability across server restarts.",
    tech: ["Python", "Sockets", "Multithreading", "RESP"],
    link: "https://github.com/ekjyotshinh/Lightweight-Redis-clone",
  },
  {
    title: "Gold Price Website – Sarafa Association Bathinda",
    description:
      "Developed the official website to publish daily gold/silver prices with real-time updates, admin dashboard, and archive access. Used daily by vendors and customers.",
    tech: ["React", "JavaScript", "Firebase", "GCS", "GCR"],
    live: "https://sarafaassociationbathinda.com/",
  },
  {
    title: "Programming Mentor RAG Chatbot",
    description:
      "RAG-based chatbot assisting users with programming questions using vector search and OpenAI’s models for accurate, context-aware answers.",
    tech: ["LangChain", "OpenAI API", "Vector DB"],
    link: "https://github.com/ekjyotshinh/Programming-Mentor-RAG-Chatbot/tree/main/rag-chatbot",
  },
  {
    title: "Youtube Filter Extension",
    description:
      "Chrome extension to filter unwanted YouTube videos by keywords, channels, subscriptions, mixes, or Shorts content.",
    tech: ["JavaScript", "HTML", "CSS", "Manifest V3"],
    live: "https://chromewebstore.google.com/detail/youtube-filter/illdholaaiimmiikblhejpkoplibhhjo",
    link: "https://github.com/ekjyotshinh/youtube-filter-extension",
  },
  {
    title: "CUDA-Accelerated Image Processing",
    description:
      "Implemented a tiled 2D convolution kernel in C++/CUDA using shared and constant memory for efficient RGB filtering with a 5x5 mask. Optimized memory access and execution.",
    tech: ["C++", "CUDA"],
    link: "https://github.com/ekjyotshinh/Parallel-Programming-with-GPU/tree/main/Convolution",
  },
  {
    title: "Pharma Study Simulator",
    description:
      "Led a team of 7 to build a secure full-stack web app tracking patient progress and viral loads with real-time updates and data integrity.",
    tech: ["React", "Firebase", "Node.js", "JavaScript"],
    link: "https://github.com/Runtime-Terror-131/Demo",
  },
];

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
