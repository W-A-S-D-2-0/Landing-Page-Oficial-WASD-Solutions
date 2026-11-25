import type { CSSProperties } from "react";
import Image from "next/image";
import { project, serviceIcons } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRight, ArrowUpRight, LineIcon } from "@/components/ui/Icons";
import styles from "./Project.module.css";

/**
 * Caso real: Woodland Perú, nuestro primer cliente, en un bloque petróleo
 * profundo. Capturas de su web publicada y lo que construimos, por tecla.
 */
export function Project() {
  return (
    <section id="proyectos" className={`section ${styles.band} on-deep`} aria-labelledby="proyectos-title">
      <span className={styles.blade} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <div className={styles.info}>
          <p className={styles.label} data-reveal="">
            {project.label}
            <span>{project.context}</span>
          </p>
          <h2 id="proyectos-title" className={`section-title ${styles.title}`} data-reveal="mask">
            {project.title}
          </h2>
          <p className={styles.intro} data-reveal="">
            {project.intro}
          </p>

          <ul className={styles.items}>
            {project.items.map((item, i) => (
              <li key={item.key} data-reveal="" style={{ "--reveal-delay": `${120 + i * 110}ms` } as CSSProperties}>
                <span className={styles.cap}>
                  <LineIcon name={serviceIcons[item.key]} size={24} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.actions} data-reveal="">
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
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`btn ${styles.visit}`}>
              {project.urlLabel}
              <ArrowUpRight size={16} />
              <span className="sr-only">(se abre en otra pestaña)</span>
            </a>
          </div>
        </div>

        <figure className={styles.visual} data-reveal="zoom">
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
              sizes="(max-width: 1060px) 100vw, 700px"
              className={styles.shot}
            />
          </div>
          <div className={styles.phone}>
            <Image
              src={project.images.mobile.src}
              alt={project.images.mobile.alt}
              width={390}
              height={844}
              sizes="170px"
              className={styles.phoneShot}
            />
          </div>
          <figcaption className="sr-only">{project.client}</figcaption>
        </figure>
      </div>
    </section>
  );
}
