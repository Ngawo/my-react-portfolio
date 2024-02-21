import React from 'react';
import CreditCard from './CreditCard';

import image1 from "../../assets/images/picture1.jpg"
import image2 from "../../assets/images/Picture2.jpg"
import image3 from "../../assets/images/picture3.png"
import image4 from "../../assets/images/picture4.png"

const cardData = [
  {
    id: 1,
    description: 'zanele zanele zanele zanele',
    imageUrl: image1
    
  },
  {
    id: 2,
    description: 'Description 2',
    imageUrl: image2
   
  },
  {
    id: 3,
    description: 'Description 3',
    imageUrl: image3
   
  },
  {
    id: 4,
    description: 'Description 4',
    imageUrl: image4
    
    
  },
];

function App() {
  return (
    <div className="card-container">
      {cardData.map(card => (
        <CreditCard key={card.id} description={card.description} imageUrl={card.imageUrl} />
      ))}
      <style>
        {`
          .card-container img {
            width: 100%; /* Adjust the width as needed */
            height: 100%; /* Maintain aspect ratio */
          }
        `}
      </style>
    </div>
  );
}

export default App;
