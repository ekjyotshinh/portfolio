import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar({ activeSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollWidth(0);
        return;
      }
      const percentage = (window.scrollY / totalScroll) * 100;
      setScrollWidth(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar glass ${isOpen ? "menu-open" : ""}`}>
        {/* Scroll Progress Bar */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollWidth}%` }}
        />

        <div className="logo-container">
          <a href="#home" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Logo" className="logo-img" width="32" height="40" />
          </a>
        </div>

        <div className="nav-controls">
          <div className="theme-toggle-mobile">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Hamburger button visible on small screens (hidden via visibility when open to preserve layout width) */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{ visibility: isOpen ? "hidden" : "visible" }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Desktop nav menu */}
        <ul className="nav-links">
          {[
            { id: "home", label: "Home" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "certifications", label: "Certifications" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
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
      </nav>

      {/* Mobile Drawer (moved outside navbar containing block to support viewport-relative fixed positioning) */}
      <ul className={`nav-links-mobile ${isOpen ? "open" : ""}`}>
        {[
          { id: "home", label: "Home" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "skills", label: "Skills" },
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
      </ul>

      {/* Dedicated close button rendered outside navbar containing block to support viewport-relative fixed positioning */}
      {isOpen && (
        <button
          className="hamburger open nav-drawer-close-btn"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {/* Overlay to close menu when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </>
  );
}

export default Navbar;
