import React from 'react';
import HeroImage from './HeroImage';
 import Typewriter from "typewriter-effect";


function scrollToContactSection() {
  const contactSection = document.getElementById('contactSection');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
          <div className="hero--section--content--box">
            <div className="hero--section--content">
            <h1 className="hero--section--title-description"> Hello... I'm Zanele Mangqangwana </h1>
                    <div className= 'Typewriter-text'>
                        <Typewriter options={{strings: [" A Junior Software Developer based in Cape Town"], autoStart:true, loop:true, deleteSpeed:30, delay:15,}}/>
                    </div>
                    
                </div>
                 <div className="hero--section--buttons">
                      <a href="/document/ZaneleMangqangwana.pdf" download>
                 <button className="btn btn-primary">Download CV</button> </a>
                <button className="btn btn-secondary" onClick={scrollToContactSection}>Contact Me</button>
                </div>
            </div>
            <div className='hero--image'>
            <HeroImage />
            </div>
        </section>
    );
}