import { faq } from "@/data/faq";
import { faqSection, finalCta } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Plus } from "@/components/ui/Icons";
import styles from "./Closing.module.css";

/** Preguntas frecuentes (acordeón nativo con <details>). */
export function Faq() {
  return (
    <section id="preguntas" className={styles.faq} aria-labelledby="preguntas-title">
      <div className={`container ${styles.faqGrid}`}>
        <div>
          <p className="eyebrow">{faqSection.eyebrow}</p>
          <h2 id="preguntas-title" className={`section-title ${styles.faqTitle}`} data-reveal="">
            {faqSection.title}
          </h2>
        </div>
        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.question} className={styles.item}>
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

/** Llamado final: título enorme en Archivo ancho y el botón a WhatsApp. */
export function FinalCta() {
  return (
    <section className={styles.final} aria-labelledby="final-title">
      <div className="container">
        <h2 id="final-title" className={styles.finalTitle} data-reveal="">
          {finalCta.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <div className={styles.finalRow}>
          <p className={styles.finalText}>{finalCta.text}</p>
          <div className={styles.finalActions}>
            <a
              href={whatsappUrl({ type: "demo" })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
              data-track="whatsapp_click"
              data-track-label="cta-final"
            >
              {finalCta.button}
              <span className="btn-arrow">
                <ArrowUpRight size={15} />
              </span>
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
            <a href="#diagnostico" className="btn btn-ghost" data-track="demo_cta_click" data-track-label="cta-final-form">
              {finalCta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
