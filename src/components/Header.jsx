import React,{useState} from 'react';
import logo from '../assets/images/Untitled Project.jpg';

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <button className="nav-toggle-btn" aria-label="Toggle Menu" data-nav-toggle-btn>
          &#9776;
        </button>
        <nav className="navbar container">
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
            <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
            <li><a href="#portfolio" className="navbar-link" data-nav-link>Portfolio</a></li>
            <li><a href="#skills" className="navbar-link" data-nav-link>Skills</a></li>
            <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1FQBFvlI6XWLM2UcKdTgELIN0U7n6bH5E/view?usp=drive_link" className="btn btn-primary">Download CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;