// CardComponent.js
import React from 'react';


const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="content"></div>
      <div className="bg">
      {icon} {/* Render the icon passed as prop */}
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="blob"></div>
    </div>
  );
};

export default CardComponent;
