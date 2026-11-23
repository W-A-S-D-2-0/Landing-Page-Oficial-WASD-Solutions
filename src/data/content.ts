/**
 * Textos de las secciones de la landing. Edita aquí sin tocar componentes.
 * Regla: no inventar clientes, testimonios, reseñas ni cifras de resultados.
 * Las cifras que aparecen (48 h, S/ 0, 60 días) son condiciones de la oferta,
 * no resultados de clientes.
 */

export type KeyLetter = "W" | "A" | "S" | "D";

/* ───────────────────────── Hero ───────────────────────── */

export const hero = {
  /** Cada elemento es una línea del título grande (se cortan a mano). */
  titleLines: ["Mueve tu", "negocio"],
  titleMark: "(Lima)",
  eyebrow: "(Qué hacemos)",
  about:
    "Webs, WhatsApp con IA y reservas para PYMEs de Lima. Te mostramos tu web antes de pagar y la publicamos en 48 horas.",
  primaryCta: "Quiero mi demo gratis",
  contactCta: "Escríbenos",
  badge: "Demo gratis antes de pagar",
  availability: { top: "Te respondemos", bottom: "por WhatsApp" },
  clockLabel: "Lima",
  /** Tarjeta oscura del marco de cifras. */
  offer: {
    value: "48 h",
    label: "Tu web publicada",
    cta: "Pedir mi demo",
    keys: ["Web", "IA", "Reservas", "Apps"],
  },
  /** Tarjeta clara del marco de cifras. */
  entry: {
    value: "S/ 0",
    label: "de pago inicial, con mensualidad",
    tag: "Nivel 1",
  },
  /** Tarjeta "Ahora" de la columna derecha: lleva a las demos. */
  now: { eyebrow: "Ahora", title: "Demo · Cafetería", year: "[2026]", href: "#demos" },
  plate: "WASD Solutions",
  /** Las cuatro teclas del hero. */
  keys: [
    { key: "W", label: "Web" },
    { key: "A", label: "IA" },
    { key: "S", label: "Sistemas" },
    { key: "D", label: "Desarrollo" },
  ] as Array<{ key: KeyLetter; label: string }>,
  keysHint: "Presiona W, A, S o D",
  strip: ["Web", "WhatsApp con IA", "Reservas", "Apps a medida"],
};

/* ──────────────────── Barra y manifiesto ──────────────────── */

export const bar = {
  left: { strong: "Lima", muted: "Perú" },
  center: "Baja",
  right: { strong: "Mueve tu", muted: "negocio" },
};

export const statement = {
  /** Se ilumina palabra por palabra al hacer scroll. */
  text: "La mayoría de negocios vende por Instagram y WhatsApp, pero no tiene una web que convierta visitas en clientes. Nosotros te la mostramos antes de que pagues, la publicamos en 48 horas y cada semana te contamos cuántos clientes te trajo.",
  sub: "Web, WhatsApp con IA y reservas con un solo equipo.",
  subMuted: "Sin tecnicismos y por WhatsApp.",
};

/* ──────────────────── Panel "un solo equipo" ──────────────────── */

export const oneTeam = {
  titleLines: ["Un solo equipo", "para mover", "todo tu", "negocio"],
  text: "Dejas de pagarle a tres proveedores distintos. Una mensualidad cubre tu web, tu recepcionista con IA y tus reservas.",
  keysCard: { value: "4", unit: "teclas", label: "Web, IA, sistemas y desarrollo" },
  guaranteeCard: {
    value: "60",
    unit: "días",
    label: "de garantía",
    sealTop: "Garantía",
    sealMain: "WASD",
    sealBottom: "60 días",
    note: "Si no llegas al mínimo de contactos acordado, el siguiente mes es gratis.",
  },
  reportCard: {
    eyebrow: "Tu reporte del lunes",
    rows: ["Visitas", "Clics a WhatsApp", "Reservas"],
    note: "Ejemplo ilustrativo",
  },
};

/* ───────────────────────── Servicios ───────────────────────── */

export type Service = {
  key: KeyLetter;
  name: string;
  description: string;
  benefits: string[];
  /** Mini vista de ejemplo que se muestra al elegir la tecla. */
  preview: { title: string; lines: string[] };
};

export const services: {
  eyebrow: string;
  title: string;
  intro: string;
  hint: string;
  tablistLabel: string;
  items: Service[];
  closing: string;
} = {
  eyebrow: "(Servicios)",
  title: "Cuatro teclas para mover tu negocio",
  intro: "WASD son las teclas para moverse en un videojuego. Cada una es una forma de hacer crecer tu negocio.",
  hint: "Toca una tecla o presiónala en tu teclado.",
  tablistLabel: "Servicios de WASD Solutions",
  items: [
    {
      key: "W",
      name: "Web",
      description: "Landing pages pensadas para tu sector y para el celular.",
      benefits: ["Publicada en 48 horas", "Lista para aparecer en Google", "Botón directo a tu WhatsApp"],
      preview: {
        title: "Tu web en Google",
        lines: ["cafetería cerca de mí", "Tu negocio · Barranco, Lima", "Abierto ahora · Cierra 9 p. m.", "Ver carta · Reservar · WhatsApp"],
      },
    },
    {
      key: "A",
      name: "Automatización con IA",
      description: "Una recepcionista con IA que responde tu WhatsApp.",
      benefits: ["Responde horarios, precios y carta", "Te pasa las consultas importantes", "Pide reseñas a tus clientes"],
      preview: {
        title: "WhatsApp, 11:48 p. m.",
        lines: ["¿Atienden mañana domingo?", "Sí, de 9 a. m. a 6 p. m. ¿Te separo una mesa?"],
      },
    },
    {
      key: "S",
      name: "Sistemas",
      description: "Reservas, pedidos y pagos que se ordenan solos.",
      benefits: ["Reservas y pedidos en línea", "Adelantos con Yape o Plin", "Tarjeta de fidelización"],
      preview: {
        title: "Agenda de hoy",
        lines: ["1:00 p. m. · Mesa para 2 · Adelanto recibido", "4:30 p. m. · Pedido para recoger", "8:00 p. m. · Mesa para 4 · Recordatorio enviado"],
      },
    },
    {
      key: "D",
      name: "Desarrollo a medida",
      description: "Aplicaciones web y móviles cuando las necesites.",
      benefits: ["Apps web y móviles", "Automatizaciones internas", "Conexión con tus herramientas"],
      preview: {
        title: "Lo que tu negocio necesite",
        lines: ["App para tus clientes", "Panel de ventas e inventario", "Conexión con tu sistema actual"],
      },
    },
  ],
  closing: "Empiezas con tu web y subes de nivel cuando lo necesites.",
};

/* ───────────────────────── Cómo funciona ───────────────────────── */

export const howItWorks = {
  eyebrow: "(Cómo funciona)",
  title: "Cuatro pasos, sin reuniones largas",
  steps: [
    { title: "Nos cuentas de tu negocio", text: "Llenas un formulario corto o nos escribes. Te toma 2 minutos." },
    { title: "Te enviamos tu demo gratis", text: "Diseñamos una demo personalizada de tu web, sin costo." },
    { title: "La ajustamos y la publicamos", text: "Hacemos los cambios contigo y la publicamos en 48 horas." },
    { title: "Recibes tus resultados", text: "Cada semana te llegan por WhatsApp tus visitas, clics y reservas." },
  ],
};

/* ───────────────────────── Demos por sector ───────────────────────── */

/**
 * Mientras no haya clientes reales, TODAS van rotuladas como "Demo".
 * No inventar nombres de clientes ni resultados.
 */
export const demos = {
  eyebrow: "(Demos por sector)",
  title: "Así se vería la tuya",
  intro: "Partimos de una plantilla pensada para tu rubro y la hacemos tuya. Son demos de ejemplo: pronto mostraremos proyectos de clientes reales.",
  items: [
    {
      id: "cafeteria",
      label: "Demo · Cafetería en Barranco",
      sector: "Cafeterías y restaurantes",
      includes: ["Carta digital con precios", "Reservas de mesa", "Pedidos por WhatsApp"],
      mock: { brand: "Tu cafetería", headline: "Café de especialidad y postres de la casa", action: "Reservar mesa", rows: ["Capuchino · S/ 12", "Cheesecake · S/ 14", "Sándwich · S/ 18"] },
    },
    {
      id: "barberia",
      label: "Demo · Barbería en Miraflores",
      sector: "Peluquerías y barberías",
      includes: ["Agenda por barbero", "Galería de cortes", "Recordatorio de cita"],
      mock: { brand: "Tu barbería", headline: "Cortes clásicos y degradados, con cita", action: "Separar cita", rows: ["Corte · S/ 35", "Corte + barba · S/ 50", "Diseño · S/ 15"] },
    },
    {
      id: "dental",
      label: "Demo · Consultorio dental en San Borja",
      sector: "Consultorios dentales",
      includes: ["Tratamientos en simple", "Reserva de primera cita", "Ubicación y horarios"],
      mock: { brand: "Tu consultorio", headline: "Tu sonrisa en manos de especialistas", action: "Reservar evaluación", rows: ["Limpieza dental", "Ortodoncia", "Blanqueamiento"] },
    },
  ],
  priceNote: "Precios de ejemplo dentro de las demos.",
  cta: "Quiero una demo así",
};

/* ───────────────────────── Precios ───────────────────────── */

export const pricing = {
  eyebrow: "(Precios)",
  title: "Precios claros desde el día uno",
  intro: "Precios de lanzamiento. Empiezas en el nivel que necesites y subes cuando quieras.",
  highlightedLabel: "Más elegido",
  includesPrevious: "Todo lo del nivel anterior",
  billingLabel: "Forma de pago",
};

/* ───────────────────────── Garantía y comparativa ───────────────────────── */

export const guarantee = {
  title: "Nuestra garantía",
  text: "Si en 60 días tu web no genera el mínimo de contactos que acordamos, el siguiente mes es gratis.",
  linkLabel: "Ver condiciones",
  href: "/garantia/",
};

export type ComparisonValue = { text: string; good?: boolean };

export const comparison: {
  eyebrow: string;
  title: string;
  columns: [string, string, string];
  rows: Array<{ label: string; values: [ComparisonValue, ComparisonValue, ComparisonValue] }>;
} = {
  eyebrow: "(Comparativa)",
  title: "Una comparación honesta",
  columns: ["Hacerlo tú mismo", "Agencia tradicional", "WASD"],
  rows: [
    { label: "Quién lo construye", values: [{ text: "Tú, en tu tiempo libre" }, { text: "Un equipo externo" }, { text: "Nuestro equipo, contigo", good: true }] },
    { label: "Tiempo de entrega", values: [{ text: "Depende de tu tiempo" }, { text: "Varias semanas" }, { text: "48 horas", good: true }] },
    { label: "IA y WhatsApp", values: [{ text: "No" }, { text: "Por separado" }, { text: "Incluidos", good: true }] },
    { label: "Medición de resultados", values: [{ text: "Por tu cuenta" }, { text: "No siempre" }, { text: "Reporte semanal", good: true }] },
    { label: "Soporte continuo", values: [{ text: "No" }, { text: "Según contrato" }, { text: "Incluido", good: true }] },
    { label: "Pago inicial", values: [{ text: "Bajo, pero cuesta tu tiempo" }, { text: "Alto" }, { text: "Desde S/ 0", good: true }] },
  ],
};

/* ───────────────────────── Formulario ───────────────────────── */

export const leadForm = {
  eyebrow: "(Diagnóstico gratis)",
  title: "¿Cómo está tu negocio en internet? Te lo decimos gratis.",
  intro: "Déjanos tus datos y te enviamos por WhatsApp un diagnóstico de tu presencia digital y una demo de tu web, sin compromiso.",
  submit: "Quiero mi diagnóstico y demo gratis",
  businessTypes: ["Cafetería", "Restaurante", "Peluquería o barbería", "Consultorio dental", "Otro negocio"],
  labels: {
    name: "Tu nombre",
    business: "Nombre del negocio",
    businessType: "Rubro",
    businessTypePlaceholder: "Elige tu rubro",
    whatsapp: "Tu WhatsApp",
    link: "Instagram o Google Maps (opcional)",
    privacyBefore: "Acepto la",
    privacyLink: "política de privacidad",
  },
  placeholders: {
    name: "Lucía",
    business: "Café del Parque",
    whatsapp: "987 654 321",
    link: "instagram.com/tunegocio",
  },
  success: {
    title: "Listo, ya casi está.",
    text: "Abrimos WhatsApp con tu mensaje listo. Solo envíalo y te respondemos pronto.",
    fallback: "¿No se abrió WhatsApp? Toca aquí",
  },
  errorSummary: "Revisa los campos marcados.",
  privacyNote: "Usamos tus datos solo para contactarte sobre tu diagnóstico.",
};

/* ───────────────────────── Equipo ───────────────────────── */

/**
 * Sección OCULTA hasta tener nombres y fotos reales (enabled: false).
 * Fotos en /public/equipo/ (cuadradas, 600×600, WebP, en blanco y negro
 * para que combinen con el diseño). Nunca fotos generadas con IA.
 */
export const team = {
  enabled: false,
  eyebrow: "(Quiénes somos)",
  title: "Un equipo joven de Lima",
  text: "Creemos que cualquier negocio, por pequeño que sea, merece una web que de verdad le traiga clientes. Trabajamos cerca de ti, por WhatsApp y sin tecnicismos.",
  members: [
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
  ],
};

/* ───────────────────────── FAQ, cierre y footer ───────────────────────── */

export const faqSection = {
  eyebrow: "(Preguntas)",
  title: "Lo que nos suelen preguntar",
};

export const finalCta = {
  titleLines: ["Tu demo está", "a un mensaje"],
  text: "Escríbenos por WhatsApp y te mostramos cómo se vería la web de tu negocio. Gratis.",
  button: "Pedir mi demo por WhatsApp",
  secondary: "Prefiero llenar el formulario",
};

/** Globito del botón flotante de WhatsApp (aparece una sola vez por visita). */
export const whatsappBubble = {
  text: "¿Te ayudamos con la web de tu negocio?",
  close: "Cerrar mensaje",
  label: "Escríbenos por WhatsApp",
  delayMs: 12000,
};

export const footer = {
  phrase: "Webs, WhatsApp con IA y reservas para PYMEs. Mueve tu negocio.",
  columns: {
    site: "Sitio",
    contact: "Contacto",
    legal: "Legal",
  },
  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad/" },
    { label: "Términos y condiciones", href: "/terminos/" },
    { label: "Condiciones de la garantía", href: "/garantia/" },
  ],
  complaintsBook: "Libro de Reclamaciones",
  rights: "Todos los derechos reservados.",
};
