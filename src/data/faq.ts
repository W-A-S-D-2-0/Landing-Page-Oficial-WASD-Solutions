/**
 * Preguntas frecuentes. Se usan en el acordeón y en los datos
 * estructurados FAQPage (SEO): respuestas cortas pero completas.
 */

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  { question: "¿Y si no me gusta la demo?", answer: "No pagas nada." },
  { question: "¿La web es mía?", answer: "Sí, con tus fotos y tu dominio." },
  { question: "¿Puedo pedir cambios?", answer: "Sí, por WhatsApp. Los pequeños están incluidos." },
  { question: "¿Emiten factura y trabajan fuera de Lima?", answer: "Sí: boleta o factura, en todo el Perú." },
];
