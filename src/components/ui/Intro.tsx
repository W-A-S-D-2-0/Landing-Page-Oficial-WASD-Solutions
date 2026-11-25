import { intro } from "@/data/content";
import { MARK, WORD } from "./Logo";
import styles from "./Intro.module.css";

/**
 * Pantalla de entrada (≈2,9 s): sobre petróleo, la K se arma pieza por pieza,
 * «odena» se escribe letra por letra como en un teclado y entra el lema. Al
 * salir, la marca se aleja y se desvanece mientras un círculo se abre desde el
 * centro y deja ver la página. Solo CSS: si falla el JavaScript igual termina
 * sola. Se salta en la misma sesión (clase .intro-seen) y con movimiento
 * reducido.
 */
export function Intro() {
  return (
    <div className={`${styles.intro} on-deep`} aria-hidden="true">
      <div className={styles.center}>
        <div className={styles.brand}>
          <span className={styles.rings}>
            <i />
            <i />
          </span>
          <svg className={styles.logo} viewBox="30 14 270 86">
            <g className={styles.lockup}>
              <g transform="translate(36 20) scale(.74)">
                {MARK.map((p) => (
                  <path key={p.d} className={styles.piece} d={p.d} fill={p.fill} />
                ))}
              </g>
              {WORD.map((d) => (
                <path key={d} className={styles.letter} d={d} fill="var(--logo-ink)" />
              ))}
              <rect className={styles.caret} x="122" y="38" width="4.5" height="40" rx="2" />
            </g>
          </svg>
        </div>
        <p className={styles.tag}>{intro.tagline}</p>
      </div>
    </div>
  );
}
