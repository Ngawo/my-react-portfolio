import React from "react";
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
// import aboutImage from '../../../assets/images/zan.jpg';

export default function Home() {
   

    return(
        <>
        <HeroSection />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
        </>
    )

}
