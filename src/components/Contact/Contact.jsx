import "./Contact.css";
import { general } from "../../data/profileData";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiFileText, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
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

  const actions = [
    {
      label: "LinkedIn",
      icon: <FiLinkedin />,
      href: general.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      icon: <FiGithub />,
      href: general.github,
      external: true,
    },
  ];

  return (
    <>
      {/* Bold CTA Heading */}
      <motion.div
        className="contact-hero"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="contact-heading">
          <span className="gradient-text">Let's Build Something Together</span>
        </h2>
        <p className="contact-subtitle">
          Whether you have a project in mind or just want to connect, feel free
          to reach out. I'm always open to exciting opportunities and interesting
          conversations.
        </p>
        <div className="availability-badge">
          <span className="status-indicator"></span>
          <span>Open to opportunities</span>
        </div>
      </motion.div>

      {/* Action Cards */}
      <motion.div
        className="contact-actions"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {actions.map((action, index) => (
          <motion.a
            key={index}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className="action-card"
            variants={item}
            whileHover={{
              y: -6,
              transition: { duration: 0.3 },
            }}
          >
            <div className="action-icon">{action.icon}</div>
            <span className="action-label">{action.label}</span>
            <FiArrowUpRight className="action-arrow" />
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Contact;
