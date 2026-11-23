# WASD Solutions · Landing page oficial

Landing page oficial de **WASD Solutions**, startup de Lima que ayuda a PYMEs a conseguir, atender y fidelizar clientes por internet: web, WhatsApp con IA y reservas.

**Stack:** Next.js 16 (App Router) + TypeScript + CSS Modules. Se exporta como sitio estático (`/out`). Fuentes desde npm (`@fontsource-variable`), sin depender de Google Fonts. Animaciones con CSS y un poco de JavaScript propio, sin librerías.

**Diseño base:** "Orvante" (editorial monocromo) de MotionSites, adaptado a la marca: la foto del original se reemplazó por las cuatro teclas W·A·S·D, que son el logo y responden al teclado.

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

## Cómo editar textos y precios

Todo el contenido está en `src/data/`. **No hace falta tocar componentes.**

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Marca, WhatsApp, email, redes, razón social, RUC, Libro de Reclamaciones, menú y SEO |
| `src/data/plans.ts` | **Planes y precios** (único lugar donde se definen) |
| `src/data/content.ts` | Textos de cada sección: hero, manifiesto, panel "un solo equipo", servicios W·A·S·D, pasos, demos, garantía, comparativa, formulario, equipo (oculto), cierre y footer |
| `src/data/faq.ts` | Preguntas frecuentes (también alimentan el JSON-LD `FAQPage`) |
| `src/data/testimonials.ts` | Testimonios (preparado y **oculto** hasta tener datos reales) |

- **Precios:** en `src/data/plans.ts`, cada plan tiene `prices.mensual` y, opcionalmente, `prices.unico`. El interruptor "Mensual / Pago único" solo cambia los planes que tienen `unico`.
- **WhatsApp:** todos los links salen de `src/lib/whatsapp.ts`, con un mensaje distinto para consulta general, demo, plan y formulario.
- **Formulario:** `src/lib/lead.ts` valida y tiene la función aislada `submitLead()`. Hoy abre WhatsApp con el mensaje armado; para conectar un backend, reemplaza el cuerpo de `submitLead()`.
- **Colores y medidas:** solo los tokens de `src/app/globals.css`. El diseño se dibuja sobre un lienzo de 1440 px con la unidad `--u` (en celular, 390 px).

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

**Qué no se inventó:** no hay clientes, testimonios, reseñas, logos ni cifras de resultados. Las cifras visibles (48 h, S/ 0, 60 días, 4 servicios) son condiciones de la oferta. Las demos van rotuladas como "Demo" y el reporte semanal dice "Ejemplo ilustrativo".

---

## Secciones y animaciones

| Sección | Archivo | Qué se mueve |
| --- | --- | --- |
| Header flotante | `sections/Header.tsx` | Píldora negra que se desliza al enlace señalado o a la sección visible |
| Hero | `sections/Hero.tsx`, `HeroKeys.tsx` | Título que sube desde su máscara, teclas que se presionan W·A·S·D al cargar y con el teclado físico; tocarlas lleva a ese servicio. Reloj de Lima en vivo |
| Manifiesto | `sections/Statement.tsx` | Las palabras pasan de gris a blanco con el scroll |
| Un solo equipo | `sections/OneTeam.tsx` | Cifras que cuentan y mini teclas que aparecen |
| Servicios | `sections/Services.tsx` | Pestañas con forma de tecla (clic, flechas, W/A/S/D) |
| Cómo funciona, Demos, Precios, Comparativa, Formulario, Preguntas, Cierre, Footer | `sections/*.tsx` | Aparición suave al entrar en pantalla |

Con `prefers-reduced-motion` todo se ve en su estado final.

---

## Medición

Con `NEXT_PUBLIC_GA_ID` y/o `NEXT_PUBLIC_META_PIXEL_ID` se cargan GA4 y Meta Pixel. Eventos: `whatsapp_click` (Contact), `demo_cta_click`, `lead_submit` (Lead) y `plan_click`. Para medir un botón nuevo, agrégale `data-track="evento"` y `data-track-label="etiqueta"`.

---

## Desplegar en Vercel

1. Importa el repositorio en [vercel.com/new](https://vercel.com/new).
2. En **Settings → Environment Variables**, agrega las variables de `.env.example`.
3. `main` publica el sitio y `develop` genera una URL de vista previa.
4. En **Settings → Domains**, conecta el dominio y actualiza `NEXT_PUBLIC_SITE_URL`.

---

## Cómo colaborar

Ramas fijas `develop` (integración) y `main` (producción). Detalle en [CONTRIBUTING.md](CONTRIBUTING.md). Cada pull request y cada push a `develop` o `main` pasa por CI (lint, TypeScript y build).

## Estructura

```
src/
├── app/                  # layout, página, páginas legales, sitemap, robots, ícono, tokens (globals.css)
├── components/
│   ├── sections/         # una sección por archivo, cada una con su .module.css
│   ├── ui/               # KeyCap, CountUp, LimaClock, Icons, Logo, RevealObserver, TrackClicks
│   ├── Analytics.tsx     # GA4 + Meta Pixel
│   ├── JsonLd.tsx        # ProfessionalService + FAQPage
│   └── LegalPage.tsx     # plantilla de páginas legales
├── data/                 # TODO el contenido editable
└── lib/                  # whatsapp, analytics, lead (submitLead), teclas
```
