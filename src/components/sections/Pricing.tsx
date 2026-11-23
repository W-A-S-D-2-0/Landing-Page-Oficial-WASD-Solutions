"use client";

import { useState, type CSSProperties } from "react";
import { pricing } from "@/data/content";
import {
  billingOptions,
  defaultBilling,
  formatSoles,
  hasBillingOptions,
  plans,
  priceFor,
  pricingNote,
  type BillingMode,
} from "@/data/plans";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import styles from "./Pricing.module.css";

/** Precios sobre papel: cuatro niveles, el Nivel 2 destacado en negro. */
export function Pricing() {
  const [mode, setMode] = useState<BillingMode>(defaultBilling);

  return (
    <section id="precios" className={styles.section} aria-labelledby="precios-title">
      <div className="container">
        <header className={styles.head}>
          <div>
            <p className="eyebrow">{pricing.eyebrow}</p>
            <h2 id="precios-title" className={`section-title ${styles.title}`} data-reveal="">
              {pricing.title}
            </h2>
          </div>
          <div className={styles.headSide}>
            <p className={styles.intro}>{pricing.intro}</p>
            <div className={styles.switch} role="radiogroup" aria-label={pricing.billingLabel}>
              {billingOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={mode === option.value}
                  className={styles.switchOption}
                  onClick={() => setMode(option.value)}
                >
                  {option.label}
                </button>
              ))}
              <span aria-hidden="true" className={styles.switchPill} data-mode={mode} />
            </div>
          </div>
        </header>

        <ul className={styles.grid}>
          {plans.map((plan, i) => {
            const price = priceFor(plan, mode);
            const changes = hasBillingOptions(plan);
            return (
              <li
                key={plan.id}
                className={styles.plan}
                data-highlighted={plan.highlighted ? "" : undefined}
                data-reveal=""
                style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
              >
                <div className={styles.planHead}>
                  <p className={styles.level}>{plan.level}</p>
                  <p className={styles.keys} aria-label={`Teclas: ${plan.keys.join(", ")}`}>
                    {plan.keys.map((k) => (
                      <span key={k} aria-hidden="true">
                        {k}
                      </span>
                    ))}
                  </p>
                </div>
                {plan.highlighted && <p className={styles.flag}>{pricing.highlightedLabel}</p>}
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.summary}>{plan.summary}</p>

                <p className={styles.price} aria-live={changes ? "polite" : undefined}>
                  {price.prefix && <span className={styles.prefix}>{price.prefix} </span>}
                  <span className={styles.amount}>{price.amount === null ? "A cotizar" : formatSoles(price.amount)}</span>
                  {price.period && <span className={styles.period}> {price.period}</span>}
                </p>
                <p className={styles.priceNote}>{price.note}</p>

                <ul className={styles.features}>
                  {plan.includesPrevious && <li className={styles.previous}>{pricing.includesPrevious}</li>}
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl({ type: "plan", planName: `${plan.level} · ${plan.name}` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.highlighted ? "btn-light" : ""} ${styles.cta}`}
                  onClick={() => track("plan_click", { plan: plan.id, billing: mode })}
                >
                  {plan.cta}
                  <span className="btn-arrow">
                    <ArrowUpRight size={15} />
                  </span>
                  <span className="sr-only">(se abre WhatsApp)</span>
                </a>
              </li>
            );
          })}
        </ul>
        <p className={styles.note}>{pricingNote}</p>
      </div>
    </section>
  );
}
