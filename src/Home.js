import React from 'react';
import './Home.css';
import dance from './dance.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="row">
        {/* Column 1: Home Page Content */}
        <div className="col-md-6 d-flex justify-content-center flex-column">
          <div className="home-content">
            <h2 className="home-title">Welcome to My Portfolio</h2>
            <p className="home-description">I'm SAP Certified Application Associate - Sales and Distribution with SAP ERP 6.0 EhP7</p>
        <a href='https://drive.google.com/file/d/1ztUfT8muDIxa0RuF4YtF3wr9627Gm7_D/view?usp=sharing' className="explore-button" target="_blank" rel="noopener noreferrer">
          Explore My Resume
        </a>
            <br/><br/>
          </div>
        </div>
        

        {/* Column 2: Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center"> {/* Change here */}
          <img
            src={dance} // Replace 'dance' with the actual image source
            className="img-fluid animated"
            alt="home img"
            style={{ maxWidth: '60%', borderRadius: '10px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
