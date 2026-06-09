import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryItems } from '../../data/stories';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const filters = ['All', 'Living Rooms', 'Bedrooms', 'Bathrooms', 'Villas', 'Apartments'];

export default function Gallery() {
  const ref = useScrollReveal();
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const items =
    active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" ref={ref} className="section-pad bg-charcoal-soft">
      <p data-reveal className="mb-3 text-[11px] tracking-[0.25em] text-copper uppercase">
        Inspirations
      </p>
      <h2 data-reveal className="font-display mb-8 text-[clamp(2rem,5vw,3rem)] font-light text-cream">
        Residential Gallery
      </h2>

      <div data-reveal className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-[10px] tracking-widest uppercase transition ${
              active === f
                ? 'bg-copper text-ink'
                : 'border border-white/10 text-mist/60 hover:border-copper/40'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            data-reveal
            onClick={() => setLightbox(item)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
          >
            <img src={item.src} alt={item.title} className="w-full object-cover" loading="lazy" />
            <div className="bg-ink/80 px-4 py-3">
              <p className="text-[10px] tracking-widest text-copper uppercase">{item.category}</p>
              <p className="font-display text-lg text-cream">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[900] flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
