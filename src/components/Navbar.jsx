import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ toggleTheme }) => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="logo">Punjabi Tadka</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
        <li><Link to="reviews" smooth={true} duration={500}>Reviews</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        🌞 Lighten Up!
      </button>
    </motion.nav>
  );
};

export default Navbar;



