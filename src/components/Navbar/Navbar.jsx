import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar glass">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="nav-controls">
        <div className="theme-toggle-mobile">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Hamburger button visible on small screens */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Side nav menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={() => setIsOpen(false)}>
            Certifications
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
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
