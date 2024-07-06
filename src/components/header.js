// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/header.css';
import logo from './../assets/images/1.site-logo.png'
import menu from './../assets/images/1.down-arrow.png'
// import { FaBars } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu-btn" onClick={toggleMenu}>
        <img src= {menu}></img>
      </div>
      <div className="logo">
      <Link to="/">
        <img src={logo}></img>
      </Link>  
        </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <Link to='/login'>
      <button className="signin-btn">Log in</button>
      </Link>
    </header>
  );
};

export default Header;