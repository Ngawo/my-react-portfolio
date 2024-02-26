import React from 'react';
import { FaBinoculars, FaBriefcase, FaSuitcase } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h2 className="title-a">Services</h2>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
        <ServiceItem icon={<FaBriefcase size={48} />} title="Web Design" description="I create visually appealing and functional websites by organizing content, optimizing images, and ensuring accessibility with a consistent and responsive layout." />
          <ServiceItem icon={<FaSuitcase size={48} />} title="Web Development" description="As a web developer, I create websites and web applications. I use languages like HTML, CSS, and JavaScript for the visual aspects and server-side scripting for functionality." />
          <ServiceItem icon={<FaBinoculars size={48}/>} title="SEO Optimization" description="I specialize in optimizing websites for search engines to improve their visibility and rankings in search results." />
      
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="service-box">
        <div className="service-ico">
          <span className="ico-circle">{icon}</span>
        </div>
        <div className="service-content">
          <h2 className="s-title">{title}</h2>
          <p className="s-description text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
