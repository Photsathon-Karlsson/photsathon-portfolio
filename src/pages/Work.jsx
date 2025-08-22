import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Work = () => {
  const { t } = useTranslation();
  const workList = t('workList', { returnObjects: true });

  return (
    <section className="work" id="work">
      <h2>{t('work')}</h2>
      <ul>
        {workList.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </section>
  );
};

export default Work;

