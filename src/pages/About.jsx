import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <img src="public/img/me.png" alt="me" className="about-img" />
        <div className="about-text">
          <h2>{t('about')}</h2>
          <p>{t('aboutContent')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;


