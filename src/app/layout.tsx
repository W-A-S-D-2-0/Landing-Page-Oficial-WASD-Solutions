import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import { site } from "@/data/site";
import { Analytics } from "@/components/Analytics";
import { Intro } from "@/components/ui/Intro";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { themeInitScript } from "@/components/ui/ThemeToggle";
import { TrackClicks } from "@/components/ui/TrackClicks";
import "./globals.css";

// Fuentes alojadas desde npm (@fontsource-variable, licencia SIL OFL 1.1):
// el build no depende de Google Fonts. Plus Jakarta Sans para títulos (la
// misma familia del logo) e Inter para el texto.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: "Kodena: soluciones digitales para tu negocio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b2630" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Intro />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <RevealObserver />
        <TrackClicks />
        <Analytics />
      </body>
    </html>
  );
}
