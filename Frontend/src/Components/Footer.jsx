import React from 'react';
import '../Style/Footer.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";




const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-left">
          <h3>Boost your coding workflow smartly <br /> with <span>Code Genius.</span></h3>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <FaEnvelope className="footer-icon" />
            <p>codegenius@gmail.com</p>
          </div>
          <div className="footer-contact">
            
            <p className="footer-copy">© Code Genius 2025, All Rights Reserved</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/docs">About</a>
          <a href="/">Features</a>
          <a href="/chatbots">ChatEase</a>
          <a href="/profile">Profile</a>
        </div>

        <div className='footer-logo'>
            <span onClick={() => window.open(" ") }><FaGithub /></span>
            <span onClick={() => window.open(" ") }><ImLinkedin /></span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
