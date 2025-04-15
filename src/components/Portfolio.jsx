import React from 'react';
import calculatorImage from '../assets/images/calculator.png';
import tictactoeImage from '../assets/images/tictactoe.png';
import shoppingImage from '../assets/images/shoppingadda.png';

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <p className="section-subtitle">Portfolio</p>
        <h2 className="h2 section-title">My Amazing Works</h2>
        <p className="section-text">
          A spiring junior UI developer with foundational skills in HTML, Css, and JavaScript. 
          Passionate about creating responsive and user-friendly web designs
        </p>
        <ul className="portfolio-list">
          <li>
            <h3 className="h3 card-title">SIMPLE-CALCULATOR</h3><br />
            <p className="card-subtitle">
              The goal of this project is to create a basic calculator that can perform fundamental arithmetic operations such as addition, subtraction, multiplication, and division. 
              This project aims to enhance understanding of programming concepts and provide a practical application of mathematical operations in a user-friendly interface.
            </p>
            <br></br>
            <a href="" className="portfolio-card" style={{ backgroundImage: `url(${calculatorImage})` }}>
            </a>
          </li>
          <li>
            <h3 className="h3 card-title">TIC-TAC-TOI GAME FOR USING FULL LOGIC</h3><br />
            <p className="card-subtitle">
              The goal of this project is to develop a simple and interactive Tic Tac Toe game that allows two players to compete against each other. 
              This project will focus on implementing game logic, Showing result and Set New game also Reset game.Create user interface design, and an engaging user experience.
            </p>
            <br></br>
            <a href="https://paras143s.github.io/gamewithparas/" className="portfolio-card" style={{ backgroundImage: `url(${tictactoeImage})` }}>
            </a>
          </li>
          <li>
            <h3 className="h3 card-title">Web Application for Online Shopping</h3><br />
            <p className="card-subtitle">
              The objective of this project is to design and develop(SHOPPING ADDA) using HTML, CSS And JAVASCRIPT an online shopping application that allows users to browse, search, and purchase products seamlessly. 
              The application aims to provide a user-friendly and efficient order management to enhance the online shopping experience. Features:
            </p>
            <br></br>
            <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${shoppingImage})` }}>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;