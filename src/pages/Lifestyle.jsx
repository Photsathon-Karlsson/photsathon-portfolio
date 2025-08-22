import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';
/*
const images = [
  'public/img/lifestyle-1.jpg',
  'public/img/lifestyle-2.jpg',
  'public/img/lifestyle-3.jpg',
  'public/img/lifestyle-4.jpg',
  'public/img/lifestyle-5.jpg',
  'public/img/lifestyle-6.jpg',
  'public/img/lifestyle-7.jpg',
  'public/img/lifestyle-8.png',
  'public/img/lifestyle-9.png',
  'public/img/lifestyle-10.jpg'
];
*/
const images = [
  `${import.meta.env.BASE_URL}img/lifestyle-1.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-2.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-3.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-4.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-5.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-6.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-7.jpg`,
  `${import.meta.env.BASE_URL}img/lifestyle-8.png`,
  `${import.meta.env.BASE_URL}img/lifestyle-9.png`,
  `${import.meta.env.BASE_URL}img/lifestyle-10.jpg`
];

const Lifestyle = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="lifestyle" id="lifestyle">
      <div className="lifestyle-textbox">
        <h2>{t('lifestyle')}</h2>
        <ul>
          <li>{t('hobby1')}</li>
          <li>{t('hobby2')}</li>
          <li>{t('hobby3')}</li>
          <li>{t('hobby4')}</li>
        </ul>
      </div>

      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          </div>
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Lifestyle;


