import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionContainer from "./components/Layout/SectionContainer";
import BottomNav from "./components/BottomNav/BottomNav";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SideNav from "./components/SideNav/SideNav";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height/trigger threshold

      let currentSection = "home";
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top - 100) {
            currentSection = sections[i];
          }
        }
      }

      // Check if we are at the very bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Also watch for lazy-loaded elements mounting or layout changes
    const observer = new MutationObserver(handleScroll);
    const rootEl = document.getElementById("root");
    if (rootEl) {
      observer.observe(rootEl, { childList: true, subtree: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe any existing sections
    const observeAll = () => {
      document.querySelectorAll(".fade-section").forEach((section) => {
        observer.observe(section);
      });
    };
    observeAll();

    // Watch for lazy-loaded sections appearing in the DOM
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <div className="cursor-spotlight" />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <SideNav activeSection={activeSection} />
      <SectionContainer id="home">
        <Hero />
      </SectionContainer>
      <SectionContainer id="experience" className="fade-section">
        <Experience />
      </SectionContainer>
      <SectionContainer id="projects" className="fade-section">
        <Projects />
      </SectionContainer>
      <SectionContainer id="certifications" className="fade-section">
        <Certifications />
      </SectionContainer>
      <SectionContainer id="contact" className="fade-section">
        <Contact />
      </SectionContainer>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
