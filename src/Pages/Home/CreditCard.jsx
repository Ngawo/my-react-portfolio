import React from 'react';


const CreditCard = ({heading, link, description, imageUrl,  }) => {
  return (
    <div><h3>{heading}</h3>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          
          <img src={imageUrl} alt="Credit Card" />
        </div>
         <div className="flip-card-back">
          <h2>{heading}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Link</a> {/* Add link here */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreditCard;
