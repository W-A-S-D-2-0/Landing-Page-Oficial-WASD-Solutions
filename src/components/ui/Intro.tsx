import { intro } from "@/data/content";
import { Logo } from "./Logo";
import styles from "./Intro.module.css";

/**
 * Pantalla de entrada (≈2 s): la K de Kodena se arma pieza por pieza (la
 * barra sube, entran la hoja coral y la durazno), aparece el nombre y el
 * lema, y la página se descubre con un círculo que se abre desde el centro.
 * Solo CSS: si falla el JavaScript igual termina sola. Se salta en la misma
 * sesión (clase .intro-seen) y con movimiento reducido.
 */
export function Intro() {
  return (
    <div className={`${styles.intro} on-deep`} aria-hidden="true">
      <div className={styles.center}>
        <span className={styles.rings}>
          <i />
          <i />
        </span>
        <Logo width={300} title="" className={styles.logo} />
        <p className={styles.tag}>{intro.tagline}</p>
      </div>
      <span className={styles.bar} />
    </div>
  );
}
