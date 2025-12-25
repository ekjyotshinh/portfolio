import "./Contact.css";
import { general } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(general.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${general.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
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

      {/* Message Composer */}
      <motion.div
        className="message-composer glass"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Send a message</h3>
        <div className="composer-form">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="subject-input"
          />
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
            rows="6"
          />
          <div className="send-options">
            <div className="platform-buttons">
              <button
                className="platform-btn email-btn"
                onClick={handleSendEmail}
                disabled={!message.trim()}
                aria-label="Send via Email"
              >
                <FiMail />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Contact Cards */}
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
              Connect with me →
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
              View my work →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
