"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { Moon, Sun } from "@/components/ui/Icons";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "wasd-theme";
type Theme = "light" | "dark";

/**
 * Se ejecuta en <head> antes de pintar: aplica el tema guardado o, si no hay,
 * el del sistema. Así no hay destello del tema equivocado.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}document.documentElement.classList.add('js');try{if(sessionStorage.getItem('wasd-intro'))document.documentElement.classList.add('intro-seen');else sessionStorage.setItem('wasd-intro','1')}catch(e){}})()`;

/** El tema vive en <html data-theme>: se lee de ahí y se observa si cambia. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerTheme = (): Theme | null => null;

/** Interruptor claro / oscuro. Recuerda la elección en este navegador. */
export function ThemeToggle({ labels }: { labels: { toDark: string; toLight: string } }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
    };
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sin almacenamiento: el cambio vale solo para esta visita.
    }
    // El nuevo tema se abre en círculo desde el interruptor (si el navegador puede).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return apply();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement.style;
    root.setProperty("--vt-x", x + "px");
    root.setProperty("--vt-y", y + "px");
    root.setProperty("--vt-r", r + "px");
    document.startViewTransition(apply);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? labels.toLight : labels.toDark}
      title={isDark ? labels.toLight : labels.toDark}
    >
      <span className={styles.icon} data-show={!isDark ? "" : undefined}>
        <Moon size={18} />
      </span>
      <span className={styles.icon} data-show={isDark ? "" : undefined}>
        <Sun size={18} />
      </span>
    </button>
  );
}
