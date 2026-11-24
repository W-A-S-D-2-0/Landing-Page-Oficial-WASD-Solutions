/** "Dulce Antojo" → "dulceantojo.pe" (dominio de ejemplo para las vistas previas). */
export function toDomain(name: string, fallback: string): string {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 22);
  return slug ? `${slug}.pe` : fallback;
}
