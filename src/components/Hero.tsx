import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [currentCode, setCurrentCode] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const codeSnippet = `// Advanced React component with state management
import React, { useState, useEffect } from 'react';
import { fetchUserData, updatePreferences } from './api';

const UserDashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const userData = await fetchUserData(userId);
        setUser(userData);
        setPreferences(userData.preferences || {});
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      loadUserData();
    }
  }, [userId]);

  const handlePreferenceChange = async (key, value) => {
    const newPrefs = { ...preferences, [key]: value };
    setPreferences(newPrefs);
    
    try {
      await updatePreferences(userId, newPrefs);
    } catch (error) {
      console.error('Update failed:', error);
      // Revert on error
      setPreferences(preferences);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name}</h2>
      <UserStats data={user?.stats} />
    </div>
  );
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setCurrentCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCodeWithSyntax = (code) => {
    return code
      .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
      .replace(/\b(const|let|var|async|await|try|catch|return|if|else|function|class|import|export|from|default|useEffect|useState)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(fetchUserData|updatePreferences|console|log|error|setUser|setLoading|setPreferences)\b/g, '<span class="method">$1</span>')
      .replace(/(['"`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, '<span class="string">$1$2$3</span>')
      .replace(/\b(user|loading|preferences|userData|newPrefs|userId|key|value|error|index|interval)\b/g, '<span class="variable">$1</span>');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Stunning, Scalable Websites for Bold Brands
          </h1>
          <p className="hero-subtitle">
            We craft premium web experiences that drive results and leave lasting impressions
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Start a Project
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('portfolio')}>
              View Our Work
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-editor">
            <div className="editor-header">
              <div className="editor-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="editor-tabs">
                <div className="tab active">
                  <span>UserDashboard.jsx</span>
                </div>
                <div className="tab">
                  <span>api.js</span>
                </div>
              </div>
            </div>
            <div className="editor-content">
              <div className="line-numbers">
                {currentCode.split('\n').map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <div className="code-content">
                <pre>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: renderCodeWithSyntax(currentCode) + 
                        `<span class="cursor ${cursorVisible ? 'visible' : ''}">|</span>`
                    }}
                  />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
