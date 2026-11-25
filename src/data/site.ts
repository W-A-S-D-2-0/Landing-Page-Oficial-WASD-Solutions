/**
 * Datos generales del sitio: marca, contacto, navegación, legales y SEO.
 * Edita aquí sin tocar componentes. Los valores entre [CORCHETES] son
 * placeholders pendientes (ver README.md).
 */

export const site = {
  name: "Kodena",
  shortName: "Kodena",
  tagline: "Soluciones digitales para tu negocio.",
  description:
    "Páginas web para negocios en Lima: web, agentes con IA y reservas para PYMEs, listos en 48 horas y con resultados medidos cada semana.",

  /** URL pública del sitio. Configúrala con NEXT_PUBLIC_SITE_URL. [DOMINIO] */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    /**
     * Número de WhatsApp en formato internacional, solo dígitos (51 + 9 dígitos).
     * Configúralo con NEXT_PUBLIC_WHATSAPP_NUMBER. [WHATSAPP]
     */
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "51900000000",
    /** Cómo se muestra el número en pantalla. */
    whatsappDisplay: "[WHATSAPP]",
    email: "[EMAIL]",
    city: "Lima, Perú",
  },

  social: [
    { label: "Instagram", href: "[URL INSTAGRAM]" },
    { label: "Facebook", href: "[URL FACEBOOK]" },
    { label: "TikTok", href: "[URL TIKTOK]" },
    { label: "LinkedIn", href: "[URL LINKEDIN]" },
  ],

  legal: {
    businessName: "[RAZÓN SOCIAL]",
    ruc: "[RUC]",
    complaintsBookUrl: "[URL LIBRO DE RECLAMACIONES]",
  },

  /** Menú principal del header. */
  nav: [
    { label: "Servicios", href: "/#servicios" },
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Preguntas", href: "/#preguntas" },
  ],

  seo: {
    title: "Páginas web para negocios en Lima | Kodena",
    description:
      "Creamos páginas web para negocios en Lima con agentes con IA y reservas. Te mostramos tu web antes de pagar, la publicamos en 48 horas y te enviamos resultados cada semana.",
    keywords: [
      "páginas web para negocios en Lima",
      "diseño web Lima",
      "landing page para cafetería",
      "web para restaurantes Lima",
      "web para barberías",
      "web para consultorio dental",
      "agente con IA para negocios",
      "chatbot WhatsApp IA",
      "sistema de reservas",
      "PYMEs Perú",
    ],
    ogImage: "/og-image.png",
  },
} as const;

/** true si el valor sigue siendo un placeholder del tipo "[ALGO]". */
export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}

/** Devuelve el href si es real; si es placeholder, "#" para no romper la navegación. */
export function safeHref(value: string): string {
  return isPlaceholder(value) ? "#" : value;
}
