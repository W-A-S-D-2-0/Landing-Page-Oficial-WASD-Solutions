"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { hero } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/Icons";
import { LogoMark } from "@/components/ui/Logo";
import styles from "./Header.module.css";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Header flotante: píldora blanca con una píldora negra que se desliza hasta
 * el enlace señalado (o hasta la sección en la que estás) y botón de contacto.
 */
export function Header({ home = true }: { home?: boolean }) {
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);
  // En páginas internas (legales) ningún enlace queda marcado.
  const [active, setActive] = useState(home ? 0 : -1);
  const [hover, setHover] = useState<number | null>(null);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  const current = hover ?? active;

  const measure = useCallback(() => {
    const el = current >= 0 ? linksRef.current[current] : null;
    setPill(el ? { x: el.offsetLeft, w: el.offsetWidth } : null);
  }, [current]);

  useIsoLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Marca la sección visible según el scroll (solo en la página principal).
  useEffect(() => {
    if (!home) return;
    const ids = site.nav.map((item) => item.href.split("#")[1]);
    const sections = ids.map((id) => document.getElementById(id)).filter((s): s is HTMLElement => Boolean(s));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let index = 0;
      sections.forEach((section) => {
        const i = ids.indexOf(section.id);
        if (section.offsetTop <= y) index = i;
      });
      setActive(index);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  return (
    <header className={styles.header}>
      <nav aria-label="Principal" className={styles.nav} onMouseLeave={() => setHover(null)}>
        <Link href="/#inicio" className={styles.brand} aria-label={`${site.name}, ir al inicio`}>
          <LogoMark size={18} />
        </Link>
        <div className={styles.links}>
          {pill && (
            <span aria-hidden="true" className={styles.pill} style={{ transform: `translateX(${pill.x}px)`, width: pill.w }} />
          )}
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              className={styles.link}
              data-on={current === i ? "" : undefined}
              aria-current={home && active === i ? "location" : undefined}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <a
        href={whatsappUrl({ type: "general" })}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${styles.contact}`}
        data-track="whatsapp_click"
        data-track-label="header"
      >
        <span className={styles.contactLabel}>{hero.contactCta}</span>
        <span className={`btn-arrow ${styles.contactArrow}`}>
          <ArrowUpRight size={15} className={styles.arrowIcon} />
          <WhatsAppIcon size={18} className={styles.waIcon} />
        </span>
        <span className="sr-only">(se abre WhatsApp)</span>
      </a>
    </header>
  );
}
