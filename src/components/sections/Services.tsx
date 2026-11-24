"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { hero, services, type KeyLetter } from "@/data/content";
import { KeyCap } from "@/components/ui/KeyCap";
import { toDomain } from "@/lib/domain";
import { SELECT_KEY_EVENT, isTyping, toKeyLetter } from "@/lib/keys";
import { HeroPreview } from "./HeroPreview";
import styles from "./Services.module.css";

const LAST_STEP = 5;

/**
 * Servicios W·A·S·D como pestañas con forma de tecla. Al elegir una, el
 * ejemplo de la derecha se vuelve a armar en vivo con un negocio de muestra.
 * Responden al clic, a las flechas y a W/A/S/D (mientras la sección está en
 * pantalla). Sin JavaScript se ve el ejemplo terminado.
 */
export function Services() {
  const [selected, setSelected] = useState<KeyLetter>("W");
  const [pressed, setPressed] = useState<KeyLetter | null>(null);
  const [step, setStep] = useState(LAST_STEP);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});
  const timers = useRef<number[]>([]);

  const choose = (key: KeyLetter, focus = false) => {
    setSelected(key);
    setPressed(key);
    timers.current.forEach(clearTimeout);
    timers.current = [window.setTimeout(() => setPressed(null), 170)];
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(0);
      for (let s = 1; s <= LAST_STEP; s++) timers.current.push(window.setTimeout(() => setStep(s), 120 + s * 200));
    }
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
    const pending = timers.current;
    window.addEventListener(SELECT_KEY_EVENT, onSelect);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(SELECT_KEY_EVENT, onSelect);
      window.removeEventListener("keydown", onKey);
      pending.forEach(clearTimeout);
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
    <section id="servicios" ref={sectionRef} className="section section-alt" aria-labelledby="servicios-title">
      <div className="container">
        <header className="section-head">
          <h2 id="servicios-title" className="section-title" data-reveal="mask">
            {services.title}
          </h2>
          <p className="section-aside" data-reveal="">
            {services.aside}
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.side}>
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
                  aria-controls="panel-servicio"
                  tabIndex={selected === s.key ? 0 : -1}
                  className={`${styles.tab} ${styles[`tab${s.key}`]}`}
                  onClick={() => choose(s.key)}
                  onKeyDown={onTabKeyDown}
                >
                  <KeyCap letter={s.key} active={selected === s.key} pressed={pressed === s.key} className={styles.cap} />
                  <span className="sr-only">{s.name}</span>
                </button>
              ))}
            </div>

            <div
              key={item.key}
              id="panel-servicio"
              role="tabpanel"
              aria-labelledby={`tab-${item.key}`}
              tabIndex={0}
              className={styles.panel}
            >
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.desc}>{item.description}</p>
              <ul className={styles.tags}>
                {item.tags.map((tag, i) => (
                  <li key={tag} style={{ animationDelay: `${160 + i * 70}ms` }}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.preview} aria-hidden="true" data-reveal="zoom">
            <HeroPreview
              key={item.key}
              service={item.key}
              name={item.sample.name}
              description={item.sample.description}
              domain={toDomain(item.sample.name, hero.defaultDomain)}
              step={step}
              typing={null}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
