/**
 * Textos de las secciones de la landing. Edita aquí sin tocar componentes.
 * Regla: no inventar clientes, testimonios, reseñas ni cifras de resultados.
 * Las cifras visibles (48 h, 60 días) son condiciones de la oferta.
 */

export type KeyLetter = "W" | "A" | "S" | "D";

/* ───────────────────────── Header ───────────────────────── */

export const header = {
  cta: "Habla con nosotros",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  theme: { toDark: "Cambiar a tema oscuro", toLight: "Cambiar a tema claro" },
};

/* ───────────────────────── Hero ───────────────────────── */

export const hero = {
  badge: { tag: "Lima", text: "Webs para PYMEs, listas en 48 horas" },
  /** El título se arma así: before + highlight (resaltado en color). */
  title: { before: "Tu negocio atendiendo y vendiendo", highlight: "las 24 horas" },
  subtitle: "Web, WhatsApp con IA y reservas con un solo equipo. Te mostramos tu web antes de pagar.",
  primaryCta: "Quiero mi demo gratis",
  secondaryCta: "Ver proyecto",
  guarantees: ["Demo gratis antes de pagar", "Publicada en 48 h", "Reporte semanal"],
  /** Mockups del lado derecho. Son ilustrativos: no representan a un cliente real. */
  mockLabel:
    "Ejemplo ilustrativo: la web de una cafetería en un celular, una conversación con la recepcionista con IA y el reporte semanal",
  phone: {
    place: "Tu cafetería · Barranco",
    headline: "Café de especialidad y postres de la casa",
    action: "Reservar mesa",
    menu: [
      { name: "Capuchino", price: "S/ 12" },
      { name: "Cheesecake", price: "S/ 14" },
      { name: "Sándwich de pollo", price: "S/ 18" },
    ],
  },
  chat: {
    name: "Tu cafetería",
    status: "Recepcionista IA · en línea",
    messages: [
      { from: "customer", text: "Hola, ¿tienen mesa para 4 hoy a las 8 p. m.?" },
      { from: "agent", text: "¡Sí! Te la separo. ¿A nombre de quién?" },
    ] as Array<{ from: "customer" | "agent"; text: string }>,
    confirmation: "Reserva confirmada · Hoy, 8 p. m.",
  },
  report: {
    title: "Tu reporte semanal",
    note: "Ejemplo ilustrativo",
    rows: ["Visitas", "Clics a WhatsApp", "Reservas"],
  },
};

/** Franja de garantías bajo el hero (del boceto 3). */
export const trustStrip = [
  { icon: "check", title: "Demo gratis antes de pagar", text: "La ves en tu celular y decides." },
  { icon: "clock", title: "Publicada en 48 horas", text: "Sin reuniones largas ni tecnicismos." },
  { icon: "chart", title: "Reporte cada semana", text: "Visitas, clics y reservas por WhatsApp." },
] as const;

/* ───────────────────────── Problema ───────────────────────── */

export const problem = {
  eyebrow: "¿Te pasa esto?",
  title: "Vendes por Instagram y WhatsApp, pero se te escapan clientes",
  intro: "Si tienes un negocio en Lima, seguro reconoces alguno.",
  items: [
    { icon: "messages", title: "Respondes lo mismo todo el día", text: "Horarios, precios, ubicación… las mismas preguntas por WhatsApp, una y otra vez." },
    { icon: "search", title: "No apareces en Google", text: "Te buscan cerca y encuentran a tu competencia, no a ti." },
    { icon: "chart", title: "Pagaste una web y no sabes si sirvió", text: "Te la entregaron y nunca más supiste cuántos clientes te trajo." },
    { icon: "calendar", title: "Reservas que no llegan", text: "Te separan la mesa o la cita y no se presentan ni avisan." },
  ] as Array<{ icon: "messages" | "search" | "chart" | "calendar"; title: string; text: string }>,
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
  eyebrow: "Servicios",
  title: "Cuatro teclas para mover tu negocio",
  intro: "WASD son las teclas para moverse en un videojuego. Cada una es una forma de hacer crecer tu negocio, con un solo equipo.",
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
  eyebrow: "Cómo funciona",
  title: "Cuatro pasos, sin reuniones largas",
  intro: "Todo por WhatsApp y sin términos técnicos.",
  steps: [
    { title: "Nos cuentas de tu negocio", text: "Llenas un formulario corto o nos escribes. Te toma 2 minutos." },
    { title: "Te enviamos tu demo gratis", text: "Diseñamos una demo personalizada de tu web, sin costo." },
    { title: "La ajustamos y la publicamos", text: "Hacemos los cambios contigo y la publicamos en 48 horas." },
    { title: "Recibes tus resultados", text: "Cada semana te llegan por WhatsApp tus visitas, clics y reservas." },
  ],
};

/* ───────────────────────── Proyecto: Woodland Perú ───────────────────────── */

/**
 * Nuestro primer cliente. Solo datos verificables del proyecto: no publicar
 * cifras de ventas ni resultados sin la validación de Woodland.
 * Capturas en /public/proyectos (tomadas de la web publicada).
 */
export const project = {
  eyebrow: "Proyecto real",
  title: "Nuestro primer cliente: Woodland Perú",
  intro:
    "Woodland Perú hace tablas artesanales de teca. Les construimos una plataforma comercial completa: su web, un asistente que atiende por chat y un sistema interno para manejar el negocio.",
  client: "Corporación Wood Land Peru S.A.C.",
  context: "Desarrollado en la Hackathon Transforma+ MIPYME 2026",
  url: "https://woodland-peru-web.vercel.app/",
  urlLabel: "Ver la web de Woodland",
  images: {
    desktop: { src: "/proyectos/woodland-web.jpg", alt: "Portada de la web de Woodland Perú: una tabla de teca con carne a la parrilla y el lema «Sostenibilidad hecha lujo»" },
    mobile: { src: "/proyectos/woodland-celular.jpg", alt: "La web de Woodland Perú vista en un celular, con el botón «Habla con Teca»" },
    domain: "woodland-peru-web.vercel.app",
  },
  items: [
    {
      key: "W",
      title: "Web «De nuestro bosque a tu mesa»",
      text: "Cuenta la historia de la teca y muestra el catálogo por colecciones, con grabado personalizado para regalos y empresas.",
    },
    {
      key: "A",
      title: "Teca, su asistente con IA",
      text: "Atiende por chat a cualquier hora: resuelve dudas, arma cotizaciones, registra pedidos y explica cómo pagar.",
    },
    {
      key: "S",
      title: "Sistema interno",
      text: "El equipo de Woodland maneja pedidos, cotizaciones, clientes, inventario, producción y reportes desde un solo panel.",
    },
  ] as Array<{ key: KeyLetter; title: string; text: string }>,
  cta: "Quiero algo así para mi negocio",
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
  intro: string;
  columns: [string, string, string];
  rows: Array<{ label: string; values: [ComparisonValue, ComparisonValue, ComparisonValue] }>;
} = {
  eyebrow: "¿Por qué WASD?",
  title: "Una comparación honesta",
  intro: "Las opciones que tienes, sin nombrar a nadie.",
  columns: ["Hacerlo tú mismo", "Agencia tradicional", "WASD"],
  rows: [
    { label: "Quién lo construye", values: [{ text: "Tú, en tu tiempo libre" }, { text: "Un equipo externo" }, { text: "Nuestro equipo, contigo", good: true }] },
    { label: "Tiempo de entrega", values: [{ text: "Depende de tu tiempo" }, { text: "Varias semanas" }, { text: "48 horas", good: true }] },
    { label: "IA y WhatsApp", values: [{ text: "No" }, { text: "Por separado" }, { text: "Incluidos", good: true }] },
    { label: "Medición de resultados", values: [{ text: "Por tu cuenta" }, { text: "No siempre" }, { text: "Reporte semanal", good: true }] },
    { label: "Soporte continuo", values: [{ text: "No" }, { text: "Según contrato" }, { text: "Incluido", good: true }] },
  ],
};

/* ───────────────────────── Formulario ───────────────────────── */

export const leadForm = {
  eyebrow: "Diagnóstico gratis",
  title: "¿Cómo está tu negocio en internet? Te lo decimos gratis.",
  intro: "Déjanos tus datos y te enviamos por WhatsApp un diagnóstico de tu presencia digital y una demo de tu web, sin compromiso.",
  points: ["Respuesta por WhatsApp", "Sin compromiso de compra", "Demo personalizada de tu negocio"],
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
  privacyNote: "Usamos tus datos solo para contactarte sobre tu diagnóstico.",
};

/* ───────────────────────── Equipo ───────────────────────── */

/**
 * Sección OCULTA hasta tener nombres y fotos reales (enabled: false).
 * Fotos en /public/equipo/ (cuadradas, 600×600, WebP). Nunca fotos generadas con IA.
 */
export const team = {
  enabled: false,
  eyebrow: "Quiénes somos",
  title: "Un equipo joven de Lima",
  text: "Creemos que cualquier negocio, por pequeño que sea, merece una web que de verdad le traiga clientes. Trabajamos cerca de ti, por WhatsApp y sin tecnicismos.",
  members: [
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
  ],
};

/* ───────────────────────── FAQ, cierre y footer ───────────────────────── */

export const faqSection = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que nos suelen preguntar",
  more: "¿Tienes otra pregunta?",
  moreCta: "Escríbenos por WhatsApp",
};

export const finalCta = {
  title: "Tu demo está a un mensaje de distancia",
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
  columns: { site: "Sitio", contact: "Contacto", legal: "Legal" },
  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad/" },
    { label: "Términos y condiciones", href: "/terminos/" },
    { label: "Condiciones de la garantía", href: "/garantia/" },
  ],
  complaintsBook: "Libro de Reclamaciones",
  rights: "Todos los derechos reservados.",
};
