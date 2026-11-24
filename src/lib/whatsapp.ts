import { site } from "@/data/site";

/**
 * Único helper para armar links de WhatsApp (https://wa.me/NUMERO?text=...).
 * Cada intención tiene su propio mensaje pre-escrito.
 */

export type WhatsAppIntent =
  | { type: "general" }
  | { type: "demo" }
  | { type: "project"; projectName: string }
  | { type: "lead"; message: string };

const messages = {
  general: "Hola WASD, quiero información sobre una web para mi negocio.",
  demo: "Hola WASD, quiero mi demo gratis. Les cuento de mi negocio:",
  project: (projectName: string) =>
    `Hola WASD, vi el proyecto de ${projectName} y quiero algo así para mi negocio.`,
} as const;

export function whatsappMessage(intent: WhatsAppIntent): string {
  switch (intent.type) {
    case "general":
      return messages.general;
    case "demo":
      return messages.demo;
    case "project":
      return messages.project(intent.projectName);
    case "lead":
      return intent.message;
  }
}

export function whatsappUrl(intent: WhatsAppIntent = { type: "general" }): string {
  const number = site.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(whatsappMessage(intent));
  return `https://wa.me/${number}?text=${text}`;
}
