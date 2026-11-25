@AGENTS.md

# Landing page oficial de Kodena

Kodena (antes WASD Solutions) es una startup de Lima que hace webs, agentes con IA, reservas y apps para PYMEs. Contexto completo de la empresa en `docs/contexto-kodena.md`. Lee `README.md` antes de cambios grandes. Prototipo anterior (solo referencia): repo `W-A-S-D-2-0/Landing_Page_WASD`.

Reglas clave:
- Textos, preguntas y contacto viven en `src/data/`. No escribas textos dentro de los componentes.
- La landing no publica precios de Kodena (decisión del equipo). Los precios del celular de ejemplo del hero son contenido ilustrativo.
- Colores: solo tokens de `src/app/globals.css`. Todo debe verse bien en los dos temas: claro (`:root`) y oscuro (`:root[data-theme="dark"]`, petróleo profundo). Nunca colores fijos en componentes, salvo los mockups y capturas de webs, que siempre son claros.
- Marca (tablero oficial): petróleo #123B49 (principal), coral #F16E59 (acento), durazno #F4AF87 (complementario) y marfil #FAF7F3 (fondo). Para texto blanco sobre coral y palabras resaltadas se usa `--accent-strong` (#E5583F), que sí llega al contraste mínimo. Lema: «Soluciones digitales para tu negocio». Logo en `src/components/ui/Logo.tsx` (archivos del kit en `public/marca/`). Tipografía única: Inter.
- Público: dueños de negocio de 30 a 50 años. Letra grande (texto base 18 px), mensajes concretos, nada de jerga.
- Estilo: limpio y cercano. Botones en píldora (coral con texto blanco en negrita de 19 px; secundario con borde petróleo), barrita coral sobre los títulos, íconos de línea en coral y las hojas del isotipo como formas de fondo, con intención.
- Animaciones que muestran el producto (chat, reporte, la K que se arma), con entradas de 0.6–1.2 s y `ease-out`. Nada en bucle infinito. Siempre respetar `prefers-reduced-motion` y que todo se vea si falla el JavaScript.
- Fotos y video: solo reales del equipo y de negocios con permiso. Nunca personas o lugares generados con IA ni fotos de stock.
- No inventar clientes, testimonios, reseñas, logos ni cifras de resultados. Proyectos reales (hoy, Woodland Perú) solo con datos verificables y con permiso del cliente; las cifras del cliente no se publican sin su validación.
- WhatsApp siempre a un toque en el celular (botón flotante). Links solo con `whatsappUrl()`.
- Antes de entregar: `npm run check` (lint + TypeScript + build).
- Ramas: solo `main` (producción). Las ramas de trabajo (`feature/`, `content/`, `fix/`, `style/`, `chore/`) salen de `main` y vuelven a `main` por pull request, con el CI en verde. No hay rama `develop`. Detalle en `CONTRIBUTING.md`.
