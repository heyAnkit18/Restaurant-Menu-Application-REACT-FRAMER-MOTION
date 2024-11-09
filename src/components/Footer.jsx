import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer-left">
          <h3>Punjabi Tadka</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p>Visit us for an unforgettable dining experience with your loved ones.</p>
        </div>

        <div className="footer-center">
          <h4>Contact Us</h4>
          <p>Email: support@company.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123, Street Name, Mumbai, India</p>
        </div>

        <div className="footer-right">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
