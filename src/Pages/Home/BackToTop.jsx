import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div onClick={scrollToTop} className="back-to-top-btn">
      <FaArrowUp />
    </div>
  );
}

export default BackToTopButton;
