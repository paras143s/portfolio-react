import React from 'react';
import heroImage from '../assets/images/img2.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-banner">
          <img src={heroImage} width="800" height="864" loading="lazy" alt="Paras's Photo" className="img-cover" />
          <div className="elem elem-1">
            <p className="elem-title">1.5</p>
            <p className="elem-text">Year Learning Experience</p>
          </div>
          <div className="elem elem-2">
            <p className="elem-title">5+</p>
            <p className="elem-text">Projects Completed</p>
          </div>
        </div>
        <div className="hero-content">
          <h2 className="hero-title"><span>Hello I'm</span> PARAS RAJPUT <br />Web Developer | Designer</h2>
          <p className="hero-text">
            Hello! My name is Paras Kumar, and I am an enthusiastic and dedicated MCA (Master of Computer Applications) student. 
            I hail from Darbhanga, Bihar, a place known for its rich culture and heritage. 
            Currently, I am pursuing my MCA at Galgotias University, Greater Noida, where I am gaining valuable knowledge and skills in the field of computer applications. 
            As a fresher, I bring a strong passion for technology, problem-solving, and continuous learning.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary blue">Contact me</a>
            <a href="#about" className="btn">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;