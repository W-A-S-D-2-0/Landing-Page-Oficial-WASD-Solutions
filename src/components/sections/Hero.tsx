"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { hero, trustStrip, type KeyLetter } from "@/data/content";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, BarChart, Check, Clock } from "@/components/ui/Icons";
import { KeyCap } from "@/components/ui/KeyCap";
import { HeroPreview } from "./HeroPreview";
import styles from "./Hero.module.css";

const stripIcons = { check: Check, clock: Clock, chart: BarChart } as const;
const LAST_STEP = 5;

/** "Dulce Antojo" → "dulceantojo.pe" */
function toDomain(name: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 22);
  return slug ? `${slug}.pe` : hero.defaultDomain;
}

/**
 * Hero "tu solución, en vivo". El visitante escribe el nombre de su negocio,
 * a qué se dedica y qué necesita (W, A, S o D); a la derecha se arma un
 * ejemplo según el servicio. Sin datos, la demo automática recorre negocios
 * de rubros variados, cada uno con un servicio distinto.
 */
export function Hero() {
  const [mode, setMode] = useState<"auto" | "user">("auto");
  const [sampleIdx, setSampleIdx] = useState(0);
  const [service, setService] = useState<KeyLetter>(hero.samples[0].service);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState<"name" | "description" | null>(null);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);

  const serviceData = hero.services.find((s) => s.key === service) ?? hero.services[0];

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  // Pausa la demo cuando el hero no está en pantalla.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Demo automática: escribe nombre y descripción, arma el ejemplo y pasa al siguiente negocio.
  useEffect(() => {
    if (mode !== "auto" || !inView) return;
    const sample = hero.samples[sampleIdx];
    // Con movimiento reducido: el ejemplo aparece terminado, sin escribir ni rotar.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      later(() => {
        setService(sample.service);
        setName(sample.name);
        setDescription(sample.description);
        setStep(LAST_STEP);
      }, 0);
      return clearTimers;
    }
    let t = 300;
    later(() => {
      setService(sample.service);
      setStep(0);
      setName("");
      setDescription("");
      setTyping("name");
    }, 0);
    for (let i = 1; i <= sample.name.length; i++) {
      later(() => setName(sample.name.slice(0, i)), t);
      t += 70;
    }
    t += 150;
    later(() => {
      setStep(1);
      setTyping("description");
    }, t);
    for (let i = 1; i <= sample.description.length; i++) {
      later(() => setDescription(sample.description.slice(0, i)), t);
      t += 30;
    }
    later(() => setTyping(null), t);
    for (let s = 2; s <= LAST_STEP; s++) {
      t += 600;
      later(() => setStep(s), t);
    }
    later(() => setSampleIdx((i) => (i + 1) % hero.samples.length), t + 3600);
    return clearTimers;
  }, [mode, sampleIdx, inView]);

  /** Rearma el ejemplo rápido (cuando el visitante cambia el servicio o empieza a escribir). */
  const rebuild = useCallback(() => {
    clearTimers();
    setTyping(null);
    setStep(0);
    for (let s = 1; s <= LAST_STEP; s++) later(() => setStep(s), s * 180);
  }, []);

  /** Pasa a modo visitante: la demo automática se detiene y se usan sus datos. */
  const takeOver = (nextName: string, nextDesc: string) => {
    const firstTime = mode === "auto";
    setMode("user");
    setName(nextName);
    setDescription(nextDesc);
    if (firstTime) rebuild();
  };

  const onName = (value: string) => {
    setUserName(value);
    takeOver(value, userDesc);
  };

  const onDesc = (value: string) => {
    setUserDesc(value);
    takeOver(userName, value);
  };

  const onService = (key: KeyLetter) => {
    setMode("user");
    setService(key);
    setName(userName);
    setDescription(userDesc);
    rebuild();
  };

  const isUser = mode === "user";
  const shownName = name || (isUser ? hero.defaults.name : "");
  const shownDesc = description || (isUser ? hero.defaults.description : "");
  const domain = toDomain(isUser ? userName : name);

  return (
    <section id="inicio" ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${styles.badge} ${styles.rise}`}>
            <b>{hero.badge.tag}</b> {hero.badge.text}
          </p>
          <h1 id="hero-title" className={`${styles.title} ${styles.rise}`} style={{ "--d": 1 } as CSSProperties}>
            {hero.title.before} <span className={styles.highlight}>{hero.title.highlight}</span>
            {hero.title.after && ` ${hero.title.after}`}
            <span className="sr-only">. {site.description}</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.rise}`} style={{ "--d": 2 } as CSSProperties}>
            {hero.subtitle}
          </p>

          <div className={`${styles.form} ${styles.rise}`} style={{ "--d": 3 } as CSSProperties}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="hero-name">{hero.fields.name.label}</label>
                <input
                  id="hero-name"
                  type="text"
                  value={userName}
                  maxLength={40}
                  autoComplete="organization"
                  placeholder={hero.fields.name.placeholder}
                  onChange={(e) => onName(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="hero-description">{hero.fields.description.label}</label>
                <input
                  id="hero-description"
                  type="text"
                  value={userDesc}
                  maxLength={80}
                  placeholder={hero.fields.description.placeholder}
                  onChange={(e) => onDesc(e.target.value)}
                />
              </div>
            </div>
            <p className={styles.serviceLabel} id="hero-service-label">
              {hero.fields.service.label}
            </p>
            <div className={styles.services} role="group" aria-labelledby="hero-service-label">
              {hero.services.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={styles.service}
                  aria-pressed={service === s.key}
                  onClick={() => onService(s.key)}
                >
                  <KeyCap letter={s.key} active={service === s.key} className={styles.serviceKey} />
                  {s.chip}
                </button>
              ))}
            </div>
          </div>

          <div className={`${styles.ctas} ${styles.rise}`} style={{ "--d": 4 } as CSSProperties}>
            <a
              href={whatsappUrl({ type: "demoFor", business: userName, description: userDesc, service: serviceData.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-track="demo_cta_click"
              data-track-label="hero"
            >
              {hero.primaryCta}
              <ArrowRight size={17} />
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
            <a href="#proyectos" className="btn btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
          <p className={`${styles.note} ${styles.rise}`} style={{ "--d": 5 } as CSSProperties}>
            {hero.note}
          </p>
        </div>

        <div
          className={styles.stage}
          role="img"
          aria-label={`${hero.previewLabel}: ${serviceData.chip} para ${shownName || hero.samples[sampleIdx].name}`}
        >
          <div aria-hidden="true">
            <HeroPreview
              key={service}
              service={service}
              name={shownName}
              description={shownDesc}
              domain={domain}
              step={step}
              typing={typing}
            />
          </div>
          <ol className={styles.steps} aria-hidden="true">
            {serviceData.steps.map((label, i) => (
              <li key={label} data-done={step >= i + 1 ? "" : undefined}>
                <span className={styles.stepDot}>
                  <Check size={11} />
                </span>
                {label}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container">
        <ul className={styles.strip}>
          {trustStrip.map((item, i) => {
            const Icon = stripIcons[item.icon];
            return (
              <li key={item.title} data-reveal="" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
                <span className={styles.stripIcon}>
                  <Icon size={20} />
                </span>
                <span>
                  <b>{item.title}</b>
                  <span>{item.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
