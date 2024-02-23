import React from 'react';
import './HeroSection.css';
import cv from '../../assets/docs/';

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
                    <h2 className="section--title">Hello... <br/>I'm ZANELE MANGQANGWANA</h2>
                    <h3 className="hero--section--title-description"> A Junior Software Developer</h3>
                </div>
                 <div className="hero--section--buttons">
                    <button className="btn btn-primary">Download Cv</button>
                    <button className="btn btn-secondary" onClick={scrollToContactSection}>Contact Me</button>
                </div>
            </div>
        </section>
    );
}
