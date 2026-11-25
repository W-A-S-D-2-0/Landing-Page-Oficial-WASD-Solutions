"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { hero } from "@/data/content";
import { LineIcon, WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./HeroDemo.module.css";

/** Parte del celular que debe verse en pantalla para que empiece el ejemplo. */
const VISIBLE_RATIO = 0.5;

/** Espera antes de empezar cuando no hay que coordinarse con la entrada. */
const SHORT_START = { "--t0": "0.4s" } as CSSProperties;

/** Momento de cada pieza, en segundos desde que empieza el ejemplo. */
const at = (seconds: number, lasts?: number) =>
  ({ "--at": `${seconds}s`, "--lasts": lasts && `${lasts}s` }) as CSSProperties;

/**
 * Celular del hero: un pedido de principio a fin (web → chat con el asistente
 * → pedido registrado → aviso). Se reproduce una sola vez y queda en la
 * pantalla final. La secuencia es solo CSS (ver HeroDemo.module.css), así que
 * corre aunque falle el JavaScript; este componente solo la hace esperar si el
 * celular todavía no está a la vista.
 */
export function HeroDemo() {
  const stageRef = useRef<HTMLDivElement>(null);
  /** "late": empezó cuando el visitante llegó a verlo. */
  const [start, setStart] = useState<"onLoad" | "waiting" | "late">("onLoad");

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let isFirstCheck = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio >= VISIBLE_RATIO;
        if (isFirstCheck) {
          isFirstCheck = false;
          if (isVisible) observer.disconnect();
          else setStart("waiting");
          return;
        }
        if (!isVisible) return;
        setStart("late");
        observer.disconnect();
      },
      { threshold: [0, VISIBLE_RATIO] },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const { demo } = hero;

  return (
    <div
      className={styles.demo}
      style={start === "late" ? SHORT_START : undefined}
      data-waiting={start === "waiting" ? "" : undefined}
    >
      <div ref={stageRef} className={styles.stage}>
        {/* Al empezar tarde, la clave nueva reinicia las animaciones desde cero. */}
        <div key={start === "late" ? "late" : "first"} className={styles.scene} aria-hidden="true">
          <div className={styles.phone}>
            <div className={styles.screen}>
              <p className={styles.status}>
                <span>9:41</span>
                <span>●●●</span>
              </p>
              <p className={styles.head}>
                <i />
                {demo.name}
              </p>

              <div className={styles.views}>
                <div className={styles.site}>
                  <p className={styles.cover}>{demo.description}</p>
                  <ul className={styles.products}>
                    {demo.products.map((product) => (
                      <li key={product.name}>
                        <i />
                        <span>{product.name}</span>
                        <b>{product.price}</b>
                      </li>
                    ))}
                  </ul>
                  <span className={styles.siteCta}>
                    <WhatsAppIcon size={16} />
                    {demo.siteCta}
                  </span>
                </div>

                <div className={styles.chat}>
                  <p className={styles.assistant}>{demo.assistant}</p>
                  <p className={`${styles.bubble} ${styles.mine}`} style={at(2)}>
                    {demo.chat.ask}
                  </p>
                  <div className={styles.reply}>
                    <span className={styles.typing} style={at(2.8, 0.9)}>
                      {demo.typing}
                    </span>
                    <p className={styles.bubble} style={at(3.7)}>
                      {demo.chat.offer}
                    </p>
                  </div>
                  <p className={`${styles.bubble} ${styles.mine}`} style={at(5)}>
                    {demo.chat.detail}
                  </p>
                  <div className={styles.reply}>
                    <span className={styles.typing} style={at(5.7, 0.7)}>
                      {demo.typing}
                    </span>
                    <p className={styles.bubble} style={at(6.4)}>
                      {demo.chat.confirm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className={`${styles.card} ${styles.order}`} style={at(7.2)}>
            <span className={styles.cardIcon}>
              <LineIcon name="check" size={20} />
            </span>
            <span>
              <b>{demo.order.title}</b>
              {demo.order.text}
            </span>
          </p>
          <p className={`${styles.card} ${styles.alert}`} style={at(8)}>
            <span className={styles.cardIcon}>
              <LineIcon name="phone" size={20} />
            </span>
            <span>
              <b>{demo.alert.title}</b>
              {demo.alert.text}
            </span>
          </p>
        </div>
      </div>

      <p className={styles.note}>{demo.note}</p>
    </div>
  );
}
