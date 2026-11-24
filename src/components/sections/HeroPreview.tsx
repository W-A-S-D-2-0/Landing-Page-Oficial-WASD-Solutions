import type { CSSProperties } from "react";
import { hero, type KeyLetter } from "@/data/content";
import { BarChart, Check, WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./HeroPreview.module.css";

type Props = {
  service: KeyLetter;
  name: string;
  description: string;
  domain: string;
  /** Pasos completados (0 a 5). */
  step: number;
  /** Qué se está escribiendo en la demo automática (para mostrar el cursor). */
  typing: "name" | "description" | null;
};

const p = hero.preview;

function lowerFirst(text: string) {
  return text ? text.charAt(0).toLowerCase() + text.slice(1) : text;
}

/** Un color propio para cada negocio, calculado a partir de su nombre. */
function hueFor(name: string) {
  let hash = 0;
  for (const ch of name.trim().toLowerCase()) hash = (hash * 31 + ch.charCodeAt(0)) % 360;
  return hash;
}

function Caret({ show }: { show: boolean }) {
  return show ? <span className={styles.caret} /> : null;
}

/**
 * Ejemplo que se arma en vivo según el servicio elegido:
 * W web, A chat de WhatsApp con IA, S panel de reservas y pedidos, D app.
 * Cada paso (1 a 5) hace aparecer una parte. Siempre en colores claros:
 * representa la web o app del cliente, no la página de WASD.
 */
export function HeroPreview({ service, name, description, domain, step, typing }: Props) {
  const on = (n: number) => (step >= n ? "" : undefined);
  const initial = (name.trim().charAt(0) || "T").toUpperCase();
  const tone = { "--hue": hueFor(name) } as CSSProperties;

  const nameNode = (
    <>
      {name}
      <Caret show={typing === "name"} />
    </>
  );
  const descNode = (
    <>
      {description}
      <Caret show={typing === "description"} />
    </>
  );

  const ready = (
    <span className={styles.ready} data-on={on(5)}>
      <Check size={13} />
      {hero.readyLabel}
    </span>
  );

  /* ───────── W: página web ───────── */
  if (service === "W") {
    return (
      <div className={styles.frame} data-ready={on(5)} style={tone}>
        <div className={styles.bar}>
          <i />
          <i />
          <i />
          <span className={styles.url}>
            <span className={styles.lock} />
            {domain}
          </span>
        </div>
        <div className={styles.web}>
          <div className={styles.webHeader}>
            <span className={styles.logo} data-on={on(1)}>
              {initial}
            </span>
            <span className={styles.webName}>{nameNode}</span>
            <span className={styles.nav} data-on={on(1)}>
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className={styles.cover} data-on={on(2)}>
            <span className={styles.skeleton} />
            <div className={styles.coverContent}>
              <p className={styles.coverTitle}>{descNode}</p>
              <span className={styles.coverBtn}>{p.web.action}</span>
            </div>
          </div>
          <ul className={styles.items} data-on={on(3)}>
            {p.web.items.map((item, i) => (
              <li key={item} style={{ "--i": i } as CSSProperties}>
                <span className={styles.thumb} />
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.wa} data-on={on(4)}>
            <p className={styles.waBubble}>
              <b>{p.web.bubbleFrom}</b>
              {p.web.bubble}
            </p>
            <span className={styles.waButton}>
              <WhatsAppIcon size={20} />
            </span>
          </div>
          {ready}
        </div>
      </div>
    );
  }

  /* ───────── A: WhatsApp con IA ───────── */
  if (service === "A") {
    return (
      <div className={`${styles.frame} ${styles.chatFrame}`} data-ready={on(5)} style={tone}>
        <div className={styles.chatHeader}>
          <span className={styles.chatAvatar} data-on={on(1)}>
            {initial}
          </span>
          <span className={styles.chatTitle}>
            <b>{nameNode}</b>
            <small>{p.chat.status}</small>
          </span>
          <WhatsAppIcon size={20} />
        </div>
        <div className={styles.chat}>
          <p className={`${styles.msg} ${styles.in}`} data-on={on(2)}>
            {p.chat.customer1}
          </p>
          <p className={`${styles.msg} ${styles.out}`} data-on={on(2)} style={{ "--d": "250ms" } as CSSProperties}>
            {p.chat.agent1Before} <b>{name}</b>. {p.chat.agent1Middle} {lowerFirst(description)}
            <Caret show={typing === "description"} />
            <small>{p.chat.instant}</small>
          </p>
          <p className={`${styles.msg} ${styles.in}`} data-on={on(3)}>
            {p.chat.customer2}
          </p>
          <p className={`${styles.msg} ${styles.out}`} data-on={on(3)} style={{ "--d": "250ms" } as CSSProperties}>
            {p.chat.agent2}
          </p>
          <p className={styles.handoff} data-on={on(4)}>
            <Check size={12} />
            {p.chat.handoff}
          </p>
        </div>
        {ready}
      </div>
    );
  }

  /* ───────── S: sistema de reservas y pedidos ───────── */
  if (service === "S") {
    return (
      <div className={styles.frame} data-ready={on(5)} style={tone}>
        <div className={styles.bar}>
          <i />
          <i />
          <i />
          <span className={styles.url}>
            <span className={styles.lock} />
            panel.{domain}
          </span>
        </div>
        <div className={styles.system}>
          <div className={styles.sysHeader} data-on={on(1)}>
            <span className={styles.logo} data-on={on(1)}>
              {initial}
            </span>
            <span>
              <small>{p.system.panel}</small>
              <b>{nameNode}</b>
            </span>
          </div>
          <p className={styles.sysDesc}>{descNode}</p>
          <ul className={styles.kpis} data-on={on(2)}>
            {p.system.kpis.map((kpi, i) => (
              <li key={kpi.label} style={{ "--i": i } as CSSProperties}>
                <b>{kpi.value}</b>
                {kpi.label}
              </li>
            ))}
          </ul>
          <div className={styles.agenda} data-on={on(3)}>
            <p className={styles.agendaTitle}>{p.system.agendaTitle}</p>
            {p.system.agenda.map((row, i) => (
              <p key={row} className={styles.row} style={{ "--i": i } as CSSProperties}>
                <span className={styles.rowDot} />
                {row}
              </p>
            ))}
          </div>
          <div className={styles.alerts} data-on={on(4)}>
            <p>
              <BarChart size={14} />
              {p.system.payment}
            </p>
            <p>
              <WhatsAppIcon size={14} />
              {p.system.reminder}
            </p>
          </div>
          {ready}
        </div>
      </div>
    );
  }

  /* ───────── D: app web o móvil ───────── */
  return (
    <div className={`${styles.frame} ${styles.appFrame}`} data-ready={on(5)} style={tone}>
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.appTop} data-on={on(1)}>
          <span className={styles.logo} data-on={on(1)}>
            {initial}
          </span>
          <span className={styles.appName}>{nameNode}</span>
        </div>
        <p className={styles.appDesc}>{descNode}</p>
        <div className={styles.appCards} data-on={on(2)}>
          {p.app.cards.map((card, i) => (
            <span key={card} style={{ "--i": i } as CSSProperties}>
              {card}
            </span>
          ))}
        </div>
        <ul className={styles.appList} data-on={on(3)}>
          {p.app.list.map((item, i) => (
            <li key={item} style={{ "--i": i } as CSSProperties}>
              <span className={styles.thumb} />
              {item}
            </li>
          ))}
        </ul>
        <span className={styles.appBtn} data-on={on(3)}>
          {p.app.action}
        </span>
        <div className={styles.tabs}>
          {p.app.tabs.map((tab, i) => (
            <span key={tab} data-active={i === 0 ? "" : undefined}>
              {tab}
            </span>
          ))}
        </div>
        <div className={styles.push} data-on={on(4)}>
          <span className={styles.logo} data-on="">
            {initial}
          </span>
          <span>
            <b>{name}</b>
            {p.app.notification}
          </span>
        </div>
      </div>
      {ready}
    </div>
  );
}
