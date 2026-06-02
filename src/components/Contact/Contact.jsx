import "./Contact.css";
import { general } from "../../data/profileData";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const actions = [
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: general.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      href: general.github,
      external: true,
    },
  ];

  return (
    <>
      <h2 className="section-heading">Contact</h2>
      
      {/* Bold CTA Heading */}
      <div className="contact-hero">
        <h3 className="contact-cta-title">
          Let's Build Something Together
        </h3>
        <p className="contact-subtitle">
          Whether you have a project in mind or just want to connect, feel free
          to reach out. I'm always open to exciting opportunities and interesting
          conversations.
        </p>
      </div>

      {/* Action Cards */}
      <div className="contact-actions">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className="action-card"
          >
            <div className="action-icon">{action.icon}</div>
            <span className="action-label">{action.label}</span>
            <FiArrowUpRight className="action-arrow" />
          </a>
        ))}
      </div>
    </>
  );
};

export default Contact;
