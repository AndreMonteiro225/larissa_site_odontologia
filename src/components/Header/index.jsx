'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          Dra. Ana<span>Silva</span>
        </div>

        <nav className={styles.desktopNav}>
          <a href="#home">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato" className="btn-primary">Agendar</a>
        </nav>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? styles.iconDark : styles.iconLight} /> : <Menu className={scrolled ? styles.iconDark : styles.iconLight} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#galeria" onClick={() => setIsOpen(false)}>Galeria</a>
          <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
}