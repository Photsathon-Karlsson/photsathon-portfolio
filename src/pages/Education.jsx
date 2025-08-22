import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Education = () => {
  const { t } = useTranslation();
  const education = t('educationList', { returnObjects: true });
  console.log('education', education); 

  return (
    <section className="education" id="education">
      <h2>{t('education')}</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </section>
  );
};

export default Education;

