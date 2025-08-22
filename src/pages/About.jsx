import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/*<img src="public/img/me2.png" alt="me2" className="about-img" />*/}
        <img src={`${import.meta.env.BASE_URL}img/me2.png`} alt="me2" className="about-img" />
        <div className="about-text">
          <h2>{t('about')}</h2>
          <p>{t('aboutContent')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;


