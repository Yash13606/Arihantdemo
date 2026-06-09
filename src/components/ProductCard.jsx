import QuantityControls from './QuantityControls';

const BADGE = {
  lighting: 'Lighting',
  mirrors: 'Mirrors',
  fans: 'Fans',
  smarthome: 'Smart Home',
};

export default function ProductCard({ product, theme = 'dark' }) {
  const isLight = theme === 'light';

  return (
    <article
      className={
        isLight
          ? 'product-card-light overflow-hidden rounded-xl transition'
          : 'glass-card overflow-hidden rounded-xl border border-white/6 transition hover:border-copper/25'
      }
    >
      <div
        className={`relative aspect-[4/5] overflow-hidden ${isLight ? 'bg-linen-deep' : 'bg-charcoal-soft'}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span
          className={
            isLight
              ? 'absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] tracking-widest text-copper uppercase shadow-sm'
              : 'absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[9px] tracking-widest text-copper uppercase backdrop-blur-sm'
          }
        >
          {BADGE[product.category] ?? 'Product'}
        </span>
      </div>
      <div className="p-4">
        <p
          className={`mb-0.5 text-[10px] tracking-widest ${isLight ? 'text-warm-stone/70' : 'text-mist/40'}`}
        >
          {product.id}
        </p>
        <h3
          className={`font-display mb-3 text-lg font-light ${isLight ? 'text-espresso' : 'text-cream'}`}
        >
          {product.name}
        </h3>
        <QuantityControls product={product} theme={theme} />
      </div>
    </article>
  );
}
