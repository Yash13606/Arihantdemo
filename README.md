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

## Deploy on Vercel

1. Import this repo on [Vercel](https://vercel.com)
2. Framework preset: **Vite** (or use `vercel.json` included)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

No environment variables required. Frame assets are copied to `dist/all_frames` during build.
