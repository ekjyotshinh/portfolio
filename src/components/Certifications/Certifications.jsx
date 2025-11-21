import React, { useEffect, useRef } from "react";
import "./Certifications.css";
import { certifications } from "../../data/profileData";

const Certifications = () => {
  const certRef = useRef([]);

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

    certRef.current.forEach((el) => el && observer.observe(el));

    return () => certRef.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="certifications" id="certifications">
      <h2 className="section-heading">Certifications</h2>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <div
            className="cert-item"
            key={index}
            ref={(el) => (certRef.current[index] = el)}
            style={{ transitionDelay: `${index * 150}ms` }}>
            <h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.name}
              </a>{" "}
              @ {cert.issuer}
            </h3>
            <span className="date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
