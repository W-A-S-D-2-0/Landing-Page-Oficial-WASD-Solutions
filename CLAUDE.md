@AGENTS.md

# Landing page oficial de WASD Solutions

Lee `README.md` antes de cambios grandes. Prototipo anterior (solo referencia): repo `W-A-S-D-2-0/Landing_Page_WASD`.

Reglas clave:
- Textos, precios, preguntas y contacto viven en `src/data/`. No escribas textos dentro de los componentes.
- Precios: solo en `src/data/plans.ts`.
- Colores y medidas: solo tokens de `src/app/globals.css`. Medidas del diseño en unidades del lienzo: `calc(N * var(--u))` (1440 px en escritorio, 390 px en celular).
- Dirección visual: editorial monocromo (diseño base "Orvante" de MotionSites). Papel gris `--paper` arriba y en precios, negro en el resto. Un solo acento (`--accent`), con moderación. Títulos en Archivo ancho (`--font-display`), interfaz en Inter Tight (`--font-ui`).
- Las teclas W·A·S·D son la firma de la marca (`KeyCap`): úsalas con intención, no como adorno en todas partes.
- Animaciones que muestran algo (teclas, manifiesto, cifras), con entradas de 0.6–1.2 s y `ease-out`. Nada en bucle infinito. Siempre respetar `prefers-reduced-motion` y que todo se vea si falla el JavaScript.
- Fotos y video: solo reales del equipo y de negocios con permiso, en blanco y negro para combinar. Nunca personas o lugares generados con IA ni fotos de stock.
- No inventar clientes, testimonios, reseñas, logos ni cifras de resultados. Los proyectos van rotulados como "Demo".
- WhatsApp siempre a un toque en el celular (botón flotante). Links solo con `whatsappUrl()`.
- Antes de entregar: `npm run check` (lint + TypeScript + build).
- Ramas: `main` es producción y `develop` es integración. Las ramas de trabajo (`feature/`, `content/`, `fix/`, `style/`, `chore/`) salen de `develop` y vuelven por pull request. Detalle en `CONTRIBUTING.md`.
