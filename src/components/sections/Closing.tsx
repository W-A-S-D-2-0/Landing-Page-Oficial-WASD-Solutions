import { faq } from "@/data/faq";
import { faqSection, finalCta } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, Plus } from "@/components/ui/Icons";
import { LogoMark } from "@/components/ui/Logo";
import styles from "./Closing.module.css";

/** Preguntas frecuentes (acordeón nativo con <details>). */
export function Faq() {
  return (
    <section id="preguntas" className="section section-alt" aria-labelledby="preguntas-title">
      <div className={`container ${styles.faqGrid}`}>
        <header>
          <p className="eyebrow">{faqSection.eyebrow}</p>
          <h2 id="preguntas-title" className="section-title">
            {faqSection.title}
          </h2>
          <p className={styles.more}>
            {faqSection.more}{" "}
            <a href={whatsappUrl({ type: "general" })} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="faq">
              {faqSection.moreCta}
            </a>
          </p>
        </header>
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

/** Llamado final: bloque azul petróleo con el logo y el botón a WhatsApp. */
export function FinalCta() {
  return (
    <section className="section" aria-labelledby="final-title">
      <div className="container">
        <div className={styles.final} data-reveal="">
          <div className={styles.finalMark} aria-hidden="true">
            <LogoMark width={150} />
          </div>
          <div className={styles.finalCopy}>
            <h2 id="final-title" className={styles.finalTitle}>
              {finalCta.title}
            </h2>
            <p className={styles.finalText}>{finalCta.text}</p>
            <div className={styles.finalActions}>
              <a
                href={whatsappUrl({ type: "demo" })}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.finalPrimary}`}
                data-track="whatsapp_click"
                data-track-label="cta-final"
              >
                {finalCta.button}
                <ArrowRight size={17} />
                <span className="sr-only">(se abre WhatsApp)</span>
              </a>
              <a href="#diagnostico" className={`btn ${styles.finalGhost}`} data-track="demo_cta_click" data-track-label="cta-final-form">
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
