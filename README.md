# Arihant Lights Demo

Cinematic scroll homepage for **Arihant Lights** — luxury lighting, designer mirrors, European fans, and smart home automation.

## Stack

- React + Vite
- Tailwind CSS
- GSAP ScrollTrigger + Lenis (hero frame sequence)
- Framer Motion (cart drawer)
- WhatsApp inquiry cart (no checkout)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Frame PNGs live in `all_frames/` and are copied to `dist/all_frames` on build.

## Deploy

Static hosting (Vercel, Netlify, GitHub Pages): run `npm run build` and serve the `dist` folder.
