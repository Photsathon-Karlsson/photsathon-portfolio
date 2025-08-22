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
          <h1>Hi, I'm Photsathon</h1>
          <p>Frontend Developer with experience as a preschool assistant.</p>
          
          <a 
            href="https://drive.google.com/file/d/1QVCS1I4zH9_IKALlYJIh2exHfW8Nm2iy/view?usp=sharing" 
            className="hire-button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View my CV
          </a>
        </div>
      </section>
    </div>
  );
};


export default Home;

