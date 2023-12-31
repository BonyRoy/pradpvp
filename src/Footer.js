import React from 'react';
import './Footer.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Pradumnya Vilas Pansare</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/pradumnya-pansare-59b6b3212/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:prakashpansare302@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

