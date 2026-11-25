"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { leadForm } from "@/data/content";
import { emptyLead, submitLead, validateLead, type Lead, type LeadErrors } from "@/lib/lead";
import { track } from "@/lib/analytics";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappUrl } from "@/lib/whatsapp";
import styles from "./LeadForm.module.css";

type Field = Exclude<keyof Lead, "privacy">;

/**
 * Diagnóstico digital gratis. Valida en español y, al enviar, abre WhatsApp
 * con un mensaje armado (ver submitLead en src/lib/lead.ts).
 */
export function LeadForm() {
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof Lead) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = event.target instanceof HTMLInputElement && event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setLead((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validateLead(lead);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setSending(true);
    const result = await submitLead(lead);
    setSending(false);
    if (result.ok) {
      track("lead_submit", { business_type: lead.businessType });
      setSentUrl(result.whatsappUrl);
      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const field = (name: Field, type = "text", autoComplete?: string, inputMode?: "tel" | "url") => (
    <div className={styles.field}>
      <label htmlFor={`lead-${name}`}>{leadForm.labels[name]}</label>
      <input
        id={`lead-${name}`}
        name={name}
        type={type}
        value={lead[name]}
        onChange={update(name)}
        placeholder={leadForm.placeholders[name as keyof typeof leadForm.placeholders]}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `lead-${name}-error` : undefined}
      />
      {errors[name] && (
        <p id={`lead-${name}-error`} className={styles.error}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <section id="diagnostico" className="section" aria-labelledby="diagnostico-title">
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.intro} dash`}>
          <h2 id="diagnostico-title" className="section-title" data-reveal="mask">
            {leadForm.title}
          </h2>
          <p className={styles.lead} data-reveal="">
            {leadForm.intro}
          </p>
          <p className={styles.direct} data-reveal="">
            {leadForm.orWhatsapp}
            <a
              href={whatsappUrl({ type: "demo" })}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-track-label="formulario-directo"
            >
              <WhatsAppIcon size={18} />
              {leadForm.whatsappCta}
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
          </p>
        </div>

        <div className={styles.card} data-reveal="zoom">
          {sentUrl ? (
            <div className={styles.success} role="status">
              <p className={styles.successTitle}>{leadForm.success.title}</p>
              <p className={styles.successText}>{leadForm.success.text}</p>
              <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {leadForm.success.fallback}
                <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate className={styles.form}>
              {field("name", "text", "given-name")}
              {field("business", "text", "organization")}
              <div className={styles.field}>
                <label htmlFor="lead-businessType">{leadForm.labels.businessType}</label>
                <select
                  id="lead-businessType"
                  name="businessType"
                  value={lead.businessType}
                  onChange={update("businessType")}
                  aria-invalid={errors.businessType ? true : undefined}
                  aria-describedby={errors.businessType ? "lead-businessType-error" : undefined}
                >
                  <option value="">{leadForm.labels.businessTypePlaceholder}</option>
                  {leadForm.businessTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.businessType && (
                  <p id="lead-businessType-error" className={styles.error}>
                    {errors.businessType}
                  </p>
                )}
              </div>
              {field("whatsapp", "tel", "tel-national", "tel")}
              <div className={styles.wide}>{field("link", "text", "url", "url")}</div>

              <div className={`${styles.wide} ${styles.privacy}`}>
                <input
                  id="lead-privacy"
                  name="privacy"
                  type="checkbox"
                  checked={lead.privacy}
                  onChange={update("privacy")}
                  aria-invalid={errors.privacy ? true : undefined}
                  aria-describedby={errors.privacy ? "lead-privacy-error" : "lead-privacy-note"}
                />
                <label htmlFor="lead-privacy">
                  {leadForm.labels.privacyBefore}{" "}
                  <a href="/privacidad/" target="_blank" rel="noopener">
                    {leadForm.labels.privacyLink}
                  </a>
                </label>
                {errors.privacy ? (
                  <p id="lead-privacy-error" className={styles.error}>
                    {errors.privacy}
                  </p>
                ) : (
                  <p id="lead-privacy-note" className={styles.note}>
                    {leadForm.privacyNote}
                  </p>
                )}
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={sending}>
                {leadForm.submit}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
