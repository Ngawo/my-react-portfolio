import React, { useState } from 'react';
import image1 from "../../assets/images/picture1.jpg";
import image2 from "../../assets/images/Picture2.jpg";
import image3 from "../../assets/images/picture3.png";
import image4 from "../../assets/images/picture4.png";

const SlideShow = () => {
  const [value, setValue] = useState(1);

  const handleCardClick = () => {
    setValue(prevValue => (prevValue % 4) + 1);
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="Projects" className="projects--section">
      <div className='projects--content'>
            <h2 className='projects--section--heading'>Projects </h2>
            <div className="card2" onClick={handleCardClick}></div>
            <div className={`card2 ${value === 1 ? 'back1' : value === 2 ? 'center1' : value === 3 ? 'center2' : 'back2'}`} onClick={handleCardClick}>
              <h1>Thee Best Website</h1>
              <img src={image1} alt="Slide 1" />
              {/* <p>This is The Best Group Construction Website, we developed it using HTML, CSS, and JavaScript. We designed it to be visually appealing, user friendly, and responsive.</p> */}
              <button className="btn" onClick={() => openLink("https://thebestconstruction.netlify.app/#")}>Link</button>
              </div>
              <div className={`card2 ${value === 2 ? 'back1' : value === 3 ? 'center1' : value === 4 ? 'center2' : 'back2'}`} onClick={handleCardClick}>
              <h1>Bank App</h1>
              <img src={image2} alt="Slide 2" />
              {/* <p>This is our Python-based Bank App designed for streamlined banking processes. Our Bank App allows you to create New Account, Login to your account and Perform transactions.</p> */}
             <button className="btn" onClick={() => openLink("https://github.com/Ngawo/Bank_App")}>Link</button>
             </div>
             <div className={`card2 ${value === 3 ? 'back1' : value === 4 ? 'center1' : value === 1 ? 'center2' : 'back2'}`} onClick={handleCardClick}>
             <h1>Financial Calculator</h1>
             <img src={image3} alt="Slide 3" />
             {/* <p>Allows users to input initial investment amount, interest rates, and bond term for the Bond Calculator. The calculator computes and displays the respective results.</p> */}
             <button className="btn" onClick={() => openLink("https://github.com/Ngawo/financial_calculator")}>Link</button>
             </div>
             <div className={`card2 ${value === 4 ? 'back1' : value === 1 ? 'center1' : value === 2 ? 'center2' : 'back2'}`} onClick={handleCardClick}>
             <h1>Chat App</h1>
             <img src={image4} alt="Slide 4" />
             {/* <p>Our Chat App is a real time chat app, it allows users to send and receive messages and also we designed it using React.</p> */}
             <button className="btn" onClick={() => openLink("https://theebestchat.netlify.app/")}>Link</button>
             </div>
          </div>
    </section>
  );
};

export default SlideShow;