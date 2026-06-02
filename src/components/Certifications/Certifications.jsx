import "./Certifications.css";
import { certifications } from "../../data/profileData";
import { FiAward, FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  // Badge colors for different issuers
  const getBadgeColor = (issuer) => {
    const colors = {
      "AWS Educate": "hsl(30, 100%, 50%)",
      AlgoExpert: "hsl(220, 100%, 55%)",
      Udacity: "hsl(200, 100%, 50%)",
    };
    return colors[issuer] || "hsl(210, 100%, 55%)";
  };

  return (
    <>
      <h2 className="section-heading">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            key={index}
          >
            {/* Icon */}
            <div className="cert-icon">
              <FiAward />
            </div>

            {/* Content */}
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <div
                className="cert-issuer-badge"
                style={{
                  "--badge-color": getBadgeColor(cert.issuer),
                }}
              >
                {cert.issuer}
              </div>
              <p className="cert-date">{cert.date}</p>
            </div>

            {/* External Link Icon */}
            <div className="cert-link-icon">
              <FiExternalLink />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Certifications;
