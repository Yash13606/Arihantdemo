import { useState } from 'react';
import ProductCard from './ProductCard';

const PAGE_SIZE = 4;

function ChevronIcon({ direction }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={direction === 'left' ? '' : 'rotate-180'}
    >
      <path
        d="M12.5 4.5L7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductCarousel({ items, categoryLabel }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const start = safePage * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="relative">
      <div className="flex items-stretch gap-3 md:gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={safePage === 0}
          aria-label={`Previous ${categoryLabel} products`}
          className="flex w-10 shrink-0 items-center justify-center self-center rounded-full border border-espresso/12 bg-white/80 text-espresso transition hover:border-copper hover:text-copper disabled:pointer-events-none disabled:opacity-25 md:w-12"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} theme="light" />
            ))}
          </div>
          <p className="mt-5 text-center text-[11px] tracking-widest text-warm-stone/80 uppercase">
            {safePage + 1} / {totalPages}
            {items.length > PAGE_SIZE && (
              <span className="normal-case tracking-normal text-warm-stone/60">
                {' '}
                · showing {start + 1}–{Math.min(start + PAGE_SIZE, items.length)} of{' '}
                {items.length}
              </span>
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={safePage >= totalPages - 1}
          aria-label={`Next ${categoryLabel} products`}
          className="flex w-10 shrink-0 items-center justify-center self-center rounded-full border border-espresso/12 bg-white/80 text-espresso transition hover:border-copper hover:text-copper disabled:pointer-events-none disabled:opacity-25 md:w-12"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
