# Mode Designs

Réplica del sitio de Mode Designs (teclados mecánicos premium) hecha como
proyecto de la unidad de Desarrollo Web. Sitio estático, responsive y
accesible con HTML5, CSS y Bootstrap 5.

## Estructura

```
web-desarrollo/
├── index.html             Portada
├── productos.html         Catálogo y comparativa
├── sobre-nosotros.html    Empresa, equipo y video
├── styles.css             Importa los módulos de styles/
├── styles/
│   ├── variables.css      Variables y ajustes de Bootstrap
│   ├── layout.css         Header, footer y secciones
│   ├── components.css     Hero, cards, tablas, galería, pasos
│   └── transitions.css    Animaciones y efectos hover
└── assets/                Imágenes y video
```

## Stack

- HTML5 semántico
- Bootstrap 5.3 por CDN (grid, carousel de producto)
- CSS propio con custom properties, dividido por módulos
- Fuentes de Google Fonts: Cormorant Garamond y Pixelify Sans

`styles.css` es el único CSS propio que se enlaza; carga los módulos en
orden. Bootstrap se personaliza sobrescribiendo sus variables `--bs-*` en
`variables.css`, sin tocar el archivo del framework.

## Animaciones

Sutiles y sin JavaScript. En `transitions.css` hay cinco: el fundido al
cambiar de página (View Transitions) y cuatro apariciones al hacer scroll
—desplazamiento de títulos y cards, fundido de imágenes/tablas, zoom leve de
la galería y entrada lateral de los labels— usando scroll-driven animations
(`animation-timeline: view()`). Van envueltas en `@supports`, así que en
navegadores sin soporte el contenido se muestra normal. Aparte, efectos
hover discretos (sombra de card, subrayado del menú, brillo de la galería).
Todo se apaga con `prefers-reduced-motion`.

## Accesibilidad

Skip-link, `aria-current` en el enlace activo, `lang="en"` en el texto en
inglés, `alt` en las imágenes, subtítulos en el video y `meta description`
en cada página.

## Correr en local

Abrir `index.html` directamente funciona, pero para que carguen bien el
video y los subtítulos conviene un servidor:

```bash
python3 -m http.server 8000
```

Y entrar a http://localhost:8000.

## Publicar en GitHub Pages

Subir el contenido de `web-desarrollo/` a un repo (con `index.html` en la
raíz):

```bash
git init
git add .
git commit -m "Sitio Mode Designs"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

Luego en Settings → Pages, elegir la rama `main` y carpeta `/ (root)`. El
sitio queda en `https://USUARIO.github.io/REPO/`. Netlify o Vercel también
sirven arrastrando la carpeta.

## Créditos

Marca e imágenes de [modedesigns.com](https://modedesigns.com). Solo uso
educativo.
