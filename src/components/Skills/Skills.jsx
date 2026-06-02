import "./Skills.css";
import { skills, certifications, achievements } from "../../data/profileData";
import { FiExternalLink } from "react-icons/fi";

export default function Skills() {
  const getCategoryLabel = (category) => {
    switch (category) {
      case "languages":
        return "Programming Languages";
      case "databases":
        return "Databases";
      case "webTech":
        return "Web technologies";
      case "tools":
        return "Tools & Dev";
      default:
        return category;
    }
  };

  return (
    <div className="skills-section-container">
      <h2 className="section-heading">Skills</h2>

      <div className="skills-layout">
        {/* Left Column: Tech Stack */}
        <div className="skills-grid-container">
          <h3 className="column-heading">Technical Skills</h3>
          <div className="skills-categories">
            {Object.keys(skills).map((key) => (
              <div key={key} className="skills-category-card">
                <div className="category-header">
                  <h4>{getCategoryLabel(key)}</h4>
                </div>
                <ul className="skills-list">
                  {skills[key].map((skill, index) => (
                    <li key={index} className="skill-tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Awards */}
        <div className="credentials-container">
          <div className="credentials-section-group">
            <h3 className="column-heading">Certifications</h3>
            <div className="credentials-list">
              {certifications.map((cert, index) => (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-item cert-link"
                  key={`cert-${index}`}
                >
                  <div className="credential-main">
                    <span className="credential-title">{cert.name}</span>
                    <span className="credential-sep">—</span>
                    <span className="credential-issuer">{cert.issuer}</span>
                    <FiExternalLink className="credential-link-icon" />
                  </div>
                  <span className="credential-date">{cert.date}</span>
                </a>
              ))}
              {achievements.map((ach, index) => (
                <div className="credential-item" key={`honor-${index}`}>
                  <div className="credential-main">
                    <span className="credential-title">{ach.title}</span>
                    <span className="credential-sep">—</span>
                    <span className="credential-issuer">{ach.organization}</span>
                  </div>
                  <p className="credential-desc">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
