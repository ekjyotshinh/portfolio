import "./Certifications.css";
import { certifications, achievements } from "../../data/profileData";
import { FiAward, FiExternalLink, FiTrendingUp } from "react-icons/fi";

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

  const credentials = [
    ...certifications.map((cert) => ({ ...cert, isHonor: false })),
    ...achievements.map((ach) => ({ ...ach, isHonor: true })),
  ];

  return (
    <div className="credentials-section">
      <h2 className="section-heading">Certifications & Honors</h2>

      <div className="cert-grid">
        {credentials.map((cred, index) => {
          if (cred.isHonor) {
            return (
              <div className="cert-card honor-card featured-card" key={index}>
                <div className="cert-icon honor-icon">
                  <FiTrendingUp />
                </div>
                <div className="cert-content">
                  <h3>{cred.title}</h3>
                  <div className="cert-issuer-badge honor-badge">
                    {cred.organization}
                  </div>
                  <p className="honor-desc">{cred.description}</p>
                  {cred.date && <p className="cert-date">{cred.date}</p>}
                </div>
              </div>
            );
          }

          return (
            <a
              href={cred.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              key={index}
            >
              <div className="cert-icon">
                <FiAward />
              </div>
              <div className="cert-content">
                <h3>{cred.name}</h3>
                <div
                  className="cert-issuer-badge"
                  style={{
                    "--badge-color": getBadgeColor(cred.issuer),
                  }}
                >
                  {cred.issuer}
                </div>
                {cred.date && <p className="cert-date">{cred.date}</p>}
              </div>
              <div className="cert-link-icon">
                <FiExternalLink />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
