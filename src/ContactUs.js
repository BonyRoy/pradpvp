// ContactUs.js

import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:prakashpansare302@gmail.com">prakashpansare302@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/pradumnya-pansare-59b6b3212/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 9082423154
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
