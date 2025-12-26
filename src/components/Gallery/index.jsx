import { ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '@/utils/data';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="subtitle">Galeria</span>
            <h2 className="section-title">Sorrisos transformados</h2>
          </div>
          <button className={styles.viewAll}>
            Ver todos os casos <ChevronRight size={20} />
          </button>
        </div>

        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className={styles.item}>
              <img src={img} alt={`Tratamento ${idx + 1}`} className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  <p>Estética</p>
                  <p className={styles.treatmentName}>Reabilitação Oral</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}