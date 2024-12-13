import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events and set active section based on viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container">
      <h1>Manigandan Nachiappan</h1>
      <ul>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;