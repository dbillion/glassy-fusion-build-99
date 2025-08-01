
import React from 'react';
import './bookcall.css';

const BookCall = () => {
  const handleBookCall = () => {
    // Replace with actual Calendly link
    window.open('https://calendly.com/techfyusion-build/discovery-call', '_blank');
    console.log('Opening Calendly booking page');
  };

  return (
    <section className="book-call">
      <div className="book-call-container">
        <div className="book-call-content glass-card">
          <h2>Need something more custom?</h2>
          <p>
            Book a quick discovery call with our team to discuss your unique project. 
            We'll explore your vision and create a tailored solution that perfectly fits your needs.
          </p>
          <button className="btn-primary book-call-btn" onClick={handleBookCall}>
            Book a Call on Calendly
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
