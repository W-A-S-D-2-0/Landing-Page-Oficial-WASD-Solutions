import type { CSSProperties } from "react";
import Image from "next/image";
import { hero } from "@/data/content";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, LineIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { HeroDemo } from "./HeroDemo";
import styles from "./Hero.module.css";

const rise = (d: number) => ({ "--d": d }) as CSSProperties;

/**
 * Hero con el estilo del tablero de Kodena: lema con barrita coral, título
 * con «tu negocio» en coral, botón coral a WhatsApp, cuatro garantías con
 * íconos y el enlace al proyecto real. A la derecha, las hojas del isotipo y
 * un ejemplo animado en un celular (HeroDemo), sobre la foto real del equipo
 * cuando exista en hero.photo.
 */
export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.blades} aria-hidden="true">
        <span className={styles.bladeCoral} />
        <span className={styles.bladePeach} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${styles.tagline} ${styles.rise}`}>{hero.tagline}</p>
          <h1 id="hero-title" className={`${styles.title} ${styles.rise}`} style={rise(1)}>
            {hero.title.before} <span className="hl">{hero.title.highlight}</span>
            <span className="sr-only">. {site.description}</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.rise}`} style={rise(2)}>
            {hero.subtitle}
          </p>
          <div className={`${styles.ctas} ${styles.rise}`} style={rise(3)}>
            <a
              href={whatsappUrl({ type: "demo" })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-track="demo_cta_click"
              data-track-label="hero"
            >
              <WhatsAppIcon size={22} />
              {hero.primaryCta}
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
            <a href="#servicios" className="btn btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
          <ul className={`${styles.features} ${styles.rise}`} style={rise(4)}>
            {hero.features.map((f) => (
              <li key={f.text}>
                <LineIcon name={f.icon} size={28} className={styles.featureIcon} />
                {f.text}
              </li>
            ))}
          </ul>
          <a href="#proyectos" className={`${styles.project} ${styles.rise}`} style={rise(5)}>
            <small>{hero.projectCard.tag}</small>
            <b>{hero.projectCard.title}</b>
            <span>{hero.projectCard.text}</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.visual}>
          {hero.photo && (
            <div className={styles.photo}>
              <Image src={hero.photo.src} alt={hero.photo.alt} fill sizes="(max-width: 1060px) 100vw, 520px" priority />
            </div>
          )}

          <HeroDemo />
        </div>
      </div>
    </section>
  );
}
