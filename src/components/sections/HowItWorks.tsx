import type { CSSProperties } from "react";
import { howItWorks } from "@/data/content";
import styles from "./HowItWorks.module.css";

/** Cuatro pasos numerados unidos por una línea (vertical en el celular). */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="section" aria-labelledby="como-funciona-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">{howItWorks.eyebrow}</p>
          <h2 id="como-funciona-title" className="section-title">
            {howItWorks.title}
          </h2>
          <p className="section-intro">{howItWorks.intro}</p>
        </header>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className={styles.step} data-reveal="" style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}>
              <span className={styles.number} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
