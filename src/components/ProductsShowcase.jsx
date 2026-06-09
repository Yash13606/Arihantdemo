import ProductCard from './ProductCard';
import { CATEGORIES, products } from '../data/products';

const categoryOrder = ['lighting', 'mirrors', 'fans', 'smarthome'];

export default function ProductsShowcase() {
  return (
    <section id="products" className="bg-charcoal px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 border-b border-white/8 pb-10">
          <p className="mb-2 text-[11px] tracking-[0.25em] text-copper uppercase">Catalogue</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-light text-cream">
            Our Products
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist/60">
            Luxury lighting, designer mirrors, European fans, and smart home automation —
            curated for premium residences. Add items to your inquiry cart.
          </p>
        </div>

        <div className="space-y-16">
          {categoryOrder.map((catId) => {
            const cat = CATEGORIES[catId];
            const items = products.filter((p) => p.category === catId);
            if (!items.length) return null;

            return (
              <div key={catId}>
                <h3 className="font-display mb-8 text-xl font-light text-cream md:text-2xl">
                  {cat.label}
                </h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
