import { useState, useEffect } from "react";
import "./BottomNav.css";
import { FiHome, FiBriefcase, FiCode, FiCpu, FiMail } from "react-icons/fi";

const tabs = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "experience", label: "Experience", icon: <FiBriefcase /> },
  { id: "projects", label: "Projects", icon: <FiCode /> },
  { id: "skills", label: "Skills", icon: <FiCpu /> },
  { id: "contact", label: "Contact", icon: <FiMail /> },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const tab of [...tabs].reverse()) {
        const element = document.getElementById(tab.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(tab.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bottom-nav" aria-label="Quick navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-nav-tab ${activeSection === tab.id ? "active" : ""}`}
          onClick={() => handleClick(tab.id)}
          aria-label={`Go to ${tab.label}`}
          aria-current={activeSection === tab.id ? "true" : undefined}
        >
          <span className="bottom-nav-icon">{tab.icon}</span>
          <span className="bottom-nav-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
