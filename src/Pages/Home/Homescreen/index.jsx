import React, { useState } from "react";
import NavBar from "../NavBar";
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import BackToTopButton from "../BackToTop";

export default function Home() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`app ${theme}`}>
            <NavBar onThemeChange={toggleTheme} /> {/* Make sure to pass onThemeChange prop */}
            <HeroSection />
            <AboutMe />
            <Projects />
            <ContactMe />
            <BackToTopButton />
            <Footer />
        </div>
    );
}
