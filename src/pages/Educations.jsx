import React from 'react';
import { useTranslation } from 'react-i18next';
import './Educations.css';

const Educations = () => {
  const { t } = useTranslation();
  const educations = t('educationsList', { returnObjects: true });

  return (
    <section className="educations" id="educations">
      <h2>{t('educations')}</h2>
      <ul>
        {educations.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </section>
  );
};

export default Educations;

