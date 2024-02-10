import React, { useState, useEffect } from "react"; 
import { Link } from "react-scroll";

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                {/* Make sure the path to your image file is correct */}
                <img src="./img/logo.svg" alt="Zanele" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        {/* Use the Link component instead of link */}
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">
                            Home
                        </Link>
                    </li>
                    <li>
                        {/* Use the Link component instead of link */}
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">
                            About
                        </Link>
                    </li>
                    <li>
                        {/* Use the Link component instead of link */}
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Projects" className="navbar--content">
                            Projects
                        </Link>
                    </li>
                    <li>
                        {/* Use the Link component instead of link */}
                        <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="ContactMe" className="navbar--content">
                            Contact
                        </Link>
                    </li>
                    <button className="btn btn-outline-primary">Contact Me</button>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
