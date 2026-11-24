import { comparison, guarantee } from "@/data/content";
import { ArrowRight, Check, Minus } from "@/components/ui/Icons";
import styles from "./Comparison.module.css";

/** Tabla comparativa honesta (sin nombrar a nadie) y la garantía de 60 días. */
export function Comparison() {
  return (
    <section id="comparativa" className="section section-alt" aria-labelledby="comparativa-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">{comparison.eyebrow}</p>
          <h2 id="comparativa-title" className="section-title">
            {comparison.title}
          </h2>
          <p className="section-intro">{comparison.intro}</p>
        </header>

        <div className={styles.tableWrap} data-reveal="">
          <table className={styles.table}>
            <caption className="sr-only">Comparación entre hacerlo tú mismo, una agencia tradicional y WASD</caption>
            <thead>
              <tr>
                <td />
                {comparison.columns.map((col, i) => (
                  <th key={col} scope="col" data-ours={i === 2 ? "" : undefined}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, i) => (
                    <td key={i} data-ours={i === 2 ? "" : undefined}>
                      <span className={styles.cell}>
                        {value.good ? (
                          <span className={styles.yes}>
                            <Check size={12} />
                          </span>
                        ) : (
                          <span className={styles.no}>
                            <Minus size={12} />
                          </span>
                        )}
                        {value.text}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.guarantee} data-reveal="">
          <p className={styles.badge} aria-hidden="true">
            <span>60</span>
            días
          </p>
          <div>
            <h3 className={styles.guaranteeTitle}>{guarantee.title}</h3>
            <p className={styles.guaranteeText}>{guarantee.text}</p>
          </div>
          <a href={guarantee.href} className={`btn btn-outline btn-sm ${styles.guaranteeLink}`}>
            {guarantee.linkLabel}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
