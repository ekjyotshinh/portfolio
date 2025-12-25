import "./Certifications.css";
import { certifications } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  // Badge colors for different issuers
  const getBadgeColor = (issuer) => {
    const colors = {
      "AWS Educate": "hsl(30, 100%, 50%)",
      AlgoExpert: "hsl(220, 100%, 55%)",
      Udacity: "hsl(200, 100%, 50%)",
    };
    return colors[issuer] || "hsl(210, 100%, 55%)";
  };

  return (
    <>
      <h2 className="section-heading">Certifications</h2>
      <motion.div
        className="cert-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card glass"
            key={index}
            variants={item}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            {/* Icon */}
            <div className="cert-icon">
              <FiAward />
            </div>

            {/* Content */}
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <div
                className="cert-issuer-badge"
                style={{
                  "--badge-color": getBadgeColor(cert.issuer),
                }}
              >
                {cert.issuer}
              </div>
              <p className="cert-date">{cert.date}</p>
            </div>

            {/* External Link Icon */}
            <div className="cert-link-icon">
              <FiExternalLink />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Certifications;
