import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="home-video">
        <video
          className="profile-video"
          src="img/welcome.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      <section className="home-content-section">
        <div className="home-content">
          <h1>{t('homeTitle')}</h1>
          <p>{t('homeSubtitle')}</p>

          <a
            href="https://drive.google.com/file/d/1Vu5L4lVLwdtUk7dbkjh9oHa-kR2oMWdr/view?usp=drive_link"
            className="hire-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contactText')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
