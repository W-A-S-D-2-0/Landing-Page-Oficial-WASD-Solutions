import type { CSSProperties } from "react";
import Image from "next/image";
import { about } from "@/data/content";
import styles from "./About.module.css";

/** Altura de los nudos de cada hilo: uno, dos y tres. */
const KNOTS = [[34], [24, 41], [16, 31, 45]];

/** Cuándo cae cada hilo después de que la foto se ve, en milisegundos. */
const threadDelay = (index: number) => ({ "--d": `${900 + index * 300}ms` }) as CSSProperties;

/**
 * Quiénes somos: el texto a un lado y, al otro, la foto de los tres sobre las
 * hojas del isotipo. De la foto cuelga una cuerda con nudos, como un quipu, con
 * un hilo y una palabra bajo cada integrante. La cuerda se tiende y los hilos
 * bajan una sola vez, al llegar a la sección.
 */
export function About() {
  return (
    <section id="nosotros" className="section" aria-labelledby="nosotros-title">
      <div className={`container ${styles.grid}`}>
        <header className="section-head">
          <p className={styles.eyebrow} data-reveal="">
            {about.eyebrow}
          </p>
          <h2 id="nosotros-title" className="section-title" data-reveal="mask">
            {about.title}
          </h2>
          <p className={styles.text} data-reveal="">
            {about.text}
          </p>
        </header>

        <div className={styles.team} data-reveal="">
          <div className={styles.picture}>
            <span className={styles.leafCoral} aria-hidden="true" />
            <span className={styles.leafPeach} aria-hidden="true" />
            <div className={styles.photo}>
              {about.photo ? (
                <Image src={about.photo.src} alt={about.photo.alt} fill sizes="(max-width: 900px) 100vw, 640px" />
              ) : (
                <p className={styles.pending}>{about.photoPending}</p>
              )}
            </div>
          </div>

          <span className={styles.rope} aria-hidden="true" />
          <ul className={styles.members}>
            {about.verbs.map((verb, index) => (
              <li key={verb} style={threadDelay(index)}>
                <svg width="20" height="52" viewBox="0 0 20 52" aria-hidden="true">
                  <path pathLength="1" d="M10 0V50" />
                  {KNOTS[index % KNOTS.length].map((y) => (
                    <circle key={y} cx="10" cy={y} r="5.5" />
                  ))}
                </svg>
                <b>{verb}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
