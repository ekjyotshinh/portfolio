export const experiences = [
  {
    role: "Software Developer (Full-Stack)",
    company: "Office of Water Programs",
    date: "Feb 2024 – Present",
    details: [
      "Engineered a secure checkout system integrating PayPal Expanded Checkout, handling $45,000+ in daily transactions, ensuring data integrity, payment compliance and automated error reporting for faster issue resolution.",
      "Designed and developed a full online course delivery platform with enrollment authorization flow, lesson level access control, user progress tracking, Amazon S3-based file retrieval, and Redis caching for low-latency content delivery.",
      "Built an emailing microservice using a queue-based architecture with deferred sending and configurable retry logic, used across four client application and multiple internal services to ensure reliable email delivery.",
      "Implemented secure JWT-based authentication, improving system security and ensuring reliable user session management.",
      "Rewrote UPS rate-fetching logic using multi-cURL parallelism, improving shipping rate retrieval speed by 75%.",
      "Maintain and enhance production system across PHP, Vue.js, Flask applications and internal microservices, contributing to continuous availability and feature expansion.",
    ],
  },
  {
    role: "Research Assistant (Algorithmic Research)",
    company: "California State University, Sacramento",
    date: "Mar 2024 – Present",
    details: [
      "Optimized load balancing in a parallel Branch & Bound algorithm for the Sequential Ordering Problem (SOP) using a custom progress-based strategy, achieving a 15% performance speedup.",
      "Leveraged Lin-Kernighan heuristic (LKH) entries for intelligent pruning, with early termination and reuse of the LKH thread within the solver, reducing execution time by 10% and improving resource utilization.",
      "Developed a progress estimation metric to evaluate task progress, enabling comparative performance analysis across runs.",
    ],
  },
  {
    role: "Student Assistant (Math Mentor & Orientation Leader)",
    company: "California State University, Sacramento",
    date: "Sept 2021 – Feb 2024",
    details: [
      "Mentored students in Linear Algebra, Calculus, and Pre-Calculus, breaking down complex concepts into clear explanations.",
      "Led orientation sessions and presentations for 600+ new students while collaborating with 30 orientation leaders to enhance student onboarding.",
    ],
  },
];

export const projects = [
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
    title: "F1 Race Visualization",
    description: "Built a full-stack F1 race replay visualization platform with telemetry streaming for past races. Frontend is a React UI that renders animated track views and interactive playback controls; a Go webserver (Gin) handles static assets and proxying; a FastAPI data server provides telemetry and race metadata. Includes real-time car positions, timeline scrubbing, and race analytics.",
    tech: ["React", "Go (Gin)", "FastAPI", "Canvas API", "Chart.js", "WebSockets"],
    live: "https://ekjyotshinh.github.io/F1/",
    link: "https://github.com/ekjyotshinh/F1"
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

export const certifications = [
  {
    name: "System Design",
    issuer: "AlgoExpert",
    date: "June 2024",
    link: "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-ffba438778",
  },
  {
    name: "Machine Learning Foundations",
    issuer: "AWS Educate",
    date: "July 2024",
    link: "https://www.credly.com/badges/f7ef7e05-b8ad-4c6c-befa-b23acf1e4119",
  },
  {
    name: "Intro to Generative AI",
    issuer: "Udacity",
    date: "August 2024",
    link: "https://www.udacity.com/certificate/e/886f9f44-56a4-11f0-b20a-231fa82c88bd",
  },
  {
    name: "Intro to Cloud Computing",
    issuer: "AWS Educate",
    date: "August 2024",
    link: "https://www.credly.com/badges/37a56fb7-856b-4b04-a804-f583f727154d/public_url",
  },
];

export const general = {
  name: "Ekjyot Shinh",
  email: "ekjyotshinh@gmail.com",
  linkedin: "https://linkedin.com/in/ekjyotshinh",
  github: "https://github.com/ekjyotshinh",
  resume:
    "https://drive.google.com/file/d/1ifi4uxJcXVwBR5o7irkyWukOUk4Jl0ZC/view?usp=drive_link",
};
