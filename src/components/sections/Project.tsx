import type { CSSProperties } from "react";
import Image from "next/image";
import { project } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { KeyCap } from "@/components/ui/KeyCap";
import styles from "./Project.module.css";

/**
 * Caso real: Woodland Perú, nuestro primer cliente. Capturas de su web
 * publicada (escritorio y celular) y lo que construimos, por tecla.
 */
export function Project() {
  return (
    <section id="proyectos" className="section section-alt" aria-labelledby="proyectos-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">{project.eyebrow}</p>
          <h2 id="proyectos-title" className="section-title">
            {project.title}
          </h2>
          <p className="section-intro">{project.intro}</p>
        </header>

        <div className={styles.layout}>
          <figure className={styles.visual} data-reveal="">
            <div className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <i />
                <i />
                <i />
                <span>{project.images.domain}</span>
              </div>
              <Image
                src={project.images.desktop.src}
                alt={project.images.desktop.alt}
                width={1440}
                height={900}
                sizes="(max-width: 1060px) 100vw, 640px"
                className={styles.shot}
              />
            </div>
            <div className={styles.phone}>
              <Image
                src={project.images.mobile.src}
                alt={project.images.mobile.alt}
                width={390}
                height={844}
                sizes="180px"
                className={styles.phoneShot}
              />
            </div>
          </figure>

          <div className={styles.info}>
            <p className={styles.client}>
              {project.client}
              <span>{project.context}</span>
            </p>
            <ul className={styles.items}>
              {project.items.map((item, i) => (
                <li key={item.key} data-reveal="" style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}>
                  <KeyCap letter={item.key} className={styles.cap} />
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <a
                href={whatsappUrl({ type: "project", projectName: "Woodland Perú" })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                data-track="whatsapp_click"
                data-track-label="proyecto-woodland"
              >
                {project.cta}
                <ArrowRight size={17} />
                <span className="sr-only">(se abre WhatsApp)</span>
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                {project.urlLabel}
                <ArrowUpRight size={16} />
                <span className="sr-only">(se abre en otra pestaña)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
