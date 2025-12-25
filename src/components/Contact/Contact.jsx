import "./Contact.css";
import { general } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(general.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <h2 className="section-heading">Let's Connect</h2>
      
      <motion.div
        className="contact-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          Whether you have a project in mind or just want to connect, feel free
          to reach out. I'm always open to exciting opportunities and interesting
          conversations.
        </p>
        <div className="availability-badge">
          <span className="status-indicator"></span>
          <span>Open to opportunities</span>
        </div>
      </motion.div>

      <motion.div
        className="contact-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Email Card */}
        <motion.div
          className="contact-card glass"
          variants={item}
          whileHover={{
            y: -6,
            transition: { duration: 0.3 },
          }}
        >
          <div className="contact-icon email-icon">
            <FiMail />
          </div>
          <div className="contact-content">
            <h3>Email</h3>
            <a href={`mailto:${general.email}`}>{general.email}</a>
            <button
              className="copy-btn"
              onClick={copyEmail}
              aria-label="Copy email to clipboard"
            >
              {copied ? <FiCheck /> : <FiCopy />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          className="contact-card glass"
          variants={item}
          whileHover={{
            y: -6,
            transition: { duration: 0.3 },
          }}
        >
          <div className="contact-icon linkedin-icon">
            <FiLinkedin />
          </div>
          <div className="contact-content">
            <h3>LinkedIn</h3>
            <a
              href={general.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ekjyotshinh
            </a>
            <a
              href={general.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Visit Profile →
            </a>
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          className="contact-card glass"
          variants={item}
          whileHover={{
            y: -6,
            transition: { duration: 0.3 },
          }}
        >
          <div className="contact-icon github-icon">
            <FiGithub />
          </div>
          <div className="contact-content">
            <h3>GitHub</h3>
            <a
              href={general.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ekjyotshinh
            </a>
            <a
              href={general.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              View Repositories →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
