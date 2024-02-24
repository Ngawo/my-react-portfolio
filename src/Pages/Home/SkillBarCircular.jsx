import React from 'react';

function SkillBarCircular({ skill, percentage }) {
  return (
    <div className="SkillBarCircular">
      <div className="SkillBarCircular-progress" style={{ transform: `rotate(${percentage*.1}deg)` }}>
        <div className="SkillBarCircular-percentage">{percentage}%</div>
      </div>
      <div className="SkillBarCircular-label">{skill}</div>
    </div>
  );
}

export default SkillBarCircular;
