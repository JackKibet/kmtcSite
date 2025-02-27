import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="src\assets\logo.webp" alt="KMTC Logo" />
        <span>KMTC</span>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
          <li><Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link></li>
          <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>News & Events</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;