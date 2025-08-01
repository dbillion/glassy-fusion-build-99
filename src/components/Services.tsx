
import React from 'react';
import { FaGlobe, FaShoppingCart, FaPalette, FaBullseye, FaBolt, FaTools } from 'react-icons/fa';
import './services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites built with modern technologies and stunning visuals',
      icon: FaGlobe
    },
    {
      title: 'E-commerce Development',
      description: 'Powerful online stores that drive sales and customer satisfaction',
      icon: FaShoppingCart
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that users love and businesses benefit from',
      icon: FaPalette
    },
    {
      title: 'Branding & Identity',
      description: 'Complete brand systems that make you stand out in the market',
      icon: FaBullseye
    },
    {
      title: 'SEO & Performance',
      description: 'Lightning-fast sites optimized for search engines and users',
      icon: FaBolt
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing care to keep your digital presence running smoothly',
      icon: FaTools
    }
  ];

  return (
    <section id="services" className="section services">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glass-card">
            <service.icon className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
