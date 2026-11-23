import { comparison, guarantee } from "@/data/content";
import { ArrowUpRight, Check, Minus } from "@/components/ui/Icons";
import styles from "./Comparison.module.css";

/** Garantía destacada + tabla comparativa honesta (sin nombrar a nadie). */
export function Comparison() {
  return (
    <section id="comparativa" className={styles.section} aria-labelledby="comparativa-title">
      <div className="container">
        <div className={styles.guarantee} data-reveal="">
          <p className={styles.guaranteeNumber} aria-hidden="true">
            60
          </p>
          <div>
            <h2 className={styles.guaranteeTitle}>{guarantee.title}</h2>
            <p className={styles.guaranteeText}>{guarantee.text}</p>
            <a href={guarantee.href} className={styles.guaranteeLink}>
              {guarantee.linkLabel}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <p className="eyebrow">{comparison.eyebrow}</p>
        <h2 id="comparativa-title" className={`section-title ${styles.title}`} data-reveal="">
          {comparison.title}
        </h2>

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
      </div>
    </section>
  );
}
