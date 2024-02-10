import React from 'react';
import image from '../../assets/images/zan.jpg';

export default function AboutMe() {
    return (
        <section id="AboutMe" className="abaut--section">
            <div className='about--section--img'>
                <img src={image} alt="my pic" />
            </div>
        </section>
    );
}