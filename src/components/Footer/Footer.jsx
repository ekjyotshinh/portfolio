import "./Footer.css";
import { general } from "../../data/profileData";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a
            href={general.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-link"
          >
            <FiGithub />
          </a>
          <a
            href={general.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-link"
          >
            <FiLinkedin />
          </a>
        </div>
        <p className="footer-copy">
          &copy; 2026 Ekjyot Shinh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
