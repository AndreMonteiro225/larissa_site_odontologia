'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.infoSide}>
          <span className="subtitle" style={{color: '#2dd4bf'}}>Agendamento</span>
          <h2 className="section-title" style={{color: 'white'}}>Pronto para transformar seu sorriso?</h2>
          <p className={styles.description}>
            Entre em contato para agendar uma avaliação inicial. Nossa equipe está pronta para oferecer o melhor atendimento odontológico.
          </p>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><MapPin /></div>
            <div>
              <h4 className={styles.infoTitle}>Endereço</h4>
              <p className={styles.infoText}>Av. Paulista, 1000 - Conj 501, São Paulo - SP</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Phone /></div>
            <div>
              <h4 className={styles.infoTitle}>Telefone</h4>
              <p className={styles.infoText}>(11) 99999-8888</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}><Clock /></div>
            <div>
              <h4 className={styles.infoTitle}>Horário</h4>
              <p className={styles.infoText}>Seg - Sex: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}