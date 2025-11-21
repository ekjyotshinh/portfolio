import React, { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
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

const Experience = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      timelineRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className="timeline-item"
            key={index}
            ref={(el) => (timelineRef.current[index] = el)}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>
                {exp.role} <br /> {exp.company}
              </h3>
              <span className="date">{exp.date}</span>
              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
