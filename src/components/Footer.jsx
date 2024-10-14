import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Punjabi tadka</h3>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-center">
          <h4>Contact Us</h4>
          <p>Email: support@company.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123, Street Name, Mumbai, Inida</p>
        
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;