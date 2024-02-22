import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton"; // Import the ThemeButton component

function NavBar() {
    const [navActive, setNavActive] = useState(false);
    const [theme, setTheme] = useState("light");

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

    return (
        <nav className={`navbar ${navActive ? "active" : ""} ${theme === "dark" ? "dark-theme" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Zanele" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} to="/" className="navbar--content">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} to="/AboutMe" className="navbar--content">
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} to="/Projects" className="navbar--content">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} to="/ContactMe" className="navbar--content">
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

