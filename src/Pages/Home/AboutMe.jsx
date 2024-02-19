import React from 'react';
import image from '../../assets/images/zan.jpg';

function SkillBar({ skill, percentage }) {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-progress">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

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
          <h2 className="skills-section--heading">Skills</h2>
          <div className="skill-group">
            <SkillBar skill="HTML" percentage={80} />
            <SkillBar skill="CSS" percentage={75} />
            <SkillBar skill="JavaScript" percentage={70} />
          </div>
          <div className="skill-group">
            <SkillBar skill="Python" percentage={70} />
            <SkillBar skill="Java" percentage={70} />
            <SkillBar skill="React" percentage={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
