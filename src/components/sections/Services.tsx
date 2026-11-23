"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { services, type KeyLetter } from "@/data/content";
import { Check } from "@/components/ui/Icons";
import { KeyCap } from "@/components/ui/KeyCap";
import { SELECT_KEY_EVENT, isTyping, toKeyLetter } from "@/lib/keys";
import styles from "./Services.module.css";

/**
 * Servicios W·A·S·D como pestañas accesibles con forma de tecla.
 * Responden al clic, a las flechas, a W/A/S/D en el teclado (mientras la
 * sección está en pantalla) y a las teclas del hero.
 */
export function Services() {
  const [selected, setSelected] = useState<KeyLetter>("W");
  const [pressed, setPressed] = useState<KeyLetter | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const pressTimer = useRef(0);

  const choose = (key: KeyLetter, focus = false) => {
    setSelected(key);
    setPressed(key);
    clearTimeout(pressTimer.current);
    pressTimer.current = window.setTimeout(() => setPressed(null), 170);
    if (focus) tabsRef.current[key]?.focus();
  };

  useEffect(() => {
    const onSelect = (event: Event) => {
      const key = (event as CustomEvent<KeyLetter>).detail;
      if (key) choose(key);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
      const key = toKeyLetter(event.key);
      const section = sectionRef.current;
      if (!key || !section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.6 || rect.bottom < window.innerHeight * 0.3) return;
      choose(key);
    };
    window.addEventListener(SELECT_KEY_EVENT, onSelect);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(SELECT_KEY_EVENT, onSelect);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const onTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const keys = services.items.map((s) => s.key);
    const index = keys.indexOf(selected);
    const map: Record<string, number> = {
      ArrowRight: (index + 1) % keys.length,
      ArrowLeft: (index - 1 + keys.length) % keys.length,
      Home: 0,
      End: keys.length - 1,
    };
    if (event.key in map) {
      event.preventDefault();
      choose(keys[map[event.key]], true);
    }
  };

  const item = services.items.find((s) => s.key === selected) ?? services.items[0];

  return (
    <section id="servicios" ref={sectionRef} className={styles.section} aria-labelledby="servicios-title">
      <div className="container">
        <header className={styles.head} data-reveal="">
          <div>
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="servicios-title" className={`section-title ${styles.title}`}>
              {services.title}
            </h2>
          </div>
          <p className={styles.intro}>{services.intro}</p>
        </header>

        <div role="tablist" aria-label={services.tablistLabel} className={styles.tabs} data-reveal="">
          {services.items.map((s) => (
            <button
              key={s.key}
              ref={(el) => {
                tabsRef.current[s.key] = el;
              }}
              id={`tab-${s.key}`}
              role="tab"
              type="button"
              aria-selected={selected === s.key}
              aria-controls={`panel-${s.key}`}
              tabIndex={selected === s.key ? 0 : -1}
              className={styles.tab}
              onClick={() => choose(s.key)}
              onKeyDown={onTabKeyDown}
            >
              <KeyCap
                letter={s.key}
                tone={selected === s.key ? "light" : "dark"}
                pressed={pressed === s.key || selected === s.key}
                className={styles.cap}
              />
              <span className={styles.tabName}>{s.name}</span>
            </button>
          ))}
        </div>
        <p className={styles.hint}>{services.hint}</p>

        <div
          key={item.key}
          id={`panel-${item.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.key}`}
          tabIndex={0}
          className={styles.panel}
        >
          <div className={styles.panelText}>
            <p className={styles.panelKey} aria-hidden="true">
              {item.key}
            </p>
            <h3 className={styles.panelName}>{item.name}</h3>
            <p className={styles.panelDesc}>{item.description}</p>
            <ul className={styles.benefits}>
              {item.benefits.map((b) => (
                <li key={b}>
                  <span className={styles.check}>
                    <Check size={13} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.preview} aria-label={`Vista de ejemplo: ${item.preview.title}`}>
            <p className={styles.previewTitle}>{item.preview.title}</p>
            <ul className={styles.previewLines}>
              {item.preview.lines.map((line, i) => (
                <li key={line} style={{ animationDelay: `${120 + i * 90}ms` }} data-chat={item.key === "A" ? (i % 2 ? "out" : "in") : undefined}>
                  {line}
                </li>
              ))}
            </ul>
            <p className={styles.previewNote}>Ejemplo ilustrativo</p>
          </div>
        </div>

        <p className={styles.closing} data-reveal="">
          {services.closing}
        </p>
      </div>
    </section>
  );
}
