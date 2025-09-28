import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events and set active section based on viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
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

  // Toggle dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <h1>Manigandan Nachiappan</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={toggleMenu}>About</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={toggleMenu}>Experience</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={toggleMenu}>Contact</a></li>
      </ul>
    </div>
  );
}

export default Header;