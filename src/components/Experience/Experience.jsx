import React, { useEffect, useRef } from "react";
import "./Experience.css";
import { experiences } from "../../data/profileData";

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
