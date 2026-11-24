"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { header } from "@/data/content";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Close, Menu } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Header.module.css";

/**
 * Header fijo: logo, enlaces, interruptor de tema y botón a WhatsApp.
 * Al bajar gana un fondo con borde. En celular, menú desplegable accesible.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú con Escape o al pasar a escritorio.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header} data-scrolled={scrolled || open ? "" : undefined}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name}, ir al inicio`}>
          <Logo width={60} />
        </Link>

        <nav aria-label="Principal" className={styles.nav}>
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle labels={header.theme} />
          <a
            href={whatsappUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-sm ${styles.cta}`}
            data-track="whatsapp_click"
            data-track-label="header"
          >
            {header.cta}
            <span className="sr-only">(se abre WhatsApp)</span>
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? header.menuClose : header.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div id="menu-movil" className={styles.mobile} hidden={!open}>
        <nav aria-label="Menú" className="container">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-track="whatsapp_click"
            data-track-label="menu-movil"
          >
            {header.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
