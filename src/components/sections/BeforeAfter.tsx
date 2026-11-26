import type { CSSProperties } from "react";
import { beforeAfter } from "@/data/content";
import { ArrowRight, Check, Close } from "@/components/ui/Icons";
import styles from "./BeforeAfter.module.css";

/**
 * Antes y después (ilustrativo): el WhatsApp lleno de mensajes sin responder
 * frente a la web con un asistente que atiende y registra el turno.
 */
export function BeforeAfter() {
  const { before, after } = beforeAfter;
  return (
    <section id="antes-despues" className="section section-alt" aria-labelledby="antes-title">
      <div className="container">
        <header className="section-head">
          <h2 id="antes-title" className="section-title" data-reveal="mask">
            {beforeAfter.title.before} <span className={styles.highlight}>{beforeAfter.title.highlight}</span>
          </h2>
          {beforeAfter.aside && (
            <p className="section-aside" data-reveal="">
              {beforeAfter.aside}
            </p>
          )}
        </header>

        <div className={styles.compare}>
          {/* Hoy */}
          <div className={styles.side} data-reveal="">
            <div className={styles.phone} aria-hidden="true">
              <div className={`${styles.screen} ${styles.chatScreen}`}>
                <p className={styles.chatHead}>{before.chat.header}</p>
                <div className={styles.chat}>
                  {before.chat.messages.map((m, i) => (
                    <p key={m} style={{ animationDelay: `${i * 140}ms` }}>
                      {m}
                    </p>
                  ))}
                  <span className={styles.late}>{before.chat.late}</span>
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <span className={`${styles.tag} ${styles.tagBad}`}>{before.tag}</span>
              <h3>{before.title}</h3>
              <ul className={styles.list}>
                {before.items.map((item) => (
                  <li key={item}>
                    <span className={styles.bad}>
                      <Close size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <span className={styles.arrow} aria-hidden="true">
            <ArrowRight size={26} />
          </span>

          {/* Con Kodena */}
          <div className={styles.side} data-reveal="" style={{ "--reveal-delay": "200ms" } as CSSProperties}>
            <div className={styles.phone} aria-hidden="true">
              <div className={styles.screen}>
                <p className={styles.status}>
                  <span>9:41</span>
                  <span>●●●</span>
                </p>
                <div className={styles.cover}>
                  <b>{after.phone.name}</b>
                  {after.phone.cover}
                </div>
                <p className={styles.agent}>
                  <b>{after.phone.agent}</b>
                  {after.phone.reply}
                </p>
                <p className={`${styles.agent} ${styles.done}`}>
                  <b>{after.phone.doneTitle}</b>
                  {after.phone.done}
                </p>
              </div>
            </div>
            <div className={styles.text}>
              <span className={`${styles.tag} ${styles.tagGood}`}>{after.tag}</span>
              <h3>{after.title}</h3>
              <ul className={styles.list}>
                {after.items.map((item) => (
                  <li key={item}>
                    <span className={styles.good}>
                      <Check size={15} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.note}>{beforeAfter.note}</p>
      </div>
    </section>
  );
}
