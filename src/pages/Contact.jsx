import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  const openGmailCompose = () => {
    const email = 'photsathon.sangsukwaw@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contact">
      <h2>{t('contact')}</h2>
      {/* <p>{t('contactText')}</p> */}
      <img src="/img/me2.png" alt="Me" className="contact-img" />

      <div className="contact-icons">
        <a href="https://www.facebook.com/photsathon.sangsukwaw" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/photsathon_koi/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/photsathon-karlsson-50755617a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Photsathon-Karlsson" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a onClick={openGmailCompose} style={{ cursor: 'pointer' }}>
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
