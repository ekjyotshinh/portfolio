import "./Experience.css";
import { experiences } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const Experience = () => {
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
        {experiences.map((exp, index) => (
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
              className="timeline-content glass"
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
                {exp.details.map((point, i) => (
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
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Experience;
