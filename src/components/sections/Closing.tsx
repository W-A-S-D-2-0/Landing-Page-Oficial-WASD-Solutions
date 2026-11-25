import type { CSSProperties } from "react";
import { faq } from "@/data/faq";
import { faqSection } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { Plus } from "@/components/ui/Icons";
import styles from "./Closing.module.css";

/** Preguntas frecuentes (acordeón nativo con <details>). */
export function Faq() {
  return (
    <section id="preguntas" className="section section-alt" aria-labelledby="preguntas-title">
      <div className={`container ${styles.faqGrid}`}>
        <header className="section-head">
          <h2 id="preguntas-title" className="section-title" data-reveal="mask">
            {faqSection.title}
          </h2>
          <p className={styles.more} data-reveal="">
            {faqSection.more}{" "}
            <a href={whatsappUrl({ type: "general" })} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="faq">
              {faqSection.moreCta}
            </a>
          </p>
        </header>
        <div className={styles.list}>
          {faq.map((item, i) => (
            <details key={item.question} className={styles.item} data-reveal="" style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}>
              <summary className={styles.question}>
                {item.question}
                <span className={styles.toggle} aria-hidden="true">
                  <Plus size={16} />
                </span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
