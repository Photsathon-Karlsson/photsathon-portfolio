/*
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home-content">
        <img src="public/img/me.png" alt="Photsathon" className="profile-img" />
        <h1>{t('homeTitle')}</h1>
        <p>{t('homeSubtitle')}</p>
        
        <a 
          href="https://drive.google.com/file/d/1QVCS1I4zH9_IKALlYJIh2exHfW8Nm2iy/view?usp=sharing" 
          className="hire-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('contactText')}
        </a>
      </div>
    </section>
  );
};

export default Home;
*/

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home-content">
        <video 
          className="profile-video" 
          src="img/welcome.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          Your browser does not support the video tag.
        </video>

        <h1>{t('homeTitle')}</h1>
        <p>{t('homeSubtitle')}</p>
        
        <a 
          href="https://drive.google.com/file/d/1QVCS1I4zH9_IKALlYJIh2exHfW8Nm2iy/view?usp=sharing" 
          className="hire-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t('contactText')}
        </a>
      </div>
    </section>
  );
};

export default Home;

