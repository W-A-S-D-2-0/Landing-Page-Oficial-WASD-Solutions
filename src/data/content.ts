/**
 * Textos de las secciones de la landing. Edita aquí sin tocar componentes.
 * Regla: no inventar clientes, testimonios, reseñas ni cifras de resultados.
 * Las cifras visibles (48 h, 60 días) son condiciones de la oferta.
 */

/** Identificador interno de cada servicio (no se muestra en la web). */
export type KeyLetter = "W" | "A" | "S" | "D";

/** Íconos de línea disponibles en src/components/ui/Icons.tsx. */
export type IconName = "monitor" | "clock" | "whatsapp" | "shield" | "chat" | "calendar" | "phone" | "heart" | "zap" | "check";

/** Ícono de cada servicio. */
export const serviceIcons: Record<KeyLetter, IconName> = { W: "monitor", A: "chat", S: "calendar", D: "phone" };

/* ───────────────────────── Header ───────────────────────── */

export const header = {
  cta: "Contáctanos",
  /** Encima del número en el header (solo se muestra si el número es real). */
  phoneLabel: "Escríbenos por WhatsApp",
  menuOpen: "Abrir menú",
  menuClose: "Cerrar menú",
  theme: { toDark: "Cambiar a tema oscuro", toLight: "Cambiar a tema claro" },
};

/* ───────────────────────── Hero ───────────────────────── */

/**
 * Hero para dueños de negocio de 30 a 50 años: qué se llevan, en cuánto
 * tiempo y sin riesgo, con WhatsApp como primer paso. Textos grandes y claros.
 */
export const hero = {
  /** Lema de la marca, con la barrita coral delante. */
  tagline: "Soluciones digitales para tu negocio",
  /** El título se arma así: before + highlight (en coral). */
  title: { before: "Páginas web que hacen crecer", highlight: "tu negocio" },
  subtitle: "Lista en 48 horas. Te la mostramos gratis en tu celular antes de que pagues.",
  primaryCta: "Solicita tu demo gratis",
  secondaryCta: "Conoce más",
  /** Cuatro garantías con ícono (del tablero de marca). */
  features: [
    { icon: "monitor", text: "Demo gratis" },
    { icon: "clock", text: "Listo en 48 horas" },
    { icon: "whatsapp", text: "Todo por WhatsApp" },
    { icon: "shield", text: "Garantía de 60 días" },
  ] as Array<{ icon: IconName; text: string }>,
  /**
   * Foto real del equipo (por ejemplo /equipo/hero.webp, 1000×1100).
   * Mientras sea null se muestra la web de ejemplo sobre un fondo de marca.
   * Nunca fotos de stock ni generadas con IA.
   */
  photo: null as null | { src: string; alt: string },
  /**
   * Ejemplo ilustrativo dentro del celular del hero: un pedido de principio a
   * fin en un negocio ficticio. Sus precios no son de Kodena. Los textos del
   * chat son cortos para que entren en el celular.
   */
  demo: {
    name: "Dulce Antojo",
    description: "Repostería artesanal con delivery en Surco",
    products: [
      { name: "Torta de chocolate", price: "S/ 65" },
      { name: "Tres leches", price: "S/ 55" },
      { name: "Caja de alfajores", price: "S/ 28" },
    ],
    siteCta: "Pedir por WhatsApp",
    assistant: "Asistente en línea",
    typing: "Escribiendo…",
    chat: {
      ask: "Hola, ¿hacen tortas para el sábado?",
      offer: "¡Sí! Tenemos chocolate y tres leches. ¿Para cuántas personas?",
      detail: "Para 15, de chocolate.",
      confirm: "Listo, queda separada para el sábado.",
    },
    order: { title: "Pedido registrado", text: "Torta de chocolate, 15 personas, sábado" },
    alert: { title: "Aviso a tu celular", text: "Te llegó un pedido mientras atendías" },
    note: "Ejemplo ilustrativo.",
  },
  /** Enlace al proyecto real, bajo las garantías (fuera del ejemplo ficticio). */
  projectCard: { title: "Woodland Perú", text: "Web, asistente y sistema", tag: "Proyecto real" },
};

/* ───────────────────────── Quiénes somos ───────────────────────── */

/**
 * El significado de Kodena en dos frases, una sola foto de los tres y la cuerda
 * con nudos (como un quipu) con un hilo bajo cada integrante.
 */
export const about = {
  eyebrow: "Quiénes somos",
  title: "Código con raíz peruana.",
  text: "Nuestros antepasados construyeron, conectaron y ordenaron información. Nosotros lo hacemos en digital.",
  /**
   * Foto real de los tres juntos, horizontal 16:9. Si es null se ve el espacio
   * marcado. Nunca fotos de stock ni con IA.
   */
  photo: {
    src: "/equipo/equipo.webp",
    alt: "Los tres integrantes de Kodena, sentados y con polos negros de la Hackathon Transforma+ MIPYME",
  } as null | { src: string; alt: string },
  photoPending: "Foto de los tres juntos",
  /**
   * Una palabra bajo cada persona de la foto, de izquierda a derecha. Sin
   * nombres ni roles: el equipo prefiere no exponerse de más.
   */
  verbs: ["Construir", "Conectar", "Organizar"],
};

/* ───────────────────────── Antes y después ───────────────────────── */

/** Ejemplo ilustrativo de un día sin y con Kodena (no son datos de un cliente). */
export const beforeAfter = {
  title: { before: "Tus clientes te buscan en internet.", highlight: "¿Te encuentran?" },
  aside: "Así cambia el día a día de un negocio cuando tiene su web y un asistente que responde.",
  before: {
    tag: "Hoy",
    title: "Respondes lo mismo todo el día",
    items: ["No apareces en Google", "Se te pasan mensajes", "No sabes de dónde llegan tus clientes"],
    chat: { header: "WhatsApp · 23 sin leer", messages: ["¿Precio?", "¿Atienden hoy?", "¿Dónde quedan?", "¿Hola?"], late: "Respondiste 6 horas después" },
  },
  after: {
    tag: "Con Kodena",
    title: "Tu negocio atiende aunque estés ocupado",
    items: ["Te encuentran en Google", "Responde al instante, de día y de noche", "Cada semana sabes cuántos te escribieron"],
    phone: {
      name: "Taller Rápido",
      cover: "Mecánica y mantenimiento en San Miguel",
      agent: "Asistente de Taller Rápido",
      reply: "Sí, mañana atendemos de 8 a. m. a 6 p. m. ¿Te separo un turno?",
      doneTitle: "Turno registrado",
      done: "Mañana, 10:00 a. m.",
    },
  },
  note: "Ejemplo ilustrativo.",
};

/* ───────────────────────── Armado en vivo ───────────────────────── */

/**
 * "Mira cómo quedaría tu negocio": el visitante escribe el nombre de su
 * negocio, a qué se dedica y qué necesita (W, A, S o D), y a la derecha se
 * arma un ejemplo distinto según el servicio. Sin datos, una demo automática
 * recorre negocios de rubros variados. Todo es ilustrativo.
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

export const liveDemo = {
  /** Etiqueta sobre la vista previa. */
  live: "En vivo",
  title: "Mira cómo quedaría tu negocio",
  subtitle: "Escribe el nombre de tu negocio y elige qué necesitas. El ejemplo se arma aquí mismo.",
  fields: {
    name: { label: "¿Cómo se llama tu negocio?", placeholder: "Ej.: Dulce Antojo" },
    description: { label: "¿A qué se dedica?", placeholder: "Ej.: Repostería artesanal con delivery en Surco" },
    service: { label: "¿Qué necesitas?" },
  },
  defaults: {
    name: "Tu negocio",
    description: "Lo que hace tu negocio, contado en una línea",
  },
  primaryCta: "Quiero esto para mi negocio",
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


/** Pantalla de entrada. */
export const intro = {
  tagline: "Soluciones digitales para tu negocio",
};

/* ───────────────────────── Servicios ───────────────────────── */

/** Cuatro servicios en tarjetas, con nombres claros (la letra es solo la firma). */
export type Service = {
  key: KeyLetter;
  name: string;
  description: string;
  /** Lo que incluye, en etiquetas cortas. */
  tags: string[];
};

export const services: { title: string; titleHighlight: string; aside: string; cta: string; items: Service[] } = {
  title: "Lo que hacemos por",
  titleHighlight: "tu negocio",
  aside: "Empiezas con la web y sumas lo demás cuando lo necesites.",
  cta: "Preguntar",
  items: [
    {
      key: "W",
      name: "Páginas web profesionales",
      description: "Que te encuentren en Google y te escriban por WhatsApp con un toque.",
      tags: ["Lista en 48 horas", "Se ve bien en el celular"],
    },
    {
      key: "A",
      name: "Agentes especializados",
      description: "Un asistente que conoce tu negocio y responde por ti, de día y de noche.",
      tags: ["En tu web", "También en WhatsApp"],
    },
    {
      key: "S",
      name: "Reservas y pedidos",
      description: "Tu agenda, tus pedidos y tus pagos ordenados en un solo lugar.",
      tags: ["Yape y Plin", "Recordatorios"],
    },
    {
      key: "D",
      name: "App a tu medida",
      description: "Una app web o para celular cuando tu negocio necesite algo más grande.",
      tags: ["Web o móvil", "Hecha para ti"],
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
  url: "https://woodlandpe.com/",
  urlLabel: "Ver la web",
  images: {
    desktop: { src: "/proyectos/woodland-web.jpg", alt: "Portada de la web de Woodland Perú: una tabla de teca con carne a la parrilla y el lema «Sostenibilidad hecha lujo»" },
    mobile: { src: "/proyectos/woodland-celular.jpg", alt: "La web de Woodland Perú vista en un celular, con el botón «Habla con Teca»" },
    domain: "woodlandpe.com",
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
  title: "Cómo trabajamos",
  aside: "Todo por WhatsApp, sin reuniones largas ni palabras técnicas.",
  steps: [
    { icon: "whatsapp" as IconName, title: "Nos escribes", text: "Por WhatsApp. Nos cuentas de tu negocio en dos minutos." },
    { icon: "monitor" as IconName, title: "Ves tu demo gratis", text: "Te la mandamos gratis para que la veas en tu celular." },
    { icon: "clock" as IconName, title: "Lista en 48 horas", text: "Hacemos los cambios contigo y queda lista en 48 horas." },
    { icon: "check" as IconName, title: "Ves resultados", text: "Cada semana te contamos cuántas personas te escribieron." },
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
  title: "Pide tu demo gratis",
  intro: "Déjanos tus datos y te la mandamos por WhatsApp. Sin compromiso.",
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

/* ───────────────────────── Preguntas y footer ───────────────────────── */

export const faqSection = {
  title: "Preguntas frecuentes",
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
  phrase: "Soluciones digitales para tu negocio.",
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
