"use client";

import { useEffect } from "react";

/**
 * Activa la aparición suave de los elementos con [data-reveal] cuando entran
 * en pantalla. Sin JavaScript (o con movimiento reducido) todo se ve igual,
 * porque la clase .js solo existe si este código corre.
 *
 * Los títulos con data-reveal="mask" empiezan recortados por completo, y el
 * navegador no los cuenta como visibles: por eso se observa su contenedor.
 */
export function RevealObserver() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const targets = new Map<Element, HTMLElement[]>();
    for (const el of items) {
      const target = el.dataset.reveal === "mask" && el.parentElement ? el.parentElement : el;
      targets.set(target, [...(targets.get(target) ?? []), el]);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            targets.get(entry.target)?.forEach((el) => el.classList.add("is-visible"));
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((_, target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
