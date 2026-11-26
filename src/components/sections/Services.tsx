import type { CSSProperties } from "react";
import { serviceIcons, services } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, LineIcon } from "@/components/ui/Icons";
import styles from "./Services.module.css";

/** Los cuatro servicios en tarjetas con ícono de línea coral y nombre claro. */
export function Services() {
  return (
    <section id="servicios" className="section" aria-labelledby="servicios-title">
      <div className="container">
        <header className="section-head">
          <h2 id="servicios-title" className="section-title" data-reveal="mask">
            {services.title} <span className="hl">{services.titleHighlight}</span>
          </h2>
          {services.aside && (
            <p className="section-aside" data-reveal="">
              {services.aside}
            </p>
          )}
        </header>

        <ul className={styles.grid}>
          {services.items.map((item, i) => (
            <li key={item.key} className={styles.card} data-reveal="" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
              <span className={styles.icon}>
                <LineIcon name={serviceIcons[item.key]} size={28} />
              </span>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.description}</p>
              <ul className={styles.tags}>
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                href={whatsappUrl({ type: "service", service: item.name })}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ask}
                data-track="whatsapp_click"
                data-track-label={`servicio-${item.key}`}
              >
                {services.cta}
                <span className={styles.askIcon}>
                  <ArrowRight size={16} />
                </span>
                <span className="sr-only">sobre {item.name} (se abre WhatsApp)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
