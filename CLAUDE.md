@AGENTS.md

# Landing page oficial de WASD Solutions

Lee `README.md` antes de cambios grandes. Prototipo anterior (solo referencia): repo `W-A-S-D-2-0/Landing_Page_WASD`.

Reglas clave:
- Textos, preguntas y contacto viven en `src/data/`. No escribas textos dentro de los componentes.
- La landing no publica precios de WASD (decisión del equipo). Los precios del celular de ejemplo del hero son contenido ilustrativo.
- Colores: solo tokens de `src/app/globals.css`. Todo debe verse bien en los dos temas: claro (`:root`) y oscuro (`:root[data-theme="dark"]`, azul petróleo). Nunca colores fijos en componentes, salvo los mockups y capturas de webs, que siempre son claros.
- Marca: azul petróleo (`--primary`) y ámbar (`--accent`), como el logo. El logo oficial es la versión A (teclas juntas) en `src/components/ui/Logo.tsx`. Títulos en Plus Jakarta Sans (`--font-display`), texto en Inter (`--font-body`).
- Estilo: limpio y confiable para dueños de PYME, no de agencia de diseño. Tarjetas con sombra suave, botones con radio 12 px, mucho aire.
- Las teclas W·A·S·D son la firma de la marca (`KeyCap`): úsalas con intención, no como adorno en todas partes.
- Animaciones que muestran el producto (chat, reporte, teclas), con entradas de 0.6–1.2 s y `ease-out`. Nada en bucle infinito. Siempre respetar `prefers-reduced-motion` y que todo se vea si falla el JavaScript.
- Fotos y video: solo reales del equipo y de negocios con permiso. Nunca personas o lugares generados con IA ni fotos de stock.
- No inventar clientes, testimonios, reseñas, logos ni cifras de resultados. Proyectos reales (hoy, Woodland Perú) solo con datos verificables y con permiso del cliente; las cifras del cliente no se publican sin su validación.
- WhatsApp siempre a un toque en el celular (botón flotante). Links solo con `whatsappUrl()`.
- Antes de entregar: `npm run check` (lint + TypeScript + build).
- Ramas: solo `main` (producción). Las ramas de trabajo (`feature/`, `content/`, `fix/`, `style/`, `chore/`) salen de `main` y vuelven a `main` por pull request, con el CI en verde. No hay rama `develop`. Detalle en `CONTRIBUTING.md`.
