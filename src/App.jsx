import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SectionContainer from "./components/Layout/SectionContainer";
import BottomNav from "./components/BottomNav/BottomNav";

// Lazy-load below-the-fold sections for faster initial paint
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certifications = lazy(() => import("./components/Certifications/Certifications"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <SectionContainer id="home">
        <Hero />
      </SectionContainer>
      <Suspense fallback={null}>
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
      </Suspense>
      <BottomNav />
    </div>
  );
}

export default App;
