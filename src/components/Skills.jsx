import React from 'react';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-subtitle">My Skills</p>
        <h2 className="h2 section-title">I Develop Skills Regularly</h2>
        <p className="section-text">
          A spiring junior UI developer with foundational skills in HTML, Css, and JavaScript. 
          Passionate about creating responsive and user-friendly web designs
        </p>
        <ul className="skills-list">
          {[
            { name: "HTML", percent: 90 },
            { name: "CSS", percent: 90 },
            { name: "JavaScript", percent: 75 },
            { name: "SQL", percent: 80 },
            { name: "PHP", percent: 50 },
            { name: "BOOTSTRAP", percent: 50 },
            { name: "REACT", percent: 70 },
            { name: "MS-EXCEL", percent: 80 },
            { name: "JAVA", percent: 80 }
          ].map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="wrapper" style={{ width: `${skill.percent}%` }}>
                <h3 className="skills-title">{skill.name}</h3>
                <data className="skills-data" value={skill.percent}>{skill.percent}%</data>
              </div>
              <div className="skills-progress-box">
                <div className="skills-progress" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;