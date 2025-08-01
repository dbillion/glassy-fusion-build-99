
import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'EcoTech Solutions',
      category: 'Web Development',
      description: 'Sustainable technology platform with modern design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Fashion Forward',
      category: 'E-commerce',
      description: 'Premium fashion brand online store',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'HealthPro Dashboard',
      category: 'Web App',
      description: 'Healthcare management system with analytics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Express', 'MySQL']
    },
    {
      id: 4,
      title: 'Creative Studio',
      category: 'Portfolio',
      description: 'Artist portfolio with interactive galleries',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      tech: ['React', 'Three.js', 'Firebase']
    },
    {
      id: 5,
      title: 'TechStart Platform',
      category: 'SaaS',
      description: 'Startup collaboration an productivity platform',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      tech: ['Angular', 'Node.js', 'Redis']
    },
    {
      id: 6,
      title: 'Local Food Hub',
      category: 'Marketplace',
      description: 'Community-driven local food marketplace',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      tech: ['React', 'GraphQL', 'PostgreSQL']
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <h2 className="section-title">Our Work Speaks</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-card glass-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <span className="view-project">View Project</span>
              </div>
            </div>
            <div className="portfolio-content">
              <div className="portfolio-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="portfolio-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="modal-info">
              <div className="modal-category">{selectedProject.category}</div>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="modal-tech">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
