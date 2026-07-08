# Portfolio — Nil Taña Mateu

Web portfolio profesional multipágina construida con **React + Vite + TypeScript + Tailwind CSS**.

## Páginas

- `/` — Home (hero con terminal animada, servicios, proyectos destacados, stack, CTA)
- `/about` — Sobre mí (bio, áreas de foco, qué puedo crear, forma de trabajar)
- `/projects` — Proyectos con filtros por tipo
- `/projects/:slug` — Página de detalle (case study) de cada proyecto
- `/skills` — Habilidades técnicas por bloques
- `/experience` — Experiencia (timeline) + Educación + Certificaciones
- `/contact` — Contacto (formulario, copiar email, teléfono, disponibilidad)

## Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # generar versión de producción en /dist
npm run preview  # previsualizar la versión de producción → http://localhost:4173
```

## Editar contenido

Todo el contenido está separado del diseño:

- **Proyectos**: [src/data/projects.ts](src/data/projects.ts) — añade o edita proyectos aquí.
- **Perfil, skills, experiencia, educación, certificaciones**: [src/data/profile.ts](src/data/profile.ts)

## Vistas previas en vivo

Las tarjetas de proyecto muestran **la web real en miniatura** (un iframe
escalado y no interactivo dentro de un marco de navegador). No hace falta
mantener capturas de pantalla: si actualizas una de tus webs, la miniatura
se actualiza sola. Comprobado que las 5 webs permiten incrustarse (sin
X-Frame-Options ni CSP restrictiva).

## CV descargable

El botón "Download CV" apunta a `/Nil-Tanya-Mateu-CV.pdf`.
**Coloca tu CV en PDF dentro de la carpeta `public/` con el nombre exacto `Nil-Tanya-Mateu-CV.pdf`** y funcionará automáticamente.

## Deploy recomendado: Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), importa el repositorio.
3. Vercel detecta Vite automáticamente — no hay que configurar nada.
4. El archivo `vercel.json` ya está incluido para que las rutas internas
   (por ejemplo `/projects/tama-studios-dashboard`) funcionen al recargar la página.

> Nota: GitHub Pages no soporta bien las rutas de una SPA al recargar.
> Para esta web, **Vercel es la opción recomendada**.
