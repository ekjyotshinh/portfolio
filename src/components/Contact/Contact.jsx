import "./Contact.css";
import { general } from "../../data/profileData";
import { FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
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
      <div className="contact-hero">
        <h2 className="contact-heading">
          <span className="gradient-text">Let's Build Something Together</span>
        </h2>
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
