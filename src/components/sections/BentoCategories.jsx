import { motion } from 'framer-motion';
import { frameUrl } from '../../lib/framePlaylist';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const categories = [
  {
    id: 'lighting',
    title: 'Luxury Lighting',
    image: frameUrl('first_half', 95),
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'mirrors',
    title: 'Designer Mirrors',
    image: frameUrl('second_half', 50),
    span: '',
  },
  {
    id: 'fans',
    title: 'European Fans',
    image: frameUrl('first_half', 165),
    span: '',
  },
  {
    id: 'smarthome',
    title: 'Smart Home Automation',
    image: frameUrl('second_half', 192),
    span: 'md:col-span-2',
  },
];

export default function BentoCategories() {
  const ref = useScrollReveal();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" ref={ref} className="section-pad bg-ink">
      <p data-reveal className="mb-3 text-[11px] tracking-[0.25em] text-copper uppercase">
        Collections
      </p>
      <h2 data-reveal className="font-display mb-12 text-[clamp(2rem,5vw,3rem)] font-light text-cream">
        Curated for Premium Living
      </h2>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[180px]">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            type="button"
            data-reveal
            onClick={() => scrollTo(cat.id)}
            className={`group relative overflow-hidden rounded-2xl text-left ${cat.span}`}
            whileHover={{ scale: 0.99 }}
          >
            <img
              src={cat.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 group-hover:shadow-[inset_0_0_80px_rgba(196,165,116,0.15)]" />
            <div className="absolute right-0 bottom-0 left-0 p-6">
              <h3 className="font-display text-2xl font-light text-cream md:text-3xl">{cat.title}</h3>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-copper uppercase opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
