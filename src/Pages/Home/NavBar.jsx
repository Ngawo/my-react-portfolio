// NavBar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
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

    const handleThemeChange = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }
    const handleLinkClick = (link) => {
        setActiveLink(link);
      };
      
    
    return (
        <nav className={`navbar ${navActive ? "active" : ""} ${theme === "dark" ? "dark-theme" : ""}`}>
            <div class="nav-logo">
                <span class="first-letter">Z</span>
                <span class="second-letter">M</span>
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
                        <Link onClick={() => {closeMenu(); handleLinkClick("home");}}to="/"className={`navbar--content ${ activeLink === "home" ? "active" : ""}`}>Home</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {closeMenu(); handleLinkClick("about");}}
                            to="/AboutMe"
                            className={`navbar--content ${ activeLink === "about" ? "active" : ""}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {closeMenu(); handleLinkClick("projects");}}
                            to="/Projects"
                            className={`navbar--content ${ activeLink === "projects" ? "active" : ""}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {closeMenu(); handleLinkClick("services");}}
                            to="/Services"
                            className={`navbar--content ${ activeLink === "services" ? "active" : ""}`}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {closeMenu(); handleLinkClick("contact");}}
                            to="/ContactMe"
                            className={`navbar--content ${ activeLink === "contact" ? "active" : ""}`}
                        >
                            Contact
                        </Link>
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