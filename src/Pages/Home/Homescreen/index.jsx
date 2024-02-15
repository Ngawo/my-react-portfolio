import React from "react";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import BackToTopButton from "../BackToTop";
// import aboutImage from '../../../assets/images/zan.jpg';

export default function Home() {
   

    return(
        <>
        <HeroSection />
        <NavBar />
        <AboutMe />
        <Projects />
        <ContactMe />
        <BackToTopButton />
        <Footer />
        </>
    )

}
