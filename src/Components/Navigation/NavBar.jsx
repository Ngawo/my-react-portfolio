import React, { useState } from "react";
import ThemeButton from "./ThemeButton";

import './Navbar.css';

function NavBar() {
    const [navActive, setNavActive] = useState(false);
    const [theme, setTheme] = useState("light");
    const [activeLink, setActiveLink] = useState("");
    
    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 50; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const offsetPosition = elementRect - bodyRect - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`navbar ${navActive ? "active" : ""} ${theme === "dark" ? "dark-theme" : ""}`}>
            
            <div className="nav-logo">
                <span className="first-letter">Z.</span>
                <span className="second-letter">M</span>
            </div>
            <a
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <a href="#heroSection" onClick={() => { closeMenu(); scrollToSection("heroSection"); }} className={`navbar--content ${activeLink === "home" ? "active" : ""}`}>Home</a>
                    </li>
                    <li>
                        <a href="#AboutMe" onClick={() => { closeMenu(); scrollToSection("AboutMe"); }} className={`navbar--content ${activeLink === "about" ? "active" : ""}`}>About</a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={() => { closeMenu(); scrollToSection("projects"); }} className={`navbar--content ${activeLink === "projects" ? "active" : ""}`}>Projects</a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => { closeMenu(); scrollToSection("services"); }} className={`navbar--content ${activeLink === "services" ? "active" : ""}`}>Services</a>
                    </li>
                    <li>
                        <a href="#contactSection" onClick={() => { closeMenu(); scrollToSection("contactSection"); }} className={`navbar--content ${activeLink === "contact" ? "active" : ""}`}>Contact</a>
                    </li>
                    <li>
                        <ThemeButton />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
