import Link from "next/link";
import { footer } from "@/data/content";
import { isPlaceholder, safeHref, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { LogoMark } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

/** Footer con marca gigante, contacto, legales y Libro de Reclamaciones. */
export function Footer() {
  const year = new Date().getFullYear();
  const socials = site.social.filter((s) => !isPlaceholder(s.href));

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <p className={styles.brand}>
              <LogoMark size={26} />
              {site.name}
            </p>
            <p className={styles.phrase}>{footer.phrase}</p>
          </div>

          <nav aria-label="Sitio" className={styles.col}>
            <p className={styles.colTitle}>{footer.columns.site}</p>
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#diagnostico">Diagnóstico gratis</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.col}>
            <p className={styles.colTitle}>{footer.columns.contact}</p>
            <ul>
              <li>
                <a href={whatsappUrl({ type: "general" })} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="footer">
                  WhatsApp {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                {isPlaceholder(site.contact.email) ? (
                  <span>{site.contact.email}</span>
                ) : (
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                )}
              </li>
              <li>{site.contact.city}</li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Legal" className={styles.col}>
            <p className={styles.colTitle}>{footer.columns.legal}</p>
            <ul>
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={safeHref(site.legal.complaintsBookUrl)} className={styles.complaints}>
                  {footer.complaintsBook}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className={styles.giant} aria-hidden="true">
          WASD
        </p>

        <div className={styles.bottom}>
          <p>
            © {year} {site.legal.businessName} · RUC {site.legal.ruc}. {footer.rights}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
