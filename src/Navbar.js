import React from 'react';
import './Navbar.css';
import logo from './logo.jpg'; 

const Navbar = ({ activeSection, onNavClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => onNavClick('home')}>
            Home
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => onNavClick('projects')}>
            WorkExp
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => onNavClick('contact')}>
            ContactUs
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
