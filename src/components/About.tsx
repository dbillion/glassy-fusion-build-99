
import React from 'react';
import { FaBolt, FaBullseye, FaStar, FaComments } from 'react-icons/fa';
import './about.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">Who We Are</h2>
      <div className="about-content">
        <div className="about-card glass-card">
          <div className="about-text">
            <h3>TechFyusion Build</h3>
            <p>
              We build premium websites and web applications using modern, secure, and reliable tech stacks — 
              with aesthetic frontends, robust backends, and optimized delivery.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <FaBolt className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Reliability</h4>
                  <p>Rock-solid solutions that perform under pressure</p>
                </div>
              </div>
              <div className="highlight">
                <FaBullseye className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Precision Engineering</h4>
                  <p>Every line of code crafted with purpose and excellence</p>
                </div>
              </div>
              <div className="highlight">
                <FaStar className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Visual Beauty</h4>
                  <p>Stunning designs that captivate and convert</p>
                </div>
              </div>
              <div className="highlight">
                <FaComments className="highlight-icon" />
                <div className="highlight-content">
                  <h4>Easy Communication</h4>
                  <p>Clear, transparent collaboration every step of the way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
