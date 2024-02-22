import React from 'react';
import CreditCard from './CreditCard';

import image1 from "../../assets/images/picture1.jpg"
import image2 from "../../assets/images/Picture2.jpg"
import image3 from "../../assets/images/picture3.png"
import image4 from "../../assets/images/picture4.png"

const cardData = [
  {
    id: 1, 
    heading: 'Construction Website',
    description: 'This is Thee Best Group Construction Website, we developed it HTML, CSS, and JavaScript.',
    imageUrl: image1,
    link: 'https://example.com'
  },
  {
    id: 2,
    heading: 'Bank App',
    description: 'This is our Python-based Bank App designed for streamlined banking processes.',
    imageUrl: image2,
    link: 'https://example.com'
  },
  {
    id: 3,
    heading: 'Financial Calculator',
    description: 'Description 3',
    imageUrl: image3,
    link: 'https://example.com'
  },
  {
    id: 4,
    heading: 'Chat App',
    description: 'Description 4',
    imageUrl: image4,
    link: 'https://example.com'
  },
];

function App() {
  return (
    <div className="card-container">
      {cardData.map(card => (
        <CreditCard key={card.id} heading={card.heading} description={card.description} imageUrl={card.imageUrl} link={card.link} />
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
