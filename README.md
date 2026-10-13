# MyPortfolio
# Lilla Vrencian — portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, react-icons, and CSS. Content is based on the supplied CV. The original portrait and downloadable CV are in `public/`.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build`. This project exports a static website to `out/` and can be hosted on any static host, including Vercel.

## Edit

- `app/page.tsx`: biography, projects, experience, links, and interactions
- `app/globals.css`: theme, layouts, responsive breakpoints, and animations
- `app/layout.tsx`: page metadata
- `public/lilla.jpg`: profile photo
- `public/Lilla-Vrencian-CV.pdf`: downloadable CV

Contact uses a mailto link and a clipboard action; no messages are stored. Project illustrations are decorative, rather than screenshots. All project destinations come from the supplied CV.

## Interactive edition

- Orange theme
- Technology icons and a filterable skills explorer
- Original Memory Card Game embedded from GitHub Pages, with reload and full-screen links
- Eight real Ghosted Rooms variants with featured puzzles, collection links, and optional live previews
- Portfolio terminal: help, about, skills, projects, contact, cv, clear
- Scroll progress, active navigation, entrance effects, and rotating hero text
- Keyboard navigation, mobile layouts, and reduced-motion support

The Memory tab embeds the actual Memory Card Game at https://vrencianlilla.github.io/MemoryCardGame/. The Ghosted Rooms tab links to and optionally embeds real puzzles and variant collections from ghosted-rooms.com. The embedded game requires an internet connection; a direct link is available for full-screen play. Icons are bundled locally through react-icons; no icon CDN is required. All editing starts in app/components/Interactive.tsx, app/page.tsx, and app/globals.css.
