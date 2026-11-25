"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { liveDemo, serviceIcons, type KeyLetter } from "@/data/content";
import { toDomain } from "@/lib/domain";
import { whatsappUrl } from "@/lib/whatsapp";
import { Check, LineIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { HeroPreview } from "./HeroPreview";
import styles from "./LiveDemo.module.css";

const LAST_STEP = 5;

/**
 * Hero "tu solución, en vivo". El visitante escribe el nombre de su negocio,
 * a qué se dedica y qué necesita (W, A, S o D); a la derecha se arma un
 * ejemplo según el servicio. Sin datos, la demo automática recorre negocios
 * de rubros variados, cada uno con un servicio distinto.
 */
export function LiveDemo() {
  const [mode, setMode] = useState<"auto" | "user">("auto");
  const [sampleIdx, setSampleIdx] = useState(0);
  const [service, setService] = useState<KeyLetter>(liveDemo.samples[0].service);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState<"name" | "description" | null>(null);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const timers = useRef<number[]>([]);

  const serviceData = liveDemo.services.find((s) => s.key === service) ?? liveDemo.services[0];

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  // Pausa la demo cuando la sección no está en pantalla.
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
    const sample = liveDemo.samples[sampleIdx];
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
    later(() => setSampleIdx((i) => (i + 1) % liveDemo.samples.length), t + 3600);
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
  const shownName = name || (isUser ? liveDemo.defaults.name : "");
  const shownDesc = description || (isUser ? liveDemo.defaults.description : "");
  const domain = toDomain(isUser ? userName : name, liveDemo.defaultDomain);

  return (
    <section id="demo" ref={sectionRef} className={`section ${styles.demo}`} aria-labelledby="demo-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <header className={`${styles.head} dash`}>
            <h2 id="demo-title" className="section-title" data-reveal="mask">
              {liveDemo.title}
            </h2>
            <p className="section-aside" data-reveal="">
              {liveDemo.subtitle}
            </p>
          </header>

          <div className={styles.form} data-reveal="">
            <div className={styles.fields}>
              <div className={styles.field}>
                <label htmlFor="demo-name">{liveDemo.fields.name.label}</label>
                <input
                  id="demo-name"
                  type="text"
                  value={userName}
                  maxLength={40}
                  autoComplete="organization"
                  placeholder={liveDemo.fields.name.placeholder}
                  onChange={(e) => onName(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="demo-description">{liveDemo.fields.description.label}</label>
                <input
                  id="demo-description"
                  type="text"
                  value={userDesc}
                  maxLength={80}
                  placeholder={liveDemo.fields.description.placeholder}
                  onChange={(e) => onDesc(e.target.value)}
                />
              </div>
            </div>
            <p className={styles.serviceLabel} id="demo-service-label">
              {liveDemo.fields.service.label}
            </p>
            <div className={styles.services} role="group" aria-labelledby="demo-service-label">
              {liveDemo.services.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={styles.service}
                  aria-pressed={service === s.key}
                  onClick={() => onService(s.key)}
                >
                  <span className={styles.serviceKey}>
                    <LineIcon name={serviceIcons[s.key]} size={22} />
                  </span>
                  {s.chip}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.ctas} data-reveal="">
            <a
              href={whatsappUrl({ type: "demoFor", business: userName, description: userDesc, service: serviceData.name })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-track="demo_cta_click"
              data-track-label="demo-en-vivo"
            >
              <WhatsAppIcon size={22} />
              {liveDemo.primaryCta}
              
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
          </div>
        </div>

        <div
          className={styles.stage}
          data-reveal="zoom"
          role="img"
          aria-label={`${liveDemo.previewLabel}: ${serviceData.chip} para ${shownName || liveDemo.samples[sampleIdx].name}`}
        >
          <p className={styles.live} aria-hidden="true">
            <b>{liveDemo.live}</b>
            {liveDemo.note}
          </p>
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

    </section>
  );
}
