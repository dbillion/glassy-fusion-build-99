
import React, { useState } from 'react';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Let's Start Your Project</h2>
      <div className="contact-container">
        <div className="contact-form glass-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="webapp">Web Application</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <div className="contact-item glass-card">
            <HiMail className="contact-icon" />
            <div>
              <h4>Email Us</h4>
              <p>hello@techfyusionbuild.com</p>
            </div>
          </div>
          <div className="contact-item glass-card">
            <HiLocationMarker className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
