import React, { useEffect, useRef } from "react";
import "./Certifications.css";

const certifications = [
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
