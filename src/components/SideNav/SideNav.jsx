import "./SideNav.css";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function SideNav({ activeSection }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="side-nav-container"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="side-nav-line-top" />
      <div className="side-nav-items">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`side-nav-item-btn ${
              activeSection === section.id ? "active" : ""
            }`}
            aria-label={`Scroll to ${section.label}`}
            aria-current={activeSection === section.id ? "true" : undefined}
          >
            <span className="side-nav-label">{section.label}</span>
            <div className="side-nav-dot" />
          </button>
        ))}
      </div>
      <div className="side-nav-line-bottom" />
    </motion.div>
  );
}
