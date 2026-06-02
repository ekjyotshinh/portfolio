#set page(
  paper: "us-letter",
  margin: (x: 0.5in, y: 0.5in),
)
#set text(
  font: "Liberation Sans",
  size: 10pt,
)
#set par(justify: true)

// Custom styles
#let section(title) = {
  v(8pt)
  block(width: 100%, stroke: (bottom: 0.5pt + gray))[
    #text(weight: "bold", size: 11pt, tracking: 1pt, upper(title))
  ]
  v(2pt)
}

#let entry(
  title: "",
  right-title: "",
  subtitle: "",
  right-subtitle: "",
  description: [],
) = {
  block(width: 100%)[
    #grid(
      columns: (1fr, auto),
      strong(title),
      right-title
    )
    #if subtitle != "" or right-subtitle != "" {
      v(-4pt)
      grid(
        columns: (1fr, auto),
        emph(subtitle),
        emph(right-subtitle)
      )
    }
    #if description != [] {
      v(-4pt)
      description
    }
  ]
}

// ----------HEADING----------
#align(center)[
  #block(text(weight: "bold", size: 18pt)[Ekjyot Singh Shinh])
  #v(-4pt)
  #text(size: 9.5pt)[
    #link("https://linkedin.com/in/ekjyotshinh")[linkedin.com/in/ekjyotshinh] |
    #link("https://github.com/ekjyotshinh")[GitHub] |
    #link("https://ekjyotshinh.github.io")[Portfolio] |
    Sacramento, CA
  ]
]

// -----------EDUCATION-----------
#section("Education")

#entry(
  title: "California State University, Sacramento",
  right-title: "Aug 2021 -- May 2025",
  subtitle: "Bachelor of Science in Computer Science; GPA: 3.92/4.00",
)

#v(-4pt)
#list(
  tight: true,
  [ *Relevant Coursework:* Advanced Data Structures & Algorithms, Parallel Programming (GPUs-CUDA), Advanced Database Management, Software Development, Operating Systems, Object-Oriented Programming, Computer Architecture ],
  [ *Certifications:* System Design (AlgoExpert), Machine Learning (AWS), Intro to Cloud (AWS), Intro to Generative AI (Udacity) ]
)

// -----------EXPERIENCE-----------
#section("Experience")

#entry(
  title: "Software Developer",
  right-title: "Feb 2024 -- Current",
  subtitle: "Office of Water Programs",
  right-subtitle: "Sacramento, CA",
  description: list(
    [ Engineered a secure checkout system integrating PayPal Expanded Checkout, handling \$45,000+ in daily transactions, ensuring data integrity, payment compliance and automated error reporting for faster issue resolution. ],
    [ Designed and developed a full online course delivery platform with enrollment authorization flow, lesson level access control, user progress tracking, Amazon S3-based file retrieval, and Redis caching for low-latency content delivery. ],
    [ Built an emailing microservice using a queue-based architecture with deferred sending and configurable retry logic, used across four client applications and multiple internal services to ensure reliable email delivery. ],
    [ Implemented secure JWT-based authentication, improving system security and ensuring reliable user session management. ],
    [ Rewrote UPS rate-fetching logic using multi-cURL parallelism, improving shipping rate retrieval speed by 75%. ],
    [ Maintain and enhance production systems across PHP, Vue.js, Flask applications and internal microservices, contributing to continuous availability and feature expansion. ]
  )
)

#v(4pt)
#entry(
  title: "Research Assistant",
  right-title: "Mar 2024 -- Current",
  subtitle: "California State University, Sacramento",
  right-subtitle: "Sacramento, CA",
  description: list(
    [ Optimized load balancing in a parallel Branch and Bound algorithm for the Sequential Ordering Problem (SOP) using a custom progress-based strategy, achieving a 15% performance speedup. ],
    [ Leveraged Lin-Kernighan heuristic (LKH) entries for intelligent pruning, with early termination and reuse of the LKH thread within the solver, reducing execution time by 10% and improving resource utilization. ],
    [ Developed a progress estimation metric to evaluate task progress, enabling comparative performance analysis across runs. ]
  )
)

#v(4pt)
#entry(
  title: "Student Assistant (Math Mentor, Orientation Leader and Peer Mentor)",
  right-title: "Sept 2021 -- Feb 2024",
  subtitle: "California State University, Sacramento",
  right-subtitle: "Sacramento, CA",
  description: list(
    [ Mentored students in Linear Algebra, Calculus, and Pre-Calculus, breaking down complex concepts into clear explanations. ],
    [ Successfully led orientation sessions and presentations for 600+ new students while collaborating with 30 orientation leaders. ]
  )
)

// -----------PROJECTS-----------
#section("Projects")

#entry(
  title: "ChemTrack Mobile Application",
  right-title: link("https://github.com/ekjyotshinh/ChemTrack")[GitHub],
  subtitle: "TypeScript, React Native, Go, Firestore, GCS, GCR",
  description: list(
    [ Led the development of a chemical inventory app for Encina High School, enabling accurate management of 500+ chemicals. ],
    [ Built a 3-tier RBAC model (Master/Admin/View), ensuring strong access boundaries and preventing unauthorized modification. ],
    [ Integrated Google Cloud Storage for storing and retrieving Safety Data Sheets, ensuring rapid access during emergencies. ],
    [ Incorporated QR code scanning to instantly fetch chemical metadata, reducing manual lookup time by an estimated 90%. ],
    [ Implemented infinite scrolling using query pagination with Firestore cursor, reducing DB reads and improving UI performance. ],
    [ Set up a CI pipeline using GitHub Actions, automating test workflows and reducing manual QA efforts by 40%. ]
  )
)

#v(4pt)
#entry(
  title: "Distributed Rate Limiter & API Gateway",
  right-title: link("https://github.com/ekjyotshinh/Rate-Limiter-API-Gateway")[GitHub],
  subtitle: "Go, Redis, gRPC",
  description: list(
    [ Engineered an API Gateway in Go supporting routing, JWT authentication, request validation, and centralized logging. ],
    [ Developed a standalone Rate Limiter using a Redis Lua-based atomic token-bucket algorithm, enforcing per-user and per-endpoint quotas across the system. ],
    [ Designed the architecture with gRPC based communication, Docker based deployment, and Redis backed state sharing to ensure consistent rate limiting across horizontally scaled API Gateway instances. ]
  )
)

#v(4pt)
#entry(
  title: "Lightweight Redis-like Key-Value Store",
  right-title: link("https://github.com/ekjyotshinh/Lightweight-Redis-clone")[GitHub],
  subtitle: "Python, Sockets, Threads",
  description: list(
    [ Built a multithreaded in-memory key-value store with RESP protocol support, mutex-based thread safety, and key expiration. ],
    [ Added autosave/autoload for persistent storage, reducing cold start latency and ensuring data durability across server restarts. ]
  )
)

// -----------TECHNICAL SKILLS-----------
#section("Technical Skills")

#list(
  tight: true,
  [ *Programming Languages:* Python, JavaScript, Go, PHP, Java, C++, CUDA ],
  [ *Database:* MySQL, MSSQL, Firestore ],
  [ *Web Technologies:* React, Node.js, Gin, Docker, REST APIs, gRPC, Redis ],
  [ *Operating Systems:* Linux/UNIX, Windows ],
  [ *Tools:* Git, Visual Studio Code, Figma, Postman, Swagger, Jira, Kanban Board ]
)
