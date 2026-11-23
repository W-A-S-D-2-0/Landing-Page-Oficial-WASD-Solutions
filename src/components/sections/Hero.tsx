import type { CSSProperties } from "react";
import { hero } from "@/data/content";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import { LimaClock } from "@/components/ui/LimaClock";
import { LogoMark } from "@/components/ui/Logo";
import { HeroKeys } from "./HeroKeys";
import styles from "./Hero.module.css";

/**
 * Hero editorial sobre papel gris (diseño base: Orvante, de MotionSites).
 * La foto del original se reemplaza por las cuatro teclas W·A·S·D, que son la
 * marca; la placa oscura con el nombre va sobre ellas.
 */
export function Hero() {
  const offerHours = Number.parseInt(hero.offer.value, 10);

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.clock}>
        <LimaClock city={hero.clockLabel} />
      </p>

      <h1 id="hero-title" className={styles.title}>
        {hero.titleLines.map((line, i) => (
          <span key={line} className={styles.line} style={{ "--i": i } as CSSProperties}>
            <span className={styles.lineInner}>
              {line}
              {i === 0 && <sup className={styles.mark}>{hero.titleMark}</sup>}
            </span>
          </span>
        ))}
        <span className="sr-only">: {site.description}</span>
      </h1>

      <div className={`${styles.about} ${styles.rise}`} style={{ "--d": 1 } as CSSProperties}>
        <p className="eyebrow">{hero.eyebrow}</p>
        <p className={styles.aboutText}>{hero.about}</p>
        <a href="#diagnostico" className="btn" data-track="demo_cta_click" data-track-label="hero">
          {hero.primaryCta}
          <span className="btn-arrow">
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>

      <div className={styles.visual}>
        <HeroKeys />
        <div className={styles.plate} aria-hidden="true">
          <LogoMark size={26} />
          <span className={styles.plateName}>{hero.plate}</span>
          <span className={styles.plateMenu}>
            <span />
            <span />
          </span>
        </div>
        <p className={styles.strip}>
          {hero.strip.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>

      <div className={styles.frame}>
        <div className={`${styles.offer} ${styles.rise}`} style={{ "--d": 4 } as CSSProperties}>
          <p className={styles.offerValue}>
            <CountUp value={offerHours} delay={400} /> h
          </p>
          <p className={styles.offerLabel}>{hero.offer.label}</p>
          <ul className={styles.offerKeys} aria-label="Incluye">
            {hero.offer.keys.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
          <a
            href={whatsappUrl({ type: "demo" })}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.offerBar}
            data-track="whatsapp_click"
            data-track-label="hero-oferta"
          >
            {hero.offer.cta}
            <ArrowUpRight size={14} />
            <span className="sr-only">(se abre WhatsApp)</span>
          </a>
        </div>
        <div className={`${styles.entry} ${styles.rise}`} style={{ "--d": 5 } as CSSProperties}>
          <p className={styles.entryTag}>{hero.entry.tag}</p>
          <p className={styles.entryValue}>{hero.entry.value}</p>
          <p className={styles.entryLabel}>{hero.entry.label}</p>
        </div>
      </div>

      <div className={styles.side}>
        <p className={`${styles.badge} ${styles.rise}`} style={{ "--d": 2 } as CSSProperties}>
          <span className={styles.badgeDisc}>
            <Check size={13} />
          </span>
          {hero.badge}
        </p>

        <p className={`${styles.available} ${styles.rise}`} style={{ "--d": 3 } as CSSProperties}>
          {hero.availability.top}
          <br />
          <span className={styles.availableDot} aria-hidden="true" /> {hero.availability.bottom}
        </p>

        <a href={hero.now.href} className={`${styles.now} ${styles.rise}`} style={{ "--d": 6 } as CSSProperties}>
          <span className={styles.nowHead}>
            <span className={styles.nowEyebrow}>{hero.now.eyebrow}</span>
            <span className={styles.nowTitle}>{hero.now.title}</span>
            <span className={styles.nowYear}>{hero.now.year}</span>
          </span>
          <span className={styles.nowCard} aria-hidden="true">
            <span className={styles.nowMock}>
              <span className={styles.nowMockBar} />
              <span className={styles.nowMockTitle}>Café de especialidad</span>
              <span className={styles.nowMockLine} />
              <span className={styles.nowMockLine} style={{ width: "58%" }} />
              <span className={styles.nowMockBtn}>Reservar mesa</span>
            </span>
            <span className={styles.nowArrow}>
              <ArrowUpRight size={16} />
            </span>
          </span>
          <span className={styles.nowProgress} aria-hidden="true">
            <span />
          </span>
        </a>
      </div>
    </section>
  );
}
