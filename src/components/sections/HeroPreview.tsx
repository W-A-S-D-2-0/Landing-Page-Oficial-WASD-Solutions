import type { CSSProperties } from "react";
import { hero, type KeyLetter } from "@/data/content";
import { ArrowRight, BarChart, Check, WhatsAppIcon } from "@/components/ui/Icons";
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
 * W web, A agente especializado en la web del negocio, S panel de reservas y pedidos, D app.
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

  /* ───────── A: agente especializado, dentro de la web del negocio ───────── */
  if (service === "A") {
    const a = p.agent;
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
        <div className={styles.agentPage}>
          {/* La web del negocio, de fondo */}
          <div className={styles.webHeader}>
            <span className={styles.logo} data-on={on(1)}>
              {initial}
            </span>
            <span className={styles.webName}>{name}</span>
          </div>
          <span className={styles.pageBlock} data-on={on(1)} />
          <span className={styles.pageLine} />
          <span className={styles.pageLine} />
          <span className={styles.pageLine} />

          {/* El agente */}
          <div className={styles.agent}>
            <div className={styles.agentHeader} data-on={on(1)}>
              <span className={styles.agentAvatar} data-online={on(5)}>
                {initial}
              </span>
              <span className={styles.agentTitle}>
                <b>
                  {a.title} {nameNode}
                </b>
                <small>
                  {a.specialty} {lowerFirst(description)}
                  <Caret show={typing === "description"} />
                </small>
              </span>
              <span className={styles.agentStatus} data-on={on(5)}>
                {step >= 5 ? a.online : a.training}
              </span>
            </div>

            <div className={styles.knowledge} data-on={on(2)}>
              <p>{a.knowledgeLabel}</p>
              <ul>
                {a.knowledge.map((item, i) => (
                  <li key={item} style={{ "--i": i } as CSSProperties}>
                    <Check size={11} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.agentChat}>
              <p className={`${styles.msg} ${styles.in}`} data-on={on(3)}>
                {a.customer1}
              </p>
              <p className={`${styles.msg} ${styles.out}`} data-on={on(3)} style={{ "--d": "250ms" } as CSSProperties}>
                {a.agent1Before} <b>{name}</b>. {a.agent1After}
              </p>
              <p className={`${styles.msg} ${styles.in}`} data-on={on(4)}>
                {a.customer2}
              </p>
              <p className={styles.action} data-on={on(4)} style={{ "--d": "250ms" } as CSSProperties}>
                <span className={styles.actionIcon}>
                  <Check size={13} />
                </span>
                <span>
                  <b>{a.actionTitle}</b>
                  {a.actionText}
                </span>
              </p>
            </div>

            <div className={styles.agentInput}>
              {a.input}
              <span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>

          <span className={`${styles.ready} ${styles.agentReady}`} data-on={on(5)}>
            <Check size={13} />
            {a.ready}
          </span>
        </div>
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
