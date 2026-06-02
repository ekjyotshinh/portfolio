import { useState, useEffect } from "react";
import "./Skills.css";
import { skills, general, githubStats } from "../../data/profileData";
import { FiCode, FiLayers, FiDatabase, FiCpu, FiExternalLink, FiStar, FiGitCommit, FiGitPullRequest, FiFolder } from "react-icons/fi";

export default function Skills() {
  const [stats, setStats] = useState(githubStats);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = general.github.split("/").pop();
        
        // 1. Fetch profile to get public repo count
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error("GitHub profile fetch failed");
        const profileData = await profileRes.json();
        
        // 2. Fetch repos (up to 100) to calculate stars and languages
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposRes.ok) throw new Error("GitHub repos fetch failed");
        const reposData = await reposRes.json();
        
        let totalStars = 0;
        const langCounts = {};
        let totalLangRepos = 0;
        let originalReposCount = 0;
        
        reposData.forEach((repo) => {
          if (!repo.fork) { // Only count user's own original repos
            originalReposCount++;
            totalStars += repo.stargazers_count;
            if (repo.language) {
              let lang = repo.language;
              const mainLanguages = ["Python", "TypeScript", "Go", "Java", "JavaScript", "CUDA"];
              if (!mainLanguages.includes(lang)) {
                lang = "Others";
              }
              langCounts[lang] = (langCounts[lang] || 0) + 1;
              totalLangRepos++;
            }
          }
        });
        
        const langColors = {
          Go: "hsl(180, 100%, 40%)",
          JavaScript: "hsl(45, 100%, 50%)",
          Python: "hsl(210, 100%, 55%)",
          TypeScript: "hsl(200, 100%, 40%)",
          Java: "hsl(15, 95%, 45%)",
          CUDA: "hsl(90, 85%, 40%)",
          Others: "hsl(220, 10%, 60%)",
        };
        
        const languages = Object.entries(langCounts)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangRepos) * 100),
            color: langColors[name] || `hsl(${Math.random() * 360}, 75%, 55%)`,
          }))
          .sort((a, b) => b.percentage - a.percentage);
        
        setStats({
          commits: githubStats.commits,
          prs: githubStats.prs,
          stars: totalStars,
          repos: originalReposCount,
          languages: languages.length > 0 ? languages : githubStats.languages,
        });
      } catch (err) {
        console.warn("Failed to fetch live GitHub stats, using local fallbacks:", err);
      }
    };
    
    fetchGitHubStats();
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "languages":
        return <FiCpu />;
      case "databases":
        return <FiDatabase />;
      case "webTech":
        return <FiLayers />;
      case "tools":
        return <FiCode />;
      default:
        return <FiCode />;
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "languages":
        return "Languages";
      case "databases":
        return "Databases";
      case "webTech":
        return "Web Technologies";
      case "tools":
        return "Tools & Dev";
      default:
        return category;
    }
  };

  return (
    <div className="skills-section-container">
      <h2 className="section-heading">Skills & Statistics</h2>

      <div className="skills-layout">
        {/* Left Part: Tech Stack Grid */}
        <div className="skills-grid-container">
          {Object.keys(skills).map((key) => (
            <div key={key} className="skills-category-card">
              <div className="category-header">
                <span className="category-icon">{getCategoryIcon(key)}</span>
                <h3>{getCategoryLabel(key)}</h3>
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

        {/* Right Part: Custom GitHub Stats Dashboard */}
        <div className="github-stats-container">
          <div className="github-header">
            <img
              src={`https://github.com/${general.github.split("/").pop()}.png`}
              alt="GitHub Profile Avatar"
              className="github-avatar"
            />
            <div>
              <h3>GitHub Analytics</h3>
              <a
                href={general.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-profile-link"
              >
                <span>@ekjyotshinh</span>
                <FiExternalLink />
              </a>
            </div>
          </div>
          
          <div className="github-dashboard-content">
            {/* Stats Metrics Grid */}
            <div className="github-metrics-grid">
              <div className="metric-box">
                <FiGitCommit className="metric-icon" />
                <span className="metric-value">{stats.commits}</span>
                <span className="metric-label">Commits</span>
              </div>
              <div className="metric-box">
                <FiGitPullRequest className="metric-icon" />
                <span className="metric-value">{stats.prs}</span>
                <span className="metric-label">PRs Merged</span>
              </div>
              <div className="metric-box">
                <FiStar className="metric-icon" />
                <span className="metric-value">{stats.stars}</span>
                <span className="metric-label">Stars</span>
              </div>
              <div className="metric-box">
                <FiFolder className="metric-icon" />
                <span className="metric-value">{stats.repos}</span>
                <span className="metric-label">Repositories</span>
              </div>
            </div>

            {/* Top Languages Section */}
            <div className="github-languages-section">
              <h4>Top Languages</h4>
              <div className="languages-chart">
                {stats.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="lang-chart-segment"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <ul className="languages-legend">
                {stats.languages.map((lang, index) => (
                  <li key={index} className="lang-legend-item">
                    <span className="legend-dot" style={{ backgroundColor: lang.color }} />
                    <span className="legend-name">{lang.name}</span>
                    <span className="legend-percentage">{lang.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
