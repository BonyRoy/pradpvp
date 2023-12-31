import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import ContactUs from './ContactUs';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <ContactUs />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
