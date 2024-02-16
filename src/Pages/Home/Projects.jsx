import React from 'react';
import ProjectSlider from './projectSlider'; // Import the Slider component from the correct file

const ProjectSection = () => {
  return (
    <div>
    <h2 className='myProject--heading underline'>Projects</h2>
      <ProjectSlider />
    </div>
  );
};

export default ProjectSection;
