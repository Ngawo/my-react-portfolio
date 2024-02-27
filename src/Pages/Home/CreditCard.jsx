import React from 'react';

const CreditCard = ({ heading, link, description, imageUrl }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageUrl} alt="Credit Card" />
          </div>
          <div className="flip-card-back">
            <h2>{heading}</h2>
            <p>{description}</p>
            <button className="btn"onClick={() => window.open(link, "_blank")}>Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

