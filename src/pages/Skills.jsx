import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Skills = () => {
  const { t } = useTranslation();
  const skillsList = t('skillsList', { returnObjects: true });

  return (
    <section className="skills" id="skills">
      <h2>{t('skills')}</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

