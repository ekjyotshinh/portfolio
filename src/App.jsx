import React, { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="fade-section"><About /></div>
      <div className="fade-section"><Experience /></div>
      <div className="fade-section"><Projects /></div>
      <div className="fade-section"><Certifications /></div>
      <div className="fade-section"><Contact /></div>
    </div>
  );
}

export default App;