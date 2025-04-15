import React, { useState } from 'react';
import logo from '../assets/images/Untitled Project.jpg'; // Make sure this path matches your project structure

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  const closeNavbar = () => {
    setNavActive(false);
  };

  return (
    <header className={`header ${navActive ? 'nav-active' : ''}`} data-header>
      <div className="container">
        <a href="#">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <button
          className={`nav-toggle-btn ${navActive ? 'active' : ''}`}
          aria-label="Toggle Menu"
          data-nav-toggle-btn
          onClick={toggleNavbar}
        >
          &#9776;
        </button>
        <nav className="navbar container">
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a></li>
            <li><a href="#about" className="navbar-link" data-nav-link onClick={closeNavbar}>About</a></li>
            <li><a href="#portfolio" className="navbar-link" data-nav-link onClick={closeNavbar}>Portfolio</a></li>
            <li><a href="#skills" className="navbar-link" data-nav-link onClick={closeNavbar}>Skills</a></li>
            <li><a href="#contact" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1FQBFvlI6XWLM2UcKdTgELIN0U7n6bH5E/view?usp=drive_link"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
