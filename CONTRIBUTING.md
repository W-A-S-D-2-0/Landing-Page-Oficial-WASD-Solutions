# Cómo trabajamos en la landing de Kodena

## Ramas

Trabajamos con **una sola rama fija: `main`**. Lo que está en `main` es lo que se publica.

- **Nadie trabaja directo en `main`.** Cada cambio va en su propia rama, sale de `main` y vuelve a `main` con un pull request (así el CI revisa todo antes de publicar).
- Nombra las ramas con un prefijo y una descripción corta en minúsculas, separada por guiones:

| Prefijo | Para qué | Ejemplo |
| --- | --- | --- |
| `feature/` | Nueva sección, componente o funcionalidad | `feature/seccion-testimonios` |
| `content/` | Textos, FAQ, datos de contacto | `content/faq-noviembre` |
| `fix/` | Corrección de un error | `fix/menu-movil-escape` |
| `style/` | Ajustes visuales sin cambiar contenido | `style/espaciado-proyectos` |
| `chore/` | Configuración, dependencias, CI, SEO | `chore/actualizar-next` |

Cuando una rama ya se fusionó, se borra (GitHub ofrece el botón "Delete branch" al hacer merge).

## Flujo

```bash
git checkout main
git pull
git checkout -b content/faq-noviembre
# … cambios …
npm run check
git add .
git commit -m "content: agrega pregunta sobre facturación"
git push -u origin content/faq-noviembre
```

Luego abre un pull request **hacia `main`**, completa la plantilla y espera que el CI pase en verde. Al fusionarlo, se publica.

Si es un error urgente que ya está publicado, el camino es el mismo con una rama `fix/`: lo importante es que el CI pase antes de fusionar.

## Mensajes de commit

Formato: `tipo: descripción en presente y en minúsculas`, con el mismo tipo que el prefijo de la rama.

```
feature: agrega sección de testimonios
content: actualiza respuestas de preguntas frecuentes
fix: corrige foco del menú móvil al cerrar
style: reduce espaciado en la sección de proyectos
chore: actualiza dependencias
```

## Estructura y nombres

```
src/
├── app/                  # rutas de Next.js (page.tsx, layout.tsx, sitemap.ts…)
├── components/
│   ├── sections/         # una sección por archivo + su .module.css
│   └── ui/               # piezas reutilizables (Logo, ThemeToggle, Intro, Icons…)
├── data/                 # TODO el contenido editable
└── lib/                  # lógica sin interfaz (whatsapp, analytics, lead)
```

| Qué | Convención | Ejemplo |
| --- | --- | --- |
| Componentes | `PascalCase.tsx`, un componente principal por archivo, exportación con nombre | `LineIcon`, `export function Services()` |
| Secciones nuevas | En `components/sections/` y agregadas en orden en `src/app/page.tsx` | `Testimonials.tsx` |
| Datos | En `src/data/`, archivos en minúscula, exportaciones en `camelCase` | `faq.ts` → `export const faq` |
| Helpers | En `src/lib/`, archivos en minúscula | `whatsapp.ts` |
| Rutas | Carpetas en español y minúsculas | `app/privacidad/page.tsx` |
| Ids de secciones (anclas) | En español, minúsculas y con guiones | `#como-funciona` |

## Reglas que no se rompen

1. **Textos solo en `src/data/`.** La landing no publica precios de Kodena.
2. **Colores y medidas solo con tokens** de `src/app/globals.css` (`var(--surface)`, `var(--text)`, `var(--primary)`, `var(--cta-bg)`…), que cambian solos con el tema claro/oscuro. Estilos en el `.module.css` de cada componente.
3. **Animaciones con intención:** usa `data-reveal` para la aparición al hacer scroll. Entradas de 0.6–1.2 s con `ease-out`, nada en bucle infinito, siempre respetando `prefers-reduced-motion` y sin depender del JavaScript para ver el contenido.
4. **Nada inventado:** ni clientes, ni testimonios, ni reseñas, ni logos, ni cifras de resultados. Lo ilustrativo va rotulado como "Ejemplo ilustrativo" y los clientes reales se muestran con su permiso.
5. **Accesibilidad:** HTML semántico, un solo H1, todo usable con teclado, áreas táctiles de al menos 44 px.
6. **Antes de cada PR:** `npm run check` sin errores.
