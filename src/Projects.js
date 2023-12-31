import React from 'react';
import './WorkExperience.css';

const Projects = () => {
  return (
<section className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="timeline">
        <div className="job">
          <div className="job-header">
            <h3>Assistant Hr</h3>
            <p className="company-info">Company Name 1 - Dmart</p>
            <p className="duration">Duration: 2 Months - Dec 2021</p>
          </div>
          <ul>
            <li>  Bill management</li>
            <li>Quality Check and Stock update check</li>
            <li>Supervision</li>
            {/* Add more responsibilities as needed */}
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Executive Compliance Hr</h3>
            <p className="company-info">Company Name 2 - Reliance</p>
            <p className="duration">Duration: Feb 2023 - Dec 2023</p>
          </div>
          <ul>
            <li>  Vender Document Checking and Completion</li>
            <li>Vender Bill Releasing and Mapping</li>
            {/* Add more responsibilities as needed */}
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>PF and ESIC Remittance</h3>
            <p className="company-info">Company Name 3 - Relianca and Jio</p>
            <p className="duration">Duration: Jan 2024 - Till date</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
