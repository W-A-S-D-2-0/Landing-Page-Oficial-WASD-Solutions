import type { CSSProperties } from "react";
import { guarantee, hero, oneTeam } from "@/data/content";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowUpRight } from "@/components/ui/Icons";
import { KeyCap } from "@/components/ui/KeyCap";
import styles from "./OneTeam.module.css";

/**
 * Panel con borde fino (el "Trusted by" del diseño original). En lugar de
 * cifras de clientes que no tenemos, muestra condiciones reales de la oferta:
 * cuatro servicios, la garantía de 60 días y el reporte semanal (ejemplo).
 */
export function OneTeam() {
  const { keysCard, guaranteeCard, reportCard } = oneTeam;

  return (
    <section className={styles.section} aria-labelledby="one-team-title">
      <div className={styles.panel} data-reveal="">
        <div className={styles.intro}>
          <h2 id="one-team-title" className={styles.title}>
            {oneTeam.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <span className={`${styles.tile} ${styles.tileA}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="40%" height="40%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
            </svg>
          </span>
          <span className={`${styles.tile} ${styles.tileB}`} aria-hidden="true">
            <span className={styles.dots}>
              <span />
              <span />
              <span />
              <span />
            </span>
          </span>
          <p className={styles.text}>{oneTeam.text}</p>
        </div>

        <div className={styles.cards}>
          <article className={`${styles.card} ${styles.keysCard}`}>
            <div className={styles.keysGrid}>
              {hero.keys.map(({ key }, i) => (
                <KeyCap key={key} letter={key} className={styles.miniCap} style={{ "--i": i } as CSSProperties} />
              ))}
            </div>
            <p className={styles.cardValue}>
              <CountUp value={Number(keysCard.value)} duration={900} /> {keysCard.unit}
            </p>
            <p className={styles.cardLabel}>{keysCard.label}</p>
          </article>

          <article className={`${styles.card} ${styles.guaranteeCard}`}>
            <p className={styles.cardValue}>
              <CountUp value={Number(guaranteeCard.value)} /> {guaranteeCard.unit}
            </p>
            <p className={styles.cardLabel}>{guaranteeCard.label}</p>
            <svg className={styles.seal} viewBox="0 0 160 120" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.75">
                <path d="M46 98c-18-12-26-34-20-58" />
                <path d="M114 98c18-12 26-34 20-58" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <ellipse cx={30 - i * 0.6} cy={88 - i * 12} rx="7" ry="3.2" transform={`rotate(${-50 + i * 14} ${30 - i * 0.6} ${88 - i * 12})`} />
                    <ellipse cx={130 + i * 0.6} cy={88 - i * 12} rx="7" ry="3.2" transform={`rotate(${50 - i * 14} ${130 + i * 0.6} ${88 - i * 12})`} />
                  </g>
                ))}
              </g>
              <text x="80" y="48" textAnchor="middle" className={styles.sealSmall}>
                {guaranteeCard.sealTop.toUpperCase()}
              </text>
              <text x="80" y="72" textAnchor="middle" className={styles.sealMain}>
                {guaranteeCard.sealMain}
              </text>
              <text x="80" y="90" textAnchor="middle" className={styles.sealSmall}>
                {guaranteeCard.sealBottom.toUpperCase()}
              </text>
            </svg>
            <p className={styles.note}>{guaranteeCard.note}</p>
            <a href={guarantee.href} className={styles.cardLink}>
              {guarantee.linkLabel}
              <ArrowUpRight size={13} />
            </a>
          </article>

          <article className={`${styles.card} ${styles.reportCard}`} aria-label={`${reportCard.eyebrow} (${reportCard.note})`}>
            <p className={styles.reportEyebrow}>{reportCard.eyebrow}</p>
            <ul className={styles.reportRows}>
              {reportCard.rows.map((row, i) => (
                <li key={row}>
                  <span>{row}</span>
                  <span className={styles.reportBar} style={{ "--w": `${82 - i * 22}%` } as CSSProperties} />
                </li>
              ))}
            </ul>
            <p className={styles.reportNote}>{reportCard.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
