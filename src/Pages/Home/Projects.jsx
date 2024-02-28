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
    description: 'This is Thee Best Group Construction Website, we developed it HTML, CSS, and JavaScript. We designed it to be visually appealing, user friendly and responsiveness.',
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
    description: 'Allows users to input initial investment amount, interest rates, and bond term for the Bond Calculator. The calculator compute and display the respective results.',
    imageUrl: image3,
    link: 'https://github.com/Ngawo/financial_calculator'
  },
  {
    id: 4,
    heading: 'Chat App',
    description: 'Our Chat App is a real time chat app, it allows users to send and recieve massages and also we disigned it using React.',
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
