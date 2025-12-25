import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { motion, useScroll } from "framer-motion";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="navbar glass">
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="logo-container">
        <a href="#home" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
      </div>

      <div className="nav-controls">
        <div className="theme-toggle-mobile">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger button visible on small screens */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Side nav menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {[
          { id: "home", label: "Home" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "certifications", label: "Certifications" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="theme-toggle-desktop">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </nav>
  );
}

export default Navbar;
