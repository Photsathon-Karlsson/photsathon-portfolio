import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:photsathon@email.com"><FaEnvelope /></a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf /></a>
      </div>
      <p>© 2025 Photsathon.com. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
