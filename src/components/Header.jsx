import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import '../index.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Switch dark mode
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  // Function smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If it is 'home' or the element does not exist, move to the top.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after clicking.
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="public/img/logo.png" alt="Logo" />
          <span>photsathon.com</span>
        </div>
      </div>

      <div className="center-section">
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>

        <nav className={isMenuOpen ? 'nav open' : 'nav'}>
          <a onClick={() => scrollToSection('home')}>{t('home')}</a>
          <a onClick={() => scrollToSection('about')}>{t('about')}</a>
          <a onClick={() => scrollToSection('projects')}>{t('projects')}</a>
          <a onClick={() => scrollToSection('education')}>{t('education')}</a>
          <a onClick={() => scrollToSection('work')}>{t('work')}</a>
          <a onClick={() => scrollToSection('skills')}>{t('skills')}</a>
          <a onClick={() => scrollToSection('lifestyle')}>{t('lifestyle')}</a>
          <a onClick={() => scrollToSection('contact')}>{t('contact')}</a>
        </nav>
      </div>

      <div className="right-section">
        <div className="lang-buttons">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('th')}>TH</button>
          <button onClick={() => changeLanguage('sv')}>SV</button>
        </div>

        <div className="dark-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </header>
  );
};

export default Header;
