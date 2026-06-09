import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const cards = [
  {
    title: 'Curated Luxury Products',
    body: 'Handpicked lighting, mirrors, fans, and automation from premium European and global brands.',
  },
  {
    title: 'Expert Consultation',
    body: 'Personalized guidance to match your interior vision, architecture, and lifestyle.',
  },
  {
    title: 'Smart Home Specialists',
    body: 'End-to-end automation design — from a single touch panel to whole-home intelligence.',
  },
  {
    title: 'Installation Support',
    body: 'Professional coordination for flawless setup in luxury residences and villas.',
  },
];

export default function WhyArihant() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-pad bg-charcoal">
      <p data-reveal className="mb-3 text-[11px] tracking-[0.25em] text-copper uppercase">
        Why Arihant
      </p>
      <h2 data-reveal className="font-display mb-14 text-[clamp(2rem,5vw,3rem)] font-light text-cream">
        The Arihant Difference
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            data-reveal
            className="glass-card rounded-2xl p-8 transition hover:border-copper/25 hover:shadow-[0_0_40px_rgba(196,165,116,0.1)]"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-display mb-4 text-2xl font-light text-cream">{card.title}</h3>
            <p className="text-sm leading-relaxed text-mist/65">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
