"use client";

import { useEffect, useRef } from "react";
import { bar, statement } from "@/data/content";
import { ArrowDown } from "@/components/ui/Icons";
import styles from "./Statement.module.css";

/**
 * Barra negra + manifiesto. Cada palabra pasa de gris a blanco en orden de
 * lectura mientras la sección cruza la pantalla (borde suave de 3 palabras).
 * Con movimiento reducido, el texto se muestra completo en blanco.
 */
export function Statement() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const words = statement.text.split(" ");

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-w]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => s.style.setProperty("--fill", "1"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 cuando el texto entra por abajo (85 %), 1 cuando su final llega al 45 %.
      const start = vh * 0.85;
      const end = vh * 0.45 - rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const head = progress * (spans.length + 3);
      spans.forEach((span, i) => {
        const fill = Math.min(1, Math.max(0, (head - i) / 3));
        span.style.setProperty("--fill", fill.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className={styles.bar}>
        <p>
          {bar.left.strong} <span className={styles.muted}>{bar.left.muted}</span>
        </p>
        <a href="#manifiesto" className={styles.scroll}>
          {bar.center}
          <span className={styles.scrollDisc}>
            <ArrowDown size={14} />
          </span>
        </a>
        <p className={styles.right}>
          {bar.right.strong} <span className={styles.muted}>{bar.right.muted}</span>
        </p>
      </div>

      <section id="manifiesto" className={styles.section} aria-label="Por qué existimos">
        <p ref={textRef} className={styles.text}>
          {words.map((word, i) => (
            <span key={i} data-w="" className={styles.word}>
              {word}{" "}
            </span>
          ))}
        </p>
        <p className={styles.sub} data-reveal="">
          {statement.sub} <em className={styles.subMuted}>{statement.subMuted}</em>
        </p>
      </section>
    </>
  );
}
