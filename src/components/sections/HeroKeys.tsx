"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyLetter } from "@/data/content";
import { hero } from "@/data/content";
import { KeyCap } from "@/components/ui/KeyCap";
import { isTyping, selectServiceKey, toKeyLetter } from "@/lib/keys";
import styles from "./Hero.module.css";

/**
 * Las cuatro teclas del hero. Al cargar se presionan en orden W·A·S·D;
 * luego responden al teclado físico y, al tocarlas, llevan a ese servicio.
 */
export function HeroKeys() {
  const [pressed, setPressed] = useState<KeyLetter | null>(null);
  const timer = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const press = (key: KeyLetter) => {
    setPressed(key);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPressed(null), 170);
  };

  // Secuencia de entrada: W, A, S, D (después de que las teclas suben).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const order: KeyLetter[] = ["W", "A", "S", "D"];
    const timers = order.map((key, i) => window.setTimeout(() => press(key), 1350 + i * 190));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Teclado físico, mientras el hero está en pantalla.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
      const key = toKeyLetter(event.key);
      const root = rootRef.current;
      if (!key || !root) return;
      const rect = root.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      press(key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={rootRef} className={styles.keys}>
      {hero.keys.map(({ key, label }) => (
        <a
          key={key}
          href="#servicios"
          className={`${styles.keyLink} ${styles[`key${key}`]}`}
          onClick={() => {
            press(key);
            selectServiceKey(key);
          }}
          aria-label={`${key}: ${label}. Ver este servicio`}
        >
          <KeyCap letter={key} label={label} pressed={pressed === key} className={styles.cap} />
        </a>
      ))}
      <p className={styles.keysHint} aria-hidden="true">
        {hero.keysHint}
      </p>
    </div>
  );
}
