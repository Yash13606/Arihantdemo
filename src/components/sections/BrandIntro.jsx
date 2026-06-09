import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function BrandIntro() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-pad bg-charcoal">
      <div className="mx-auto max-w-4xl text-center">
        <p data-reveal className="mb-4 text-[11px] tracking-[0.28em] text-copper uppercase">
          Arihant Lights
        </p>
        <h2
          data-reveal
          className="font-display mb-8 text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.05] font-light text-cream"
        >
          Crafting Spaces Beyond Lighting
        </h2>
        <p data-reveal className="mx-auto max-w-2xl text-base leading-relaxed text-mist/70 md:text-lg">
          Arihant Lights brings together luxury lighting, designer mirrors, European fans, and
          intelligent home automation solutions for modern residences.
        </p>
      </div>
    </section>
  );
}
