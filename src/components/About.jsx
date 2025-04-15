import React from 'react';
import aboutImage from '../assets/images/img1.png';
import bikeImage from '../assets/images/img2.png';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={aboutImage} width="800" height="652" loading="lazy" alt="Paras's Photo" className="img-cover" />
          <img src={bikeImage} width="800" height="717" loading="lazy" alt="Paras's Photo" className="abs-img" />
        </figure>
        <div className="about-content">
          <p className="section-subtitle">I'm a Developer</p>
          <h2 className="h2 section-title">I Develop Application that Help People</h2>
          <p className="section-text">
            "I specialize in developing user-interface applications leveraging HTML, CSS, and JavaScript to create intuitive, accessible, and impactful digital experiences.
          </p>
          <p className="section-text">
            specialize in developing user-interface applications leveraging HTML, CSS, and JavaScript to create intuitive, accessible, and impactful digital experiences.
          </p>
          <a href="#portfolio" className="btn btn-primary blue">View My Projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;