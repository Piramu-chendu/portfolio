import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // State to track the active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="page-container">
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <div className="logo">
          <a href="#home" onClick={() => handleSectionClick('home')}>PIRAMU CHENDU</a>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active-link' : ''} 
              onClick={() => handleSectionClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active-link' : ''} 
              onClick={() => handleSectionClick('about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active-link' : ''} 
              onClick={() => handleSectionClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active-link' : ''} 
              onClick={() => handleSectionClick('projects')}
            >
              Projects
            </a>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {activeSection === 'home' && (
          <section id="home">
            <center><h2>Welcome to My Portfolio</h2>
            <p>This is the home section where you can introduce yourself.</p></center>
          </section>
        )}
        {activeSection === 'about' && (
          <section id="about">
            <center><h2>About Me</h2>
            <p>Here is some information about me and my background.</p></center>
          </section>
        )}
        {activeSection === 'skills' && (
          <section id="skills">
            <center><h2>Skills</h2>
            <p>Here are some of the skills I have acquired over the years.</p></center>
          </section>
        )}
        {activeSection === 'projects' && (
          <section id="projects">
            <center><h2>Projects</h2>
            <p>Here are some of the projects I've worked on.</p></center>
          </section>
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:2005chendu@gmail.com">2005chendu@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">9003176302</a></p>
          <div className="social-links">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;






