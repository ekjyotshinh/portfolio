import React, { useState, useEffect } from "react";
import "./Experience.css";
import { experiences } from "../../data/profileData";
import { motion, AnimatePresence } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      <h2 className="section-heading">Professional Experience</h2>
      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experiences.map((exp, index) => {
          const hasMore = exp.details.length > 2;
          const initialDetails = exp.details.slice(0, 2);
          const extraDetails = exp.details.slice(2);
          const isExpanded = !!expandedItems[index];

          return (
            <motion.div
              className="timeline-item"
              key={index}
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot-wrapper">
                <motion.div
                  className="timeline-dot"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiBriefcase />
                </motion.div>
              </div>

              {/* Experience Card */}
              <motion.div
                className="timeline-content"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Header */}
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <div className="date-badge">
                    <FiCalendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Details */}
                <ul className="experience-details">
                  {initialDetails.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <span className="bullet">→</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Collapsible extra details */}
                {hasMore && (
                  <AnimatePresence initial={false}>
                    {(!isMobile || isExpanded) && (
                      <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : false}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <ul className="experience-details extra-details" style={{ marginTop: "var(--spacing-md)" }}>
                          {extraDetails.map((point, i) => (
                            <motion.li
                              key={i + 2}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                              <span className="bullet">→</span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Experience;
