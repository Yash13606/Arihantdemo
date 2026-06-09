import { useCart } from '../../context/CartContext';
import { openWhatsAppInquiry } from '../../utils/whatsapp';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CTASection() {
  const ref = useScrollReveal();
  const { items, setDrawerOpen } = useCart();

  return (
    <section id="contact" ref={ref} className="section-pad relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          data-reveal
          className="font-display mb-6 text-[clamp(2.2rem,6vw,4rem)] leading-tight font-light text-cream"
        >
          Ready To Transform Your Space?
        </h2>
        <p data-reveal className="mb-10 text-lg text-mist/65">
          Let&apos;s create a smarter and more beautiful home together.
        </p>
        <div data-reveal className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => document.getElementById('lighting')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-copper px-8 py-4 text-[11px] tracking-[0.14em] text-ink uppercase transition hover:bg-copper-hot"
          >
            Browse Products
          </button>
          <button
            type="button"
            onClick={() => (items.length ? openWhatsAppInquiry(items) : setDrawerOpen(true))}
            className="rounded-full border border-white/15 px-8 py-4 text-[11px] tracking-[0.14em] text-cream uppercase transition hover:border-copper hover:text-copper-hot"
          >
            Send WhatsApp Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
