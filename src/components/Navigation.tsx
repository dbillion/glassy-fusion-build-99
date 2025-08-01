
import React, { useState, useEffect } from 'react';
import './navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="https://res.cloudinary.com/dxu5abgqw/image/upload/v1749042984/tfclogo_tkbemf.png" 
            alt="TechFyusion Build" 
          />
        </div>
        
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a onClick={() => scrollToSection('portfolio')}>Work</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        
        <button className="btn-primary nav-cta" onClick={() => scrollToSection('contact')}>
          Start a Project
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
