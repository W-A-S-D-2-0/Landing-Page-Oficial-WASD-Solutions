/**
 * Preguntas frecuentes. Se usan en el acordeón y en los datos
 * estructurados FAQPage (SEO): respuestas cortas pero completas.
 */

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "¿Y si no me gusta la demo?",
    answer: "No pagas nada. La ajustamos con tus comentarios y, si no te convence, ahí queda.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer: "No. Nos encargamos del diseño, el dominio y la publicación. Tú revisas todo desde tu celular.",
  },
  {
    question: "¿La web es mía?",
    answer: "Sí. El contenido, las fotos y el dominio son de tu negocio, y te los entregamos si algún día te vas.",
  },
  {
    question: "¿Cómo funciona el agente?",
    answer:
      "Lo preparamos con tus servicios, precios y horarios. Responde en tu web (o en WhatsApp), registra solicitudes y te pasa lo que necesita a una persona.",
  },
  {
    question: "¿Puedo pedir cambios?",
    answer: "Sí. Nos escribes por WhatsApp y lo actualizamos. Los cambios pequeños están incluidos.",
  },
  {
    question: "¿Emiten factura y trabajan fuera de Lima?",
    answer: "Sí a las dos. Emitimos boleta o factura electrónica y trabajamos con negocios de todo el Perú.",
  },
];
