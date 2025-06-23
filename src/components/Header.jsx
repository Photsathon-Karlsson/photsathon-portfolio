import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import './Header.css';

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

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="public/img/logo.png" alt="Logo" />
          <span>photsathon.com</span>
        </div>
      </div>

      <div className="center-section">
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </div>

        <nav className={isMenuOpen ? 'nav open' : 'nav'}>
          <a href="#home">{t('home')}</a>
          <a href="#about">{t('about')}</a>
          <a href="#projects">{t('projects')}</a>
          <a href="#educations">{t('educations')}</a>
          <a href="#work">{t('work')}</a>
          <a href="#skills">{t('skills')}</a>
          <a href="#lifestyle">{t('lifestyle')}</a>
          <a href="#contact">{t('contact')}</a>
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
