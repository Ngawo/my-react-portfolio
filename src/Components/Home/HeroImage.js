// HeroImage.js
import React from "react";
import heroImage from "../../assets/images/IMG-20240117-WA0049.jpg"; // Import the image file

const HeroImage = () => {
    return (
        <div className="hero">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="mask" />
        </div>
    );
};

export default HeroImage;
