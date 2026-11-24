/**
 * Logo de WASD Solutions (versión A de la hoja de marca): teclas juntas,
 * W en ámbar arriba y A·S·D en azul petróleo abajo, cada una con su barrita.
 * Los colores salen de los tokens --logo-* (cambian con el tema).
 */
export function LogoMark({ width = 74, title }: { width?: number; title?: string }) {
  const height = Math.round((width * 92) / 136);
  return (
    <svg width={width} height={height} viewBox="0 0 136 92" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <g strokeWidth="4" fill="var(--logo-bg)">
        <rect x="48" y="2" width="40" height="40" rx="8" stroke="var(--logo-w)" />
        <rect x="2" y="50" width="40" height="40" rx="8" stroke="var(--logo-k)" />
        <rect x="48" y="50" width="40" height="40" rx="8" stroke="var(--logo-k)" />
        <rect x="94" y="50" width="40" height="40" rx="8" stroke="var(--logo-k)" />
      </g>
      <g strokeWidth="2.6" strokeLinecap="round">
        <path d="M56 35h24" stroke="var(--logo-w-bar)" />
        <path d="M10 83h24M56 83h24M102 83h24" stroke="var(--logo-k-bar)" />
      </g>
      <g fontFamily="var(--font-display)" fontWeight="700" fontSize="21" textAnchor="middle">
        <text x="68" y="29" fill="var(--logo-w)">
          W
        </text>
        <text x="22" y="77" fill="var(--logo-k)">
          A
        </text>
        <text x="68" y="77" fill="var(--logo-k)">
          S
        </text>
        <text x="114" y="77" fill="var(--logo-k)">
          D
        </text>
      </g>
    </svg>
  );
}

/** Logo horizontal: teclas + "WASD / SOLUTIONS". */
export function Logo({ width = 64 }: { width?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <LogoMark width={width} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "-0.02em",
            color: "var(--logo-word)",
          }}
        >
          WASD
        </span>
        <span
          style={{
            marginTop: 4,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 8.5,
            letterSpacing: "0.5em",
            color: "var(--logo-sub)",
          }}
        >
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}
