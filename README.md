# WASD Solutions · Landing page oficial

Landing page oficial de **WASD Solutions**, startup de Lima que ayuda a PYMEs a conseguir, atender y fidelizar clientes por internet: web, agentes con IA y reservas.

**Stack:** Next.js 16 (App Router) + TypeScript + CSS Modules. Se exporta como sitio estático (`/out`). Fuentes Plus Jakarta Sans e Inter desde npm (`@fontsource-variable`), sin depender de Google Fonts. Animaciones con CSS y un poco de JavaScript propio, sin librerías.

**Diseño:** limpio y con los colores del logo (azul petróleo y ámbar). Dos temas con interruptor en el header: **claro** (blanco cálido) y **oscuro** (azul petróleo profundo, botones ámbar). Sin elección guardada, se usa el tema del sistema. El logo es la versión A de la hoja de marca (teclas juntas) y está en `src/components/ui/Logo.tsx`.

---

## Cómo correr el proyecto

Requisitos: Node.js 20.9 o superior (recomendado 22, ver `.nvmrc`).

```bash
npm install
cp .env.example .env.local   # completa tus valores
npm run dev                  # http://localhost:3000
```

En WebStorm: abre la carpeta, deja que instale las dependencias y usa la pestaña **npm** (o el botón ▶ junto a cada script de `package.json`).

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run build` | Genera el sitio estático en `/out` |
| `npm run start` | Sirve `/out` localmente para revisar el build final |
| `npm run lint` | ESLint |
| `npm run typecheck` | Revisión de TypeScript |
| `npm run check` | Lint + TypeScript + build (correr antes de publicar) |

---

## Cómo editar textos

Todo el contenido está en `src/data/`. **No hace falta tocar componentes.**

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Marca, WhatsApp, email, redes, razón social, RUC, Libro de Reclamaciones, menú y SEO |
| `src/data/content.ts` | Textos de cada sección: header, hero y franja de garantías, "¿Te pasa esto?", servicios W·A·S·D, pasos, proyecto Woodland Perú, garantía, comparativa, formulario, equipo (oculto), preguntas, cierre y footer |
| `src/data/faq.ts` | Preguntas frecuentes (también alimentan el JSON-LD `FAQPage`) |
| `src/data/testimonials.ts` | Testimonios (preparado y **oculto** hasta tener datos reales) |

- **Precios:** la landing no muestra precios de WASD; se conversan por WhatsApp. Los montos en el celular de ejemplo del hero (por ejemplo, "Capuchino · S/ 12") son contenido ilustrativo.
- **WhatsApp:** todos los links salen de `src/lib/whatsapp.ts`, con un mensaje distinto para consulta general, demo (con el nombre, la descripción y el servicio que escribió el visitante en el hero), proyecto y formulario.
- **Formulario:** `src/lib/lead.ts` valida y tiene la función aislada `submitLead()`. Hoy abre WhatsApp con el mensaje armado; para conectar un backend, reemplaza el cuerpo de `submitLead()`.
- **Colores:** solo los tokens de `src/app/globals.css`. Cada token tiene su valor claro en `:root` y su valor oscuro en `:root[data-theme="dark"]`; un componente nuevo funciona en los dos temas si usa tokens.

---

## Placeholders pendientes

| Placeholder | Dónde se cambia |
| --- | --- |
| `[WHATSAPP]` (número para los links) | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| `[WHATSAPP]` (cómo se muestra en el footer) | `src/data/site.ts` → `contact.whatsappDisplay` |
| `[EMAIL]` | `src/data/site.ts` → `contact.email` |
| `[DOMINIO]` | `.env.local` → `NEXT_PUBLIC_SITE_URL` |
| Redes sociales | `src/data/site.ts` → `social` (las que sigan con `[URL …]` no se muestran) |
| `[RAZÓN SOCIAL]`, `[RUC]` | `src/data/site.ts` → `legal` |
| `[URL LIBRO DE RECLAMACIONES]` | `src/data/site.ts` → `legal.complaintsBookUrl` (obligatorio en Perú) |
| Equipo: `[NOMBRE]`, `[ROL]`, `[FOTO]` | `src/data/content.ts` → `team` (sección oculta con `enabled: false`; falta el componente) |
| `[CONDICIONES DE LA GARANTÍA]` | `src/app/garantia/page.tsx` |
| Política de privacidad (Ley N.º 29733) y términos | `src/app/privacidad/page.tsx`, `src/app/terminos/page.tsx` |
| `[FECHA]` de las páginas legales | Las 3 páginas legales |
| GA4 y Meta Pixel | `.env.local` → `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` |
| Imagen para redes (`public/og-image.png`) | Es la del prototipo, con la paleta anterior: hay que rehacerla en blanco y negro |

**Qué no se inventó:** no hay clientes, testimonios, reseñas, logos ni cifras de resultados. Las cifras visibles (48 h, 60 días, 4 servicios) son condiciones de la oferta. El único cliente que se muestra es Woodland Perú, con datos del proyecto que hicimos y capturas de su web publicada (`public/proyectos/`), sin cifras de ventas. El celular del hero y el reporte semanal dicen "Ejemplo ilustrativo".

**Antes de publicar:** confirmar con Woodland Perú que autoriza mostrar su nombre y las capturas de su web.

---

## Secciones y animaciones

| Sección | Archivo | Qué se mueve |
| --- | --- | --- |
| Header | `sections/Header.tsx` | Fijo, gana fondo al bajar; interruptor de tema y menú en celular |
| Hero | `sections/Hero.tsx`, `HeroPreview.tsx` | El visitante escribe el nombre de su negocio, a qué se dedica y qué necesita (W web, A agente especializado en su web, S reservas y pedidos, D app). A la derecha se arma en vivo un ejemplo distinto por servicio, con su nombre, su descripción y un color propio. Sin datos, una demo automática recorre negocios de rubros variados. El botón abre WhatsApp con lo que escribió. Textos en `hero` de `src/data/content.ts` |
| ¿Te pasa esto? | `sections/Problem.tsx` | Aparición suave al entrar en pantalla |
| Servicios | `sections/Services.tsx` | Las teclas en la forma del logo son las pestañas (clic, flechas o W/A/S/D en el teclado) |
| Proyecto Woodland | `sections/Project.tsx` | Capturas reales de su web (escritorio y celular) y lo que construimos, por tecla |
| Cómo funciona, Comparativa, Formulario, Preguntas, Cierre, Footer | `sections/*.tsx` | Aparición suave al entrar en pantalla |

Con `prefers-reduced-motion` todo se ve en su estado final.

---

## Medición

Con `NEXT_PUBLIC_GA_ID` y/o `NEXT_PUBLIC_META_PIXEL_ID` se cargan GA4 y Meta Pixel. Eventos: `whatsapp_click` (Contact), `demo_cta_click` y `lead_submit` (Lead). Para medir un botón nuevo, agrégale `data-track="evento"` y `data-track-label="etiqueta"`.

---

## Desplegar en Vercel

1. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
2. En **Settings → Environment Variables**, agrega las variables de `.env.example`.
3. `main` publica el sitio y cada pull request genera una URL de vista previa.
4. En **Settings → Domains**, conecta el dominio y actualiza `NEXT_PUBLIC_SITE_URL`.

---

## Cómo colaborar

Una sola rama fija, `main` (producción). Cada cambio va en su propia rama y entra a `main` por pull request. Detalle en [CONTRIBUTING.md](CONTRIBUTING.md). Cada pull request y cada push a `main` pasa por CI (lint, TypeScript y build).

## Estructura

```
src/
├── app/                  # layout, página, páginas legales, sitemap, robots, ícono, tokens (globals.css)
├── components/
│   ├── sections/         # una sección por archivo, cada una con su .module.css
│   ├── ui/               # Logo, ThemeToggle, KeyCap, Icons, RevealObserver, TrackClicks
│   ├── Analytics.tsx     # GA4 + Meta Pixel
│   ├── JsonLd.tsx        # ProfessionalService + FAQPage
│   └── LegalPage.tsx     # plantilla de páginas legales
├── data/                 # TODO el contenido editable
└── lib/                  # whatsapp, analytics, lead (submitLead), teclas
```
