import type { CSSProperties } from "react";
import { demos } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import styles from "./Demos.module.css";

/**
 * Demos por sector, rotuladas como "Demo": no son clientes reales.
 * Cada tarjeta trae una mini web en gris y un botón para pedir una igual.
 */
export function Demos() {
  return (
    <section id="demos" className={styles.section} aria-labelledby="demos-title">
      <div className="container">
        <header className={styles.head}>
          <div>
            <p className="eyebrow">{demos.eyebrow}</p>
            <h2 id="demos-title" className={`section-title ${styles.title}`} data-reveal="">
              {demos.title}
            </h2>
          </div>
          <p className={styles.intro}>{demos.intro}</p>
        </header>

        <ul className={styles.grid}>
          {demos.items.map((demo, i) => (
            <li key={demo.id} className={styles.card} data-reveal="" style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}>
              <div className={styles.screen} aria-hidden="true">
                <div className={styles.site}>
                  <div className={styles.siteNav}>
                    <span className={styles.siteBrand}>{demo.mock.brand}</span>
                    <span className={styles.siteDots}>
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  <p className={styles.siteHeadline}>{demo.mock.headline}</p>
                  <span className={styles.siteBtn}>{demo.mock.action}</span>
                  <ul className={styles.siteRows}>
                    {demo.mock.rows.map((row) => (
                      <li key={row}>{row}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.body}>
                <p className={styles.label}>{demo.label}</p>
                <h3 className={styles.sector}>{demo.sector}</h3>
                <ul className={styles.includes}>
                  {demo.includes.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl({ type: "demoPage", demoName: demo.label.replace(/^Demo · /, "") })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-ghost ${styles.cta}`}
                  data-track="whatsapp_click"
                  data-track-label={`demo-${demo.id}`}
                >
                  {demos.cta}
                  <ArrowUpRight size={15} />
                  <span className="sr-only">(se abre WhatsApp)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{demos.priceNote}</p>
      </div>
    </section>
  );
}
