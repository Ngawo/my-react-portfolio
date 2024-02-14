import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
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
    <Slider {...settings}>
      <div>
        <h3>Thee Best</h3>
        <img src="src/assets/images/images/mobile banking app.jpg" alt="Project 1" />
        <p>Thee Best Construction Website that I worked with my team developing it.
          We used HTML, CSS and Javascript.
        </p>
      </div>
      <div>
        <h3>Project 2</h3>
        <img src="project2.jpg" alt="Project 2" />
        <p>Description of Project 2</p>
      </div>
      <div>
        <h3>Project 3</h3>
        <img src="project2.jpg" alt="Project 2" />
        <p>Description of Project 2</p>
      </div>
      <div>
        <h3>Project 4</h3>
        <img src="project2.jpg" alt="Project 2" />
        <p>Description of Project 2</p>
      </div>
    </Slider>
  );
};

export default SlideShow;
