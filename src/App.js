import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/Navigation/NavBar';
import HeroSection from './Components/Home/HeroSection';
import AboutMe from './Components/About/AboutMe';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import ContactMe from './Components/Contact/ContactMe';
import Footer from './Components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`app ${theme}`}>
      <div>
        <NavBar onThemeChange={toggleTheme} scrollToSection={scrollToSection} />
      </div>
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
