import React from 'react';
import image from '../../assets/images/zan.jpg';

export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className='about--section--img'>
                <img src={image} alt="my pic" />
            </div>
            <div className='hero--section--content--box about--section--section--box'>
                <div className='hero--section--content'>
                    <h1 className='skills-section--heading underline'>About Me</h1>
                    <p className='hero--section-description'>
                        I'm Zanele Mangqangwana, a Junior Software Developer located in Cape Town.
                        I hold a National Diploma in Information Technology with a focus on Communication
                        Networks. Additionally, I successfully completed a software development learnership
                        at Capaciti, where I gained proficiency in HTML, CSS, JavaScript, Python, and Java.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}
it 