import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/inter-tight";
import { site } from "@/data/site";
import { Analytics } from "@/components/Analytics";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { TrackClicks } from "@/components/ui/TrackClicks";
import "./globals.css";

// Fuentes alojadas desde npm (@fontsource-variable, licencia SIL OFL 1.1):
// el build no depende de Google Fonts. Archivo con eje de ancho (wdth) para
// los títulos e Inter Tight para la interfaz y el texto.

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
    images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: "WASD Solutions: webs, WhatsApp con IA y reservas para PYMEs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#dadada",
};

/** Marca el documento cuando hay JavaScript, para activar las animaciones. */
const jsFlag = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
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
