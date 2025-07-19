import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Office of Water Programs",
    date: "Feb 2024 – Present",
    details: [
      "Built secure checkout system integrating PayPal Braintree API.",
      "Optimized SQL & PHP APIs reducing response time by 40%.",
      "Created admin tools for data editing and filtering."
    ]
  },
  {
    role: "Research Assistant",
    company: "CSU Sacramento",
    date: "Mar 2024 – Present",
    details: [
      "Optimized Parallel Branch & Bound for Sequential Ordering Problem.",
      "Achieved 15% speedup with custom load-balancing strategy.",
      "Developed a progress estimation model."
    ]
  },
  {
    role: "Student Assistant",
    company: "CSU Sacramento",
    date: "Sept 2021 – Feb 2024",
    details: [
      "Tutored students in Linear Algebra, Calculus, and Pre-Calculus.",
      "Led orientation sessions for 600+ new students.",
      "Collaborated with 30+ leaders to enhance student onboarding."
    ]
  }
];

const Experience = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    timelineRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      timelineRef.current.forEach(el => {
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
            ref={el => (timelineRef.current[index] = el)}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.role} @ {exp.company}</h3>
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
