import type { CSSProperties } from "react";
import type { KeyLetter } from "@/data/content";
import styles from "./KeyCap.module.css";

/**
 * Tecla de teclado dibujada con CSS (monocroma). `pressed` la hunde.
 * Se usa en el hero, en servicios y en el panel "un solo equipo".
 */
export function KeyCap({
  letter,
  label,
  pressed = false,
  tone = "light",
  className,
  style,
}: {
  letter: KeyLetter;
  label?: string;
  pressed?: boolean;
  tone?: "light" | "dark";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`${styles.cap} ${tone === "dark" ? styles.dark : ""} ${className ?? ""}`}
      data-pressed={pressed ? "" : undefined}
      style={style}
      aria-hidden="true"
    >
      <span className={styles.face}>
        <span className={styles.letter}>{letter}</span>
        {label && <span className={styles.label}>{label}</span>}
      </span>
    </span>
  );
}
