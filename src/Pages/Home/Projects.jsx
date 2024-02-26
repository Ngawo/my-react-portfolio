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
    description: 'This is Thee Best Group Construction Website, we developed it HTML, CSS, and JavaScript. We designed this website to be visually appealing, user friendly and made it responsive',
    imageUrl: image1,
    link: 'https://thebestconstruction.netlify.app/#'
  },
  {
    id: 2,
    heading: 'Bank App',
    description: 'This is our Python-based Bank App designed for streamlined banking processes.Our Bank App allows you to create New Account, Login to your account and Perfom',
    imageUrl: image2,
    link: 'https://github.com/Ngawo/Bank_App'
    
  },
  {
    id: 3,
    heading: 'Financial Calculator',
    description: 'Users can input parameters such as initial investment amount, interest rate, and investment period for the Investment Calculator, or present value of the bond, interest rate, and bond term for the Bond Calculator. Upon submission, the calculators compute and display the respective results.',
    imageUrl: image3,
    link: 'https://github.com/Ngawo/financial_calculator'
  },
  {
    id: 4,
    heading: 'Chat App',
    description: 'This is a real time chat we created using react, it allowed user to send and recieve a messgage',
    imageUrl: image4,
    link: 'https://theebestchat.netlify.app/'
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
