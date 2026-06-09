import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import {
  ACT_II_START,
  MAX_DPR,
  TOTAL_FRAMES,
  getFramePath,
} from '../lib/framePlaylist';
import { getActiveCaption } from '../data/heroCaptions';
import HeroCaptions from './HeroCaptions';

gsap.registerPlugin(ScrollTrigger);

export default function FrameHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const progressRef = useRef(null);
  const loaderRef = useRef(null);
  const imagesRef = useRef([]);
  const ctxRef = useRef(null);
  const currentFrameRef = useRef(0);
  const lenisRef = useRef(null);

  const [loadedPct, setLoadedPct] = useState(0);
  const [ready, setReady] = useState(false);
  const [activeCaptionId, setActiveCaptionId] = useState('living');
  const loadedCountRef = useRef(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const drawFrame = (index) => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
    const img = imagesRef.current[idx];
    if (!img?.complete || !img.naturalWidth) return;

    const cW = window.innerWidth;
    const cH = window.innerHeight;
    const iW = img.naturalWidth;
    const iH = img.naturalHeight;
    const scale = Math.max(cW / iW, cH / iH);
    const sw = iW * scale;
    const sh = iH * scale;
    const dx = (cW - sw) / 2;
    const dy = (cH - sh) / 2;

    ctx.clearRect(0, 0, cW, cH);
    ctx.drawImage(img, dx, dy, sw, sh);
    currentFrameRef.current = idx;
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const W = window.innerWidth;
    const H = window.innerHeight;

    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext('2d', { alpha: false });
    }

    const ctx = ctxRef.current;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    drawFrame(currentFrameRef.current);
  };

  useEffect(() => {
    const loadFrame = (globalIndex) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          imagesRef.current[globalIndex] = img;
          loadedCountRef.current += 1;
          const pct = Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100);
          setLoadedPct(pct);
          if (globalIndex === 0) drawFrame(0);
          resolve();
        };
        img.onerror = () => {
          loadedCountRef.current += 1;
          setLoadedPct(Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
          resolve();
        };
        img.src = getFramePath(globalIndex);
        imagesRef.current[globalIndex] = img;
      });

    const preload = async () => {
      const critical = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 4) critical.push(i);
      critical.push(ACT_II_START, ACT_II_START + 1, TOTAL_FRAMES - 1);

      await Promise.all([...new Set(critical)].map(loadFrame));
      setReady(true);

      const remaining = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!critical.includes(i)) remaining.push(i);
      }
      const BATCH = 10;
      for (let i = 0; i < remaining.length; i += BATCH) {
        await Promise.all(remaining.slice(i, i + BATCH).map(loadFrame));
      }
    };

    preload();
  }, []);

  useEffect(() => {
    if (!ready) return;
    setupCanvas();
    const onResize = () => {
      setupCanvas();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ready]);

  useGSAP(
    () => {
      if (!ready || prefersReducedMotion) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false,
      });
      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);
      const ticker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.85,
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (TOTAL_FRAMES - 1));
          drawFrame(idx);
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
          if (overlayRef.current) {
            gsap.set(overlayRef.current, { opacity: 1 - self.progress * 1.6 });
          }
          const caption = getActiveCaption(idx);
          setActiveCaptionId(caption?.id ?? null);
        },
      });

      return () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === sectionRef.current) t.kill();
        });
      };
    },
    { dependencies: [ready, prefersReducedMotion], scope: sectionRef }
  );

  return (
    <>
      <div
        ref={loaderRef}
        className={`fixed inset-0 z-[9000] grid place-items-center bg-ink transition-opacity duration-700 ${
          ready ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        aria-busy={!ready}
        aria-label="Loading experience"
      >
        <div className="w-[min(240px,70vw)] text-center">
          <div className="mb-3 h-px overflow-hidden bg-white/10">
            <div className="h-full bg-linear-to-r from-copper to-copper-hot transition-all" style={{ width: `${loadedPct}%` }} />
          </div>
          <p className="text-[11px] tracking-widest text-mist/60 tabular-nums">{loadedPct}%</p>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-[600] h-0.5 bg-white/5">
        <div ref={progressRef} className="h-full w-0 bg-linear-to-r from-copper to-copper-hot shadow-[0_0_12px_rgba(196,165,116,0.5)]" />
      </div>

      <section
        id="hero"
        ref={sectionRef}
        className="relative h-[1400vh]"
        aria-label="Cinematic mansion walkthrough"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal">
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

          <div
            ref={overlayRef}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end pb-[14vh] text-center"
          >
            <p className="mb-2 text-[10px] tracking-[0.35em] text-copper uppercase md:text-[11px]">
              Arihant Lights
            </p>
            <h1 className="font-display text-[clamp(1.6rem,4.5vw,2.75rem)] font-light tracking-[0.08em] text-cream">
              Where Light Meets Living
            </h1>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-mist/50 uppercase">
              Scroll to explore
            </p>
          </div>

          <HeroCaptions activeId={activeCaptionId} />

          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 35%, rgba(4,4,8,0.7) 100%), linear-gradient(to top, rgba(4,4,8,0.55) 0%, transparent 28%)',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none fixed inset-0 z-[2] opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '180px',
            }}
            aria-hidden="true"
          />
        </div>
      </section>
    </>
  );
}
