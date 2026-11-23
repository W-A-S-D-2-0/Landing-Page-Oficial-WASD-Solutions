/** Marca: cuatro teclas en forma de "T invertida" + "WASD" en Archivo ancho. */
export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="11.5" y="4" width="9" height="9" rx="2.2" fill="currentColor" />
      <rect x="2.75" y="15.75" width="8" height="8" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="12" y="15.75" width="8" height="8" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="21.25" y="15.75" width="8" height="8" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
