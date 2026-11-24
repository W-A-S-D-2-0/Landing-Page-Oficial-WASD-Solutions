import type { CSSProperties } from "react";
import type { KeyLetter } from "@/data/content";
import styles from "./KeyCap.module.css";

/**
 * Tecla con contorno, igual que las del logo: la W en ámbar y el resto en
 * azul petróleo, con su barrita abajo. `active` la marca como elegida y
 * `pressed` la hunde un instante. El tamaño sale de --cap.
 */
export function KeyCap({
  letter,
  active = false,
  pressed = false,
  className,
  style,
}: {
  letter: KeyLetter;
  active?: boolean;
  pressed?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`${styles.cap} ${letter === "W" ? styles.w : ""} ${className ?? ""}`}
      data-active={active ? "" : undefined}
      data-pressed={pressed ? "" : undefined}
      style={style}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}
