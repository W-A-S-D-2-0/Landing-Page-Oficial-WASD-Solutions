import type { CSSProperties } from "react";
import Link from "next/link";
import { guarantee, howItWorks } from "@/data/content";
import { ArrowRight, LineIcon } from "@/components/ui/Icons";
import styles from "./HowItWorks.module.css";

/** Cuatro pasos en una línea que se dibuja al entrar, y la garantía. */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="section" aria-labelledby="como-funciona-title">
      <div className="container">
        <header className="section-head">
          <h2 id="como-funciona-title" className="section-title" data-reveal="mask">
            {howItWorks.title}
          </h2>
          <p className="section-aside" data-reveal="">
            {howItWorks.aside}
          </p>
        </header>

        <ol className={styles.steps} data-reveal="">
          {howItWorks.steps.map((step, i) => (
            <li key={step.title} className={styles.step} style={{ "--i": i } as CSSProperties}>
              <span className={styles.number} aria-hidden="true">
                <LineIcon name={step.icon} size={26} />
              </span>
              <p className={styles.stepNo} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.guarantee} data-reveal="">
          <span className={styles.days} aria-hidden="true">
            <LineIcon name="shield" size={40} />
          </span>
          <p>
            <b>{guarantee.title}</b>
            {guarantee.text}
          </p>
          <Link href={guarantee.href} className={styles.link}>
            {guarantee.linkLabel}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
