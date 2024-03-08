// Services.js
import React from 'react';
import CardComponent from './CardComponent';
import { FaBinoculars, FaBriefcase, FaSuitcase } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
    <div className='services-content'> 
      <h2>Services</h2>
      <div className="services">
        <CardComponent 
          icon={<FaBinoculars size={54} color='black' />} 
          title="Web Design"
          description="I create visually appealing and functional websites by organizing content, optimizing images, and ensuring accessibility with a consistent and responsive layout."
        />
        <CardComponent 
          icon={<FaBriefcase size={54} top={50} color='black'/>} 
          title="Web development"
          description="As a web developer, I create websites and web applications. I use languages like HTML, CSS, and JavaScript for the visual aspects and server-side scripting for functionality."
        />
        <CardComponent 
          icon={<FaSuitcase size={54} color='black' />} 
          title="SEO Optimization"
          description="I specialize in optimizing websites for search engines to improve their visibility, ensuring a good user experience and rankings in search results."
        />
      </div>
    </div>
    </section>
  );
};

export default Services;
