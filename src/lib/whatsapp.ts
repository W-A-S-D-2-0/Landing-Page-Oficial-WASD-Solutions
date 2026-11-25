import { site } from "@/data/site";

/**
 * Único helper para armar links de WhatsApp (https://wa.me/NUMERO?text=...).
 * Cada intención tiene su propio mensaje pre-escrito.
 */

export type WhatsAppIntent =
  | { type: "general" }
  | { type: "demo" }
  | { type: "demoFor"; business: string; description: string; service: string }
  | { type: "project"; projectName: string }
  | { type: "service"; service: string }
  | { type: "lead"; message: string };

const messages = {
  general: "Hola Kodena, quiero información sobre una web para mi negocio.",
  demo: "Hola Kodena, quiero mi demo gratis. Les cuento de mi negocio:",
  demoFor: (business: string, description: string, service: string) =>
    [
      "Hola Kodena, quiero mi demo gratis.",
      business && `Mi negocio: ${business}.`,
      description && `A qué se dedica: ${description}.`,
      `Me interesa ${service}.`,
    ]
      .filter(Boolean)
      .join(" "),
  service: (service: string) => `Hola Kodena, quiero información sobre ${service} para mi negocio.`,
  project: (projectName: string) =>
    `Hola Kodena, vi el proyecto de ${projectName} y quiero algo así para mi negocio.`,
} as const;

export function whatsappMessage(intent: WhatsAppIntent): string {
  switch (intent.type) {
    case "general":
      return messages.general;
    case "demo":
      return messages.demo;
    case "demoFor":
      return messages.demoFor(intent.business.trim(), intent.description.trim().replace(/\.$/, ""), intent.service);
    case "project":
      return messages.project(intent.projectName);
    case "service":
      return messages.service(intent.service.toLowerCase());
    case "lead":
      return intent.message;
  }
}

export function whatsappUrl(intent: WhatsAppIntent = { type: "general" }): string {
  const number = site.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(whatsappMessage(intent));
  return `https://wa.me/${number}?text=${text}`;
}
