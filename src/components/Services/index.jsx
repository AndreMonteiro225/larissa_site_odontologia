import { SERVICES } from '../../utils/data';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="subtitle">Tratamentos</span>
          <h2 className="section-title">Cuidamos do seu sorriso</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconBox}>
                <service.icon size={32} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}