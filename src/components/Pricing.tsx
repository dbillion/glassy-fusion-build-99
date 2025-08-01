
import React from 'react';
import './pricing.css';

const Pricing = () => {
  const packages = [
    {
      name: 'Standard',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Web Design',
        'Up to 5 Pages',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Mobile Optimization',
        '30 Days Support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses that need more features',
      features: [
        'Custom Design & Development',
        'Up to 15 Pages',
        'Advanced SEO & Analytics',
        'CMS Integration',
        'E-commerce Ready',
        'Performance Optimization',
        '90 Days Support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Full Custom Development',
        'Unlimited Pages',
        'Advanced Integrations',
        'Custom Features & APIs',
        'Multi-language Support',
        'Priority Support',
        '12 Months Support'
      ],
      highlighted: false
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section pricing">
      <h2 className="section-title">Our Packages</h2>
      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`pricing-card glass-card ${pkg.highlighted ? 'highlighted' : ''}`}>
            {pkg.highlighted && <div className="popular-badge">Most Popular</div>}
            <div className="pricing-header">
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <p className="price-description">{pkg.description}</p>
            </div>
            <ul className="features-list">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={pkg.highlighted ? 'btn-primary' : 'btn-secondary'}
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
