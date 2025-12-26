'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/utils/data';
import styles from './Hero.module.css';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === HERO_SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? HERO_SLIDES.length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="home" className={styles.hero}>
      {HERO_SLIDES.map((slide, index) => (
        <div key={slide.id} className={`${styles.slide} ${index === current ? styles.active : ''}`}>
          <img src={slide.image} alt={slide.title} className={styles.image} />
          <div className={styles.overlay} />
          <div className={`container ${styles.content}`}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <div className={styles.buttons}>
              <button className="btn-primary">{slide.ctaPrimary}</button>
              <button className={styles.btnOutline}>{slide.ctaSecondary}</button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.controls}>
        <button onClick={prevSlide}><ChevronLeft size={32} /></button>
        <button onClick={nextSlide}><ChevronRight size={32} /></button>
      </div>
    </section>
  );
}