import { Instagram, Facebook, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div>
          <div className={styles.logo}>
            Dra. Ana<span>Silva</span>
          </div>
          <p>CRO/SP 12345 - Odontologia com excelência.</p>
        </div>
        <div className={styles.social}>
          <a href="#"><Instagram size={24} /></a>
          <a href="#"><Facebook size={24} /></a>
          <a href="#"><Linkedin size={24} /></a>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dra. Ana Silva Odontologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}