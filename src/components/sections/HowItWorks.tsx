import type { CSSProperties } from "react";
import { howItWorks } from "@/data/content";
import styles from "./HowItWorks.module.css";

/** Cuatro pasos numerados en una línea (vertical en el celular). */
export function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section} aria-labelledby="como-funciona-title">
      <div className="container">
        <p className="eyebrow">{howItWorks.eyebrow}</p>
        <h2 id="como-funciona-title" className={`section-title ${styles.title}`} data-reveal="">
          {howItWorks.title}
        </h2>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className={styles.step} data-reveal="" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
