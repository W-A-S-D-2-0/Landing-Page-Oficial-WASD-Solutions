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
  badge: { tag: "En vivo", text: "Funciona para cualquier rubro" },
  /** El título se arma así: before + highlight (resaltado) + after. */
  title: { before: "Cuéntanos de tu negocio y", highlight: "míralo cobrar vida", after: "" },
  subtitle:
    "Escribe cómo se llama, a qué se dedica y qué necesitas. Mientras escribes, armamos un adelanto aquí mismo. La versión real te la mostramos gratis antes de que pagues un sol.",
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
  note: "Adelanto ilustrativo. Tu demo real la armamos contigo en 48 horas.",
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
      name: "Agentes especializados",
      description: "Un agente con IA experto en tu negocio, que atiende en tu web.",
      benefits: ["Conoce tus servicios, precios y horarios", "Atiende a cualquier hora y registra solicitudes", "También en tu WhatsApp, si lo quieres"],
      preview: {
        title: "Chat en tu web, 11:48 p. m.",
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
    { label: "Agente con IA y WhatsApp", values: [{ text: "No" }, { text: "Por separado" }, { text: "Incluidos", good: true }] },
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
  phrase: "Webs, agentes con IA y reservas para PYMEs. Mueve tu negocio.",
  columns: { site: "Sitio", contact: "Contacto", legal: "Legal" },
  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad/" },
    { label: "Términos y condiciones", href: "/terminos/" },
    { label: "Condiciones de la garantía", href: "/garantia/" },
  ],
  complaintsBook: "Libro de Reclamaciones",
  rights: "Todos los derechos reservados.",
};
