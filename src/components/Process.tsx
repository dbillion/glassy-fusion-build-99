
import React from 'react';
import { FaSearch, FaClipboardList, FaPalette, FaBolt, FaRocket, FaTools } from 'react-icons/fa';
import './process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business goals, target audience, and project requirements',
      icon: FaSearch
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We create a comprehensive roadmap and technical architecture for your project',
      icon: FaClipboardList
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers craft beautiful, user-centric interfaces that align with your brand',
      icon: FaPalette
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build your solution using cutting-edge technologies and best practices',
      icon: FaBolt
    },
    {
      number: '05',
      title: 'Launch',
      description: 'We deploy your project with thorough testing and optimization for peak performance',
      icon: FaRocket
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure your project continues to thrive',
      icon: FaTools
    }
  ];

  return (
    <section id="process" className="section process">
      <h2 className="section-title">Our Process</h2>
      <div className="process-timeline">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-connector" />
            <div className="step-card glass-card">
              <div className="step-number">{step.number}</div>
              <step.icon className="step-icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
