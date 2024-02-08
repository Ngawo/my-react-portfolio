import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    // const toggleNav = () => {
    //     setNavActive(!navActive)
    // }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () =>{
            if (window.innerWidth <= 500){
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() =>{
        if (window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                {/* Make sure the path to your image file is correct */}
                <img src="./img/logo.svg" alt="Zanele" />
            </div>
        </nav>
    );
}

export default NavBar;
