import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../../assets/images/zan.jpg"
import image2 from "../../assets/images/mobileApp.jpg"
import image3 from "../../assets/images/zan zan.jpg"
import image4 from "../../assets/images/230x0w.webp"

const ProjectSlider = () => {
  // Sample project data
  const projects = [
    { id: 1, title: 'Thee Best Construction Website', imageUrl: image1 },
    { id: 2, title: 'Bank App', imageUrl: image2 },
    { id: 3, title: 'Financial Calculator', imageUrl: image3 },
    { id: 4, title: 'Chat App', imageUrl: image4 },
    // Add more project data as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProjectSlider;
