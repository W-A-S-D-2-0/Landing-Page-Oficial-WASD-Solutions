import type { CSSProperties } from "react";
import { problem } from "@/data/content";
import { BarChart, CalendarX, Messages, SearchX } from "@/components/ui/Icons";
import styles from "./Problem.module.css";

const icons = { messages: Messages, search: SearchX, chart: BarChart, calendar: CalendarX } as const;

/** "¿Te pasa esto?": los cuatro dolores más comunes de una PYME. */
export function Problem() {
  return (
    <section id="problema" className="section" aria-labelledby="problema-title">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">{problem.eyebrow}</p>
          <h2 id="problema-title" className="section-title">
            {problem.title}
          </h2>
          <p className="section-intro">{problem.intro}</p>
        </header>
        <ul className={styles.grid}>
          {problem.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className={styles.card} data-reveal="" style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}>
                <span className={styles.icon}>
                  <Icon size={22} />
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
