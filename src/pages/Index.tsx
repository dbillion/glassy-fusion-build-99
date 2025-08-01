
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Pricing from '../components/Pricing';
import BookCall from '../components/BookCall';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './index.css';

const Index = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <TechStack />
      <Pricing />
      <BookCall />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
