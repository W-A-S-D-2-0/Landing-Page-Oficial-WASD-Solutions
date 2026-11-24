import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import styles from "./LegalPage.module.css";

/** Plantilla para páginas legales (privacidad, términos, garantía). */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido" className={styles.main}>
        <div className={`container ${styles.inner}`}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.updated}>Última actualización: {updated}</p>
          <div className={styles.body}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
