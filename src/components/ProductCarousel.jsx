import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const PAGE_SIZE = 4;

const slideEase = [0.22, 1, 0.36, 1];

function ChevronIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 6.5L9 12l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavButton({ direction, onClick, disabled, label }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      whileHover={disabled ? undefined : { scale: 1.04 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      className={`flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full border border-espresso/10 bg-white text-espresso shadow-[0_4px_20px_rgba(42,37,32,0.08)] transition-colors hover:border-copper hover:bg-cream hover:text-copper disabled:pointer-events-none disabled:border-espresso/5 disabled:bg-linen-deep/50 disabled:text-warm-stone/35 disabled:shadow-none md:h-16 md:w-16 ${
        direction === 'right' ? '[&_svg]:rotate-180' : ''
      }`}
    >
      <ChevronIcon />
    </motion.button>
  );
}

export default function ProductCarousel({ items, categoryLabel }) {
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < items.length; i += PAGE_SIZE) {
      chunks.push(items.slice(i, i + PAGE_SIZE));
    }
    return chunks.length ? chunks : [[]];
  }, [items]);

  const totalPages = pages.length;
  const safePage = Math.min(page, totalPages - 1);
  const start = safePage * PAGE_SIZE;

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="relative">
      <div className="flex items-center gap-4 md:gap-6">
        <NavButton
          direction="left"
          onClick={goPrev}
          disabled={safePage === 0}
          label={`Previous ${categoryLabel} products`}
        />

        <div className="min-w-0 flex-1 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${safePage * 100}%` }}
            transition={{ duration: 0.5, ease: slideEase }}
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full shrink-0 pr-px"
                aria-hidden={pageIndex !== safePage}
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: pageIndex === safePage ? 1 : 0.72,
                  }}
                  transition={{ duration: 0.35, ease: slideEase }}
                  className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5"
                >
                  {pageItems.map((product) => (
                    <ProductCard key={product.id} product={product} theme="light" />
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>

          <p className="mt-6 text-center text-[11px] tracking-widest text-warm-stone/80 uppercase">
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

        <NavButton
          direction="right"
          onClick={goNext}
          disabled={safePage >= totalPages - 1}
          label={`Next ${categoryLabel} products`}
        />
      </div>
    </div>
  );
}
