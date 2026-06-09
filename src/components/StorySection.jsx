import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection({ story, sectionId }) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const revealRef = useScrollReveal();
  const products = getProductsByCategory(story.id);

  const setSectionRef = (el) => {
    sectionRef.current = el;
    revealRef.current = el;
  };

  useGSAP(
    () => {
      const frames = sectionRef.current?.querySelectorAll('[data-story-frame]');
      if (!frames?.length || !pinRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: `+=${frames.length * 100}%`,
          pin: true,
          scrub: 0.8,
        },
      });

      frames.forEach((frame, i) => {
        if (i === 0) {
          tl.fromTo(frame, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1 });
        } else {
          tl.to(frames[i - 1], { opacity: 0, scale: 0.98, duration: 0.5 }, `+=0`);
          tl.fromTo(frame, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.8 }, '<');
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id={sectionId} ref={setSectionRef} className="bg-ink">
      <div className="section-pad border-t border-white/5">
        <p data-reveal className="mb-3 text-[11px] tracking-[0.25em] text-copper uppercase">
          {story.subtitle}
        </p>
        <h2 data-reveal className="font-display mb-16 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-light text-cream">
          {story.title}
        </h2>
      </div>

      <div ref={pinRef} className="relative h-screen w-full overflow-hidden bg-charcoal">
        {story.frames.map((frame, i) => (
          <div
            key={frame.caption}
            data-story-frame
            className={`absolute inset-0 ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={frame.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
            <p className="absolute bottom-[10vh] left-6 font-display text-2xl text-cream md:left-12 md:text-4xl">
              {frame.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="section-pad">
        <h3 data-reveal className="font-display mb-10 text-2xl font-light text-cream">
          {story.subtitle} Collection
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} data-reveal>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
