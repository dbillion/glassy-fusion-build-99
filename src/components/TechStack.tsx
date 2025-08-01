
import React, { useState } from 'react';
import { FaNodeJs, FaReact, FaVuejs, FaAngular, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiFlutter, SiRust, SiCplusplus, SiTypescript } from 'react-icons/si';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import './techstack.css';

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techDetails = {
    'Node.js': {
      year: '2009',
      usage: 'Server-side JavaScript runtime for building scalable web applications',
      type: 'Interpreted runtime environment',
      funFact: 'Netflix, Uber, and LinkedIn use Node.js to handle millions of requests daily'
    },
    'Next.js': {
      year: '2016',
      usage: 'Full-stack React framework for production-ready web applications',
      type: 'Framework (builds on React)',
      funFact: 'Used by TikTok, Twitch, and Hulu for their web platforms'
    },
    'Express': {
      year: '2010',
      usage: 'Minimal web framework for Node.js backend applications',
      type: 'Backend framework',
      funFact: 'Powers over 1.5 million websites and is the most popular Node.js framework'
    },
    'Flutter': {
      year: '2017',
      usage: 'Cross-platform mobile app development for iOS and Android',
      type: 'Compiled (Dart language)',
      funFact: 'Google Pay, BMW, and Alibaba built their mobile apps with Flutter'
    },
    'Vue.js': {
      year: '2014',
      usage: 'Progressive JavaScript framework for building user interfaces',
      type: 'Interpreted (JavaScript)',
      funFact: 'GitLab, Adobe, and Nintendo use Vue.js for their web applications'
    },
    'Angular': {
      year: '2010',
      usage: 'Full-featured TypeScript framework for enterprise web applications',
      type: 'Compiled (TypeScript)',
      funFact: 'Google, Microsoft, and Samsung use Angular for large-scale applications'
    },
    'Rust': {
      year: '2010',
      usage: 'System programming language focused on safety and performance',
      type: 'Compiled, systems programming',
      funFact: 'Firefox browser engine and Discord backend are built with Rust'
    },
    'Python': {
      year: '1991',
      usage: 'General-purpose programming for AI, data science, and web development',
      type: 'Interpreted, object-oriented',
      funFact: 'Instagram, Spotify, and NASA use Python for their core systems'
    },
    'C++': {
      year: '1985',
      usage: 'High-performance applications, games, and system software',
      type: 'Compiled, object-oriented',
      funFact: 'Unreal Engine, Photoshop, and most AAA games are built with C++'
    },
    'Java': {
      year: '1995',
      usage: 'Enterprise applications, Android development, and web backends',
      type: 'Compiled to bytecode, object-oriented',
      funFact: 'Android OS, Minecraft, and most banking systems run on Java'
    },
    'React': {
      year: '2013',
      usage: 'Component-based library for building interactive user interfaces',
      type: 'JavaScript library',
      funFact: 'Facebook, WhatsApp, and Instagram are all built with React'
    },
    'TypeScript': {
      year: '2012',
      usage: 'Strongly-typed superset of JavaScript for large-scale applications',
      type: 'Compiled to JavaScript',
      funFact: 'Slack, Airbnb, and VS Code are built entirely with TypeScript'
    }
  };

  const technologies = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Vue.js', icon: FaVuejs },
    { name: 'Angular', icon: FaAngular },
    { name: 'Rust', icon: SiRust },
    { name: 'Python', icon: FaPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
    { name: 'React', icon: FaReact },
    { name: 'TypeScript', icon: SiTypescript }
  ];

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="techstack" className="section techstack">
        <h2 className="section-title">Technologies We Use</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-item glass-card"
              onClick={() => handleTechClick(tech)}
            >
              <tech.icon className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="tech-modal">
          <DialogHeader>
            <DialogTitle className="tech-modal-title">
              {selectedTech && (
                <>
                  <selectedTech.icon className="tech-modal-icon" />
                  {selectedTech.name}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedTech && techDetails[selectedTech.name] && (
            <div className="tech-modal-content">
              <div className="tech-detail-item">
                <span className="tech-detail-label">Year Created:</span>
                <span className="tech-detail-value">{techDetails[selectedTech.name].year}</span>
              </div>
              <div className="tech-detail-item">
                <span className="tech-detail-label">Used For:</span>
                <span className="tech-detail-value">{techDetails[selectedTech.name].usage}</span>
              </div>
              <div className="tech-detail-item">
                <span className="tech-detail-label">Type:</span>
                <span className="tech-detail-value">{techDetails[selectedTech.name].type}</span>
              </div>
              <div className="tech-detail-item tech-fun-fact">
                <span className="tech-detail-label">Fun Fact:</span>
                <span className="tech-detail-value">{techDetails[selectedTech.name].funFact}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TechStack;
