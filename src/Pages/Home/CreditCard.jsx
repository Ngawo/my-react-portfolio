import React from 'react';


const CreditCard = ({ description, imageUrl,  }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageUrl} alt="Credit Card" />
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
