"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.infoSide}>
          <span className="subtitle" style={{ color: "#2dd4bf" }}>
            Agendamento
          </span>
          <h2 className="section-title" style={{ color: "white" }}>
            Pronto para transformar seu sorriso?
          </h2>
          <p className={styles.description}>
            Entre em contato para agendar uma avaliação inicial. Nossa equipe
            está pronta para oferecer o melhor atendimento odontológico.
          </p>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <MapPin />
            </div>
            <div>
              <h4 className={styles.infoTitle}>Endereço</h4>
              <p className={styles.infoText}>
                Perdizes, ??? - ???, São Paulo - SP
              </p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Phone />
            </div>
            <div>
              <h4 className={styles.infoTitle}>Telefone</h4>
              <p className={styles.infoText}>(11) 99999-8888</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Clock />
            </div>
            <div>
              <h4 className={styles.infoTitle}>Horário</h4>
              <p className={styles.infoText}>Seg - Sex: 09:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457.2360527831314!2d-46.675193!3d-23.5365152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5791987c6659%3A0xd93a76c9f1a718e2!2sLarissa%20Vilanova%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1766764220746!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
