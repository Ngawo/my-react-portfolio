// NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


function NavBar({ onThemeChange }) {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    const handleThemeChange = () => {
    
        onThemeChange();
    }

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
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
                    <button onClick={handleThemeChange} className="theme-button">
                        <FontAwesomeIcon icon={faAdjust} />
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
