import type { CSSProperties } from "react";
import { intro, type KeyLetter } from "@/data/content";
import { KeyCap } from "./KeyCap";
import styles from "./Intro.module.css";

const KEYS: KeyLetter[] = ["W", "A", "S", "D"];

/**
 * Pantalla de entrada (≈2 s): las teclas del logo caen una a una, aparece la
 * marca, se llena la barra y la página se descubre con un círculo que se
 * abre desde el centro. Solo CSS: si falla el JavaScript igual termina sola.
 * Se salta en la misma sesión (clase .intro-seen) y con movimiento reducido.
 */
export function Intro() {
  return (
    <div className={`${styles.intro} on-deep`} aria-hidden="true">
      <div className={styles.center}>
        <span className={styles.rings}>
          <i />
          <i />
        </span>
        <span className={styles.keys}>
          {KEYS.map((k, i) => (
            <KeyCap key={k} letter={k} className={styles.key} style={{ "--k": i } as CSSProperties} />
          ))}
        </span>
        <p className={styles.word}>
          WASD <span>Solutions</span>
        </p>
        <p className={styles.tag}>{intro.tagline}</p>
      </div>
      <span className={styles.bar} />
    </div>
  );
}
