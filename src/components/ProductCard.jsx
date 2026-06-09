import QuantityControls from './QuantityControls';

const BADGE = {
  lighting: 'Lighting',
  mirrors: 'Mirrors',
  fans: 'Fans',
  smarthome: 'Smart Home',
};

export default function ProductCard({ product }) {
  return (
    <article className="glass-card overflow-hidden rounded-xl border border-white/6 transition hover:border-copper/25">
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-[9px] tracking-widest text-copper uppercase backdrop-blur-sm">
          {BADGE[product.category] ?? 'Product'}
        </span>
      </div>
      <div className="p-4">
        <p className="mb-0.5 text-[10px] tracking-widest text-mist/40">{product.id}</p>
        <h3 className="font-display mb-3 text-lg font-light text-cream">{product.name}</h3>
        <QuantityControls product={product} />
      </div>
    </article>
  );
}
