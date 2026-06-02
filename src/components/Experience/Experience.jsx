import React, { useState, useEffect } from "react";
import "./Experience.css";
import { experiences } from "../../data/profileData";
import { FiBriefcase, FiCalendar, FiChevronDown } from "react-icons/fi";

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => {
          const hasMore = exp.details.length > 2;
          const initialDetails = exp.details.slice(0, 2);
          const extraDetails = exp.details.slice(2);
          const isExpanded = !!expandedItems[index];

          return (
            <div className="timeline-item" key={index}>
              {/* Experience Card */}
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <div className="experience-date">
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Details */}
                <ul className="experience-details">
                  {initialDetails.map((point, i) => (
                    <li key={i}>
                      <span className="bullet">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Collapsible extra details */}
                {hasMore && (
                  <div className={`collapsible-details ${(!isMobile || isExpanded) ? "expanded" : ""}`}>
                    <div className="collapsible-inner">
                      <ul className="experience-details extra-details">
                        {extraDetails.map((point, i) => (
                          <li key={i + 2}>
                            <span className="bullet">→</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Show More Button */}
                {isMobile && hasMore && (
                  <button
                    className="experience-toggle-btn"
                    onClick={() => toggleExpand(index)}
                    aria-label={isExpanded ? "Show fewer highlights" : "Show more highlights"}
                  >
                    <span>{isExpanded ? "Show Less" : "Show More"}</span>
                    <FiChevronDown style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
