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

/**
 * Hero "tu solución, en vivo": el visitante escribe el nombre de su negocio,
 * a qué se dedica y qué necesita (W, A, S o D), y a la derecha se arma un
 * ejemplo distinto según el servicio. Sin datos, una demo automática recorre
 * negocios de rubros variados. Todo es ilustrativo.
 */
export type HeroService = {
  key: KeyLetter;
  /** Texto del botón para elegir el servicio. */
  chip: string;
  /** Cómo se nombra el servicio en el mensaje de WhatsApp. */
  name: string;
  /** Pasos que se marcan mientras se arma el ejemplo (siempre 5). */
  steps: [string, string, string, string, string];
};

export const hero = {
  /** Etiqueta sobre la vista previa. */
  live: "En vivo",
  /** El título se arma así: before + highlight (resaltado) + after. */
  title: { before: "Cuéntanos de tu negocio y", highlight: "míralo cobrar vida", after: "" },
  subtitle: "Escribe y mira un adelanto aquí mismo. La versión real te la mostramos gratis.",
  fields: {
    name: { label: "¿Cómo se llama tu negocio?", placeholder: "Ej.: Dulce Antojo" },
    description: { label: "¿A qué se dedica?", placeholder: "Ej.: Repostería artesanal con delivery en Surco" },
    service: { label: "¿Qué necesitas?" },
  },
  defaults: {
    name: "Tu negocio",
    description: "Lo que hace tu negocio, contado en una línea",
  },
  primaryCta: "Quiero mi demo gratis",
  secondaryCta: "Ver un proyecto real",
  note: "Ejemplo ilustrativo.",
  previewLabel: "Vista previa que se arma en vivo",
  readyLabel: "Lista para publicar",
  defaultDomain: "tunegocio.pe",

  services: [
    { key: "W", chip: "Página web", name: "una página web", steps: ["Tu marca", "Portada", "Servicios", "Botón de WhatsApp", "Lista"] },
    { key: "A", chip: "Agentes especializados", name: "un agente especializado en mi negocio", steps: ["Tu marca", "Lo que sabe", "Respuestas", "Acciones", "Listo"] },
    { key: "S", chip: "Reservas y pedidos", name: "un sistema de reservas y pedidos", steps: ["Tu marca", "Resumen del día", "Agenda", "Pagos y avisos", "Lista"] },
    { key: "D", chip: "App web o móvil", name: "una app web o móvil", steps: ["Tu marca", "Pantallas", "Catálogo", "Notificaciones", "Lista"] },
  ] as HeroService[],

  /** Negocios de ejemplo (rubros variados) para la demo automática. */
  samples: [
    { name: "Dulce Antojo", description: "Repostería artesanal con delivery en Surco", service: "W" },
    { name: "Taller Rápido", description: "Mecánica y mantenimiento de autos en San Miguel", service: "A" },
    { name: "Estudio Vida", description: "Clases de pilates y yoga para todas las edades", service: "S" },
    { name: "Ferretería Central", description: "Materiales de construcción con envío a obra", service: "D" },
  ] as Array<{ name: string; description: string; service: KeyLetter }>,

  /** Textos de las vistas previas (genéricos: sirven para cualquier rubro). */
  preview: {
    web: {
      items: ["Lo que ofrecemos", "Horarios y ubicación", "Opiniones de clientes"],
      action: "Escríbenos por WhatsApp",
      bubble: "Hola, ¿en qué te ayudamos?",
      bubbleFrom: "Agente de atención",
    },
    /** Agente con IA dentro de la web del negocio (no necesariamente WhatsApp). */
    agent: {
      /** Cabecera: "Agente de {nombre}" y "Experto en {a qué se dedica}". */
      title: "Agente de",
      specialty: "Experto en",
      training: "Aprendiendo…",
      online: "En línea",
      knowledgeLabel: "Aprendió de tu negocio",
      knowledge: ["Servicios", "Precios", "Horarios", "Preguntas frecuentes"],
      customer1: "Hola, ¿me ayudas a elegir?",
      /** La respuesta se arma con el nombre del negocio. */
      agent1Before: "¡Claro! Soy el agente experto de",
      agent1After: "Conozco nuestros servicios, precios y horarios. ¿Qué necesitas?",
      customer2: "¿Me pueden atender mañana?",
      actionTitle: "Solicitud registrada para mañana",
      actionText: "Aviso enviado al equipo",
      input: "Pregúntale lo que quieras…",
      ready: "Listo para atender",
    },
    system: {
      panel: "Panel de",
      kpis: [
        { label: "Reservas de hoy", value: "8" },
        { label: "Pedidos", value: "5" },
        { label: "Pagos por confirmar", value: "2" },
      ],
      agendaTitle: "Agenda de hoy",
      agenda: ["10:00 a. m. · Reserva confirmada", "12:30 p. m. · Pedido para recoger", "4:00 p. m. · Cita nueva desde la web"],
      payment: "Adelanto por Yape recibido",
      reminder: "Recordatorio enviado por WhatsApp",
    },
    app: {
      tabs: ["Inicio", "Catálogo", "Pedidos", "Perfil"],
      cards: ["Lo nuevo", "Lo más pedido"],
      list: ["Producto destacado", "Promoción de la semana", "Arma tu pedido"],
      action: "Pedir ahora",
      notification: "Tu pedido está en camino",
    },
  },
};

/** Tres datos de la oferta, en una línea bajo los botones del hero. */
export const heroFacts = ["Demo gratis", "Lista en 48 horas", "Reporte cada semana"] as const;

/** Pantalla de entrada. */
export const intro = {
  tagline: "Webs, agentes y sistemas",
};

/* ───────────────────────── Servicios ───────────────────────── */

/**
 * Cada tecla muestra un ejemplo terminado (la misma vista previa del hero)
 * con un negocio de muestra. Pocas palabras: el ejemplo explica el resto.
 */
export type Service = {
  key: KeyLetter;
  name: string;
  description: string;
  /** Lo que incluye, en etiquetas cortas. */
  tags: string[];
  /** Negocio de muestra para el ejemplo (ilustrativo). */
  sample: { name: string; description: string };
};

export const services: { title: string; aside: string; tablistLabel: string; items: Service[] } = {
  title: "Cuatro teclas, un solo equipo",
  aside: "Empiezas con una y sumas las demás cuando las necesites.",
  tablistLabel: "Servicios de WASD Solutions",
  items: [
    {
      key: "W",
      name: "Página web",
      description: "Tu negocio en Google y en el celular, con WhatsApp a un toque.",
      tags: ["Lista en 48 horas", "Aparece en Google", "Botón de WhatsApp"],
      sample: { name: "Dulce Antojo", description: "Repostería artesanal con delivery en Surco" },
    },
    {
      key: "A",
      name: "Agentes especializados",
      description: "Un agente que conoce tu negocio y atiende en tu web a cualquier hora.",
      tags: ["Responde al instante", "Registra solicitudes", "También en WhatsApp"],
      sample: { name: "Taller Rápido", description: "Mecánica y mantenimiento de autos en San Miguel" },
    },
    {
      key: "S",
      name: "Reservas y pedidos",
      description: "Tu agenda, tus pedidos y tus pagos en un solo panel.",
      tags: ["Reservas en línea", "Yape y Plin", "Recordatorios"],
      sample: { name: "Estudio Vida", description: "Clases de pilates y yoga para todas las edades" },
    },
    {
      key: "D",
      name: "Apps a medida",
      description: "Una app web o móvil cuando tu negocio la pida.",
      tags: ["Web o móvil", "Catálogo y pedidos", "Notificaciones"],
      sample: { name: "Ferretería Central", description: "Materiales de construcción con envío a obra" },
    },
  ],
};

/* ───────────────────────── Proyecto: Woodland Perú ───────────────────────── */

/**
 * Nuestro primer cliente. Solo datos verificables del proyecto: no publicar
 * cifras de ventas ni resultados sin la validación de Woodland.
 * Capturas en /public/proyectos (tomadas de la web publicada).
 */
export const project = {
  label: "Proyecto real",
  title: "Woodland Perú",
  intro: "Tablas artesanales de teca. Les hicimos la web, su asistente y su sistema interno.",
  client: "Corporación Wood Land Peru S.A.C.",
  context: "Hackathon Transforma+ MIPYME 2026",
  url: "https://woodland-peru-web.vercel.app/",
  urlLabel: "Ver la web",
  images: {
    desktop: { src: "/proyectos/woodland-web.jpg", alt: "Portada de la web de Woodland Perú: una tabla de teca con carne a la parrilla y el lema «Sostenibilidad hecha lujo»" },
    mobile: { src: "/proyectos/woodland-celular.jpg", alt: "La web de Woodland Perú vista en un celular, con el botón «Habla con Teca»" },
    domain: "woodland-peru-web.vercel.app",
  },
  items: [
    { key: "W", title: "Web y catálogo", text: "Colecciones y grabado para regalos." },
    { key: "A", title: "Teca, su asistente", text: "Cotiza y registra pedidos por chat." },
    { key: "S", title: "Sistema interno", text: "Pedidos, inventario y producción." },
  ] as Array<{ key: KeyLetter; title: string; text: string }>,
  cta: "Quiero algo así",
};

/* ───────────────────────── Cómo trabajamos ───────────────────────── */

export const howItWorks = {
  title: "Así trabajamos",
  aside: "Todo por WhatsApp, sin reuniones largas.",
  steps: [
    { title: "Nos escribes", text: "Dos minutos." },
    { title: "Ves tu demo", text: "Gratis, en tu celular." },
    { title: "La publicamos", text: "En 48 horas." },
    { title: "Mides resultados", text: "Reporte cada semana." },
  ],
};

export const guarantee = {
  title: "Garantía de 60 días",
  text: "Si no llegan los contactos que acordamos, el siguiente mes va por nuestra cuenta.",
  linkLabel: "Condiciones",
  href: "/garantia/",
};

/* ───────────────────────── Formulario (cierre) ───────────────────────── */

export const leadForm = {
  title: "Tu demo, gratis",
  intro: "Déjanos tus datos y te la mandamos por WhatsApp.",
  orWhatsapp: "¿Prefieres escribirnos directo?",
  whatsappCta: "Abrir WhatsApp",
  submit: "Quiero mi demo",
  businessTypes: ["Cafetería", "Restaurante", "Peluquería o barbería", "Consultorio", "Tienda", "Otro negocio"],
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
    title: "Listo.",
    text: "Abrimos WhatsApp con tu mensaje. Solo envíalo y te respondemos pronto.",
    fallback: "¿No se abrió WhatsApp? Toca aquí",
  },
  privacyNote: "Solo usamos tus datos para enviarte tu demo.",
};

/* ───────────────────────── Equipo ───────────────────────── */

/**
 * Sección OCULTA hasta tener nombres y fotos reales (enabled: false).
 * Fotos en /public/equipo/ (cuadradas, 600×600, WebP). Nunca fotos generadas con IA.
 */
export const team = {
  enabled: false,
  title: "Un equipo joven de Lima",
  text: "Trabajamos cerca de ti, por WhatsApp y sin tecnicismos.",
  members: [
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
  ],
};

/* ───────────────────────── Preguntas y footer ───────────────────────── */

export const faqSection = {
  title: "Preguntas",
  more: "¿Otra duda?",
  moreCta: "Escríbenos",
};

/** Globito del botón flotante de WhatsApp (aparece una sola vez por visita). */
export const whatsappBubble = {
  text: "¿Te ayudamos con tu negocio?",
  close: "Cerrar mensaje",
  label: "Escríbenos por WhatsApp",
  delayMs: 12000,
};

export const footer = {
  phrase: "Webs, agentes y sistemas para negocios del Perú.",
  columns: { site: "Sitio", contact: "Contacto", legal: "Legal" },
  demoLink: "Pide tu demo",
  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad/" },
    { label: "Términos y condiciones", href: "/terminos/" },
    { label: "Condiciones de la garantía", href: "/garantia/" },
  ],
  complaintsBook: "Libro de Reclamaciones",
  rights: "Todos los derechos reservados.",
};
