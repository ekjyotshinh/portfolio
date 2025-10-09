import React, { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Software Developer (Full-Stack)",
    company: "Office of Water Programs",
    date: "Feb 2024 – Present",
    details: [
      "Engineered a secure checkout system integrating PayPal’s Braintree API, handling $15K+ in daily transactions, ensuring data integrity, compliance, and error reporting for faster issue resolution.",
      "Developed an emailing microservice with a queuing system and deferred sending functionality, used across four client applications and internal services to ensure reliable email delivery.",
      "Identified and fixed a security vulnerability in the login system, strengthening authentication and protecting sensitive user data.",
      "Refactored UPS API integration to use multi-cURL for parallel requests, improving shipping rate retrieval time by 75%.",
      "Optimized SQL procedures and REST APIs, enhancing responsiveness and reducing query response time by 40%.",
    ],
  },
  {
    role: "Research Assistant (Algorithmic Research)",
    company: "California State University, Sacramento",
    date: "Mar 2024 – Present",
    details: [
      "Optimized load balancing in a parallel Branch & Bound algorithm for the Sequential Ordering Problem (SOP) using a custom progress-based strategy, achieving a 15% performance speedup.",
      "Leveraged Lin-Kernighan heuristic (LKH) entries for intelligent pruning with early termination and reuse within the solver, reducing execution time by 10% and improving resource utilization.",
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
      <h2>Experience</h2>
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
