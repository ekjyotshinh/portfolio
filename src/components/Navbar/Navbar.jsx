import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY, scrollYProgress } = useScroll();
  const clampedScrollY = useTransform(() => {
    if (scrollY.get() === 0) return 0;
    return scrollYProgress.get();
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "certifications", "contact"];
      
      // 1. Bottom of the page fallback (forces active contact link)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      // 2. Top of the page fallback (forces active home link)
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // 3. Dynamic scroll position tracking
      const scrollPosition = window.scrollY + window.innerHeight * 0.45; // target the middle area of viewport
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially (and after a small delay to allow lazy layouts to finish settling)
    handleScroll();
    const timeoutId = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
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
        <motion.div
          className="scroll-progress"
          style={{ scaleX: clampedScrollY }}
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
          className="hamburger open drawer-close-btn"
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
