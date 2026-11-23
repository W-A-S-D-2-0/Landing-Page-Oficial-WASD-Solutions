import type { KeyLetter } from "@/data/content";

/** Evento que avisa a la sección de servicios qué tecla mostrar. */
export const SELECT_KEY_EVENT = "wasd:select-key";

export const KEY_LETTERS: KeyLetter[] = ["W", "A", "S", "D"];

export function toKeyLetter(key: string): KeyLetter | null {
  const upper = key.toUpperCase();
  return (KEY_LETTERS as string[]).includes(upper) ? (upper as KeyLetter) : null;
}

/** true si el usuario está escribiendo en un campo (no hay que capturar teclas). */
export function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

export function selectServiceKey(key: KeyLetter) {
  window.dispatchEvent(new CustomEvent<KeyLetter>(SELECT_KEY_EVENT, { detail: key }));
}
