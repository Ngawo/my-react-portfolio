import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ProjectSlider.css'; // Import custom CSS file for styling

import image1 from "../../assets/images/Thee Beest.jpg"
import image2 from "../../assets/images/Picture2.jpg"
import image3 from "../../assets/images/picture3.png"
import image4 from "../../assets/images/picture4.png"

const ProjectSlider = () => {
  const projects = [
    { id: 1, title: 'Thee Best Construction Website', imageUrl: image1, description: 'Description for Thee Best Construction Website' },
    { id: 2, title: 'Bank App', imageUrl: image2, description: 'Description for Bank App' },
    { id: 3, title: 'Financial Calculator', imageUrl: image3, description: 'Description for Financial Calculator' },
    { id: 4, title: 'Chat App', imageUrl: image4, description: 'Description for Chat App' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Enable center mode
    centerPadding: '20%', // Adjust the padding as needed
    focusOnSelect: true // Ensure focus on the selected slide
  };

  return (
    <div className="project-slider-container">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-slide">
            <div className="image-container">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;

