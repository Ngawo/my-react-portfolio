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
      <div className='about--section--content'>
        <div className='about--section--img'>
          <img src={image} alt="my pic" />
          </div>
          <div className='about--content'>
            <h2 className='about--section--heading'>About Me</h2>
            <div className='about--section--rectangle animated'>
              <p className='about--section-description'>
                I am Zanele Mangqangwana, a Junior Software Developer based in Cape Town.                              
                I hold a  National Diploma in Information Technology, with a specialization                                        
                in Communication Networks, I have also completed a Software Development                                       
                NQF Level 5 program at Capaciti. During this course, I gained proficiency in HTML,                           
                CSS, JavaScript, Python, and Java. Collaborating within groups, we designed and                  
                developed responsive website .Presently, I am gaining practical experience as a                              
                Junior Software Developer Intern at Younglings Africa.
                </p>
                </div>
                <div className='Skills'>
                  <h2 className="skills-section--heading">Skills</h2>
                  <div className='skill--group-section'>
                    <div className="skill-group">
                      <SkillBar skill="HTML" percentage={80} />
                      <SkillBar skill="CSS" percentage={75} />
                      </div>
                      <div className="skills-group">
                        <SkillBar skill="JavaScript" percentage={70} />
                        <SkillBar skill="Python" percentage={70} />
                      </div>
                      <div className="skillz-group">
                          <SkillBar skill="Java" percentage={70} />
                          <SkillBar skill="React" percentage={40} />
                      </div>
                  </div>
                </div>
           </div>
      </div>
    </section>
  );
}
