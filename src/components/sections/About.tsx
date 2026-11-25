import type { CSSProperties } from "react";
import { about } from "@/data/content";
import { LineIcon } from "@/components/ui/Icons";
import styles from "./About.module.css";

/** Quiénes somos: la frase de la marca y sus tres valores. */
export function About() {
  return (
    <section id="nosotros" className="section" aria-labelledby="nosotros-title">
      <div className={`container ${styles.grid}`}>
        <header className="section-head">
          <h2 id="nosotros-title" className="section-title" data-reveal="mask">
            {about.title}
          </h2>
          <p className={styles.text} data-reveal="">
            {about.text}
          </p>
        </header>
        <ul className={styles.values}>
          {about.values.map((v, i) => (
            <li key={v.title} data-reveal="" style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}>
              <span className={styles.icon}>
                <LineIcon name={v.icon} size={26} />
              </span>
              <span>
                <b>{v.title}</b>
                {v.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
