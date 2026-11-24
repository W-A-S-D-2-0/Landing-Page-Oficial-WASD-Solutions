import type { CSSProperties } from "react";
import { hero, trustStrip } from "@/data/content";
import { site } from "@/data/site";
import { ArrowRight, BarChart, Check, Clock } from "@/components/ui/Icons";
import styles from "./Hero.module.css";

const stripIcons = { check: Check, clock: Clock, chart: BarChart } as const;

/**
 * Hero "producto al frente": el mensaje a la izquierda y, a la derecha, lo que
 * recibe el cliente (su web en el celular, la recepcionista con IA y el
 * reporte semanal). Debajo, la franja con las tres garantías.
 */
export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${styles.badge} ${styles.rise}`}>
            <b>{hero.badge.tag}</b> {hero.badge.text}
          </p>
          <h1 id="hero-title" className={`${styles.title} ${styles.rise}`} style={{ "--d": 1 } as CSSProperties}>
            {hero.title.before} <span className={styles.highlight}>{hero.title.highlight}</span>
            <span className="sr-only">. {site.description}</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.rise}`} style={{ "--d": 2 } as CSSProperties}>
            {hero.subtitle}
          </p>
          <div className={`${styles.ctas} ${styles.rise}`} style={{ "--d": 3 } as CSSProperties}>
            <a href="#diagnostico" className="btn btn-primary" data-track="demo_cta_click" data-track-label="hero">
              {hero.primaryCta}
              <ArrowRight size={17} />
            </a>
            <a href="#proyectos" className="btn btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
          <ul className={`${styles.checks} ${styles.rise}`} style={{ "--d": 4 } as CSSProperties}>
            {hero.guarantees.map((g) => (
              <li key={g}>
                <span className={styles.checkDot}>
                  <Check size={12} />
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.stage} role="img" aria-label={hero.mockLabel}>
          <svg className={styles.net} viewBox="0 0 560 600" preserveAspectRatio="none" aria-hidden="true">
            <path d="M380 190 C 460 190, 480 120, 520 80" />
            <path d="M140 450 C 80 450, 50 360, 30 280" />
            <path d="M440 420 C 490 470, 520 510, 540 560" />
            <circle cx="520" cy="80" r="6" />
            <circle cx="30" cy="280" r="6" />
            <circle cx="540" cy="560" r="6" />
          </svg>

          <div className={styles.phone}>
            <div className={styles.screen}>
              <div className={styles.siteTop}>
                <small>{hero.phone.place}</small>
                <strong>{hero.phone.headline}</strong>
              </div>
              <div className={styles.siteBody}>
                <span className={styles.siteBtn}>{hero.phone.action}</span>
                {hero.phone.menu.map((item) => (
                  <span key={item.name} className={styles.menuRow}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.chat}`}>
            <div className={styles.chatHead}>
              <span className={styles.chatAvatar}>
                <Check size={15} />
              </span>
              <span>
                {hero.chat.name}
                <small>{hero.chat.status}</small>
              </span>
            </div>
            {hero.chat.messages.map((m, i) => (
              <p key={m.text} className={`${styles.bubble} ${m.from === "agent" ? styles.out : styles.in}`} style={{ "--b": i } as CSSProperties}>
                {m.text}
              </p>
            ))}
            <p className={styles.confirm}>
              <Check size={14} />
              {hero.chat.confirmation}
            </p>
          </div>

          <div className={`${styles.card} ${styles.report}`}>
            <p className={styles.reportTitle}>{hero.report.title}</p>
            <p className={styles.reportNote}>{hero.report.note}</p>
            {hero.report.rows.map((row, i) => (
              <p key={row} className={styles.bar}>
                {row}
                <span style={{ "--w": `${88 - i * 24}%`, "--b": i } as CSSProperties} data-accent={i === 1 ? "" : undefined} />
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <ul className={styles.strip}>
          {trustStrip.map((item, i) => {
            const Icon = stripIcons[item.icon];
            return (
              <li key={item.title} data-reveal="" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
                <span className={styles.stripIcon}>
                  <Icon size={20} />
                </span>
                <span>
                  <b>{item.title}</b>
                  <span>{item.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
