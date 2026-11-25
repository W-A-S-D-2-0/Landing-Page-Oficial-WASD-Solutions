"use client";

import { useEffect, useState } from "react";
import { whatsappBubble } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { Close, WhatsAppIcon } from "@/components/ui/Icons";
import styles from "./WhatsAppFloat.module.css";

const SEEN_KEY = "kodena-bubble-seen";

/**
 * Botón flotante de WhatsApp, siempre a un toque en el celular.
 * El globito aparece una sola vez por visita, después de unos segundos.
 */
export function WhatsAppFloat() {
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // Sin almacenamiento disponible: se muestra igual, una vez por carga.
    }
    const timer = window.setTimeout(() => {
      setBubble(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Ignorar: el globito ya se mostró en esta carga.
      }
    }, whatsappBubble.delayMs);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={styles.wrap}>
      {bubble && (
        <div className={styles.bubble}>
          <a href={whatsappUrl({ type: "general" })} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="globito">
            {whatsappBubble.text}
          </a>
          <button type="button" onClick={() => setBubble(false)} aria-label={whatsappBubble.close} className={styles.close}>
            <Close size={14} />
          </button>
        </div>
      )}
      <a
        href={whatsappUrl({ type: "general" })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsappBubble.label}
        data-track="whatsapp_click"
        data-track-label="flotante"
        className={styles.button}
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
