import { AnimatePresence, motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import { openWhatsAppInquiry } from '../utils/whatsapp';
import QuantityControls from './QuantityControls';

export default function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, clearCart } = useCart();

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[850] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          />
          <motion.aside
            className="glass-card fixed top-0 right-0 z-[860] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-charcoal/95 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            role="dialog"
            aria-label="Inquiry cart"
          >
            <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
              <h2 className="font-display text-2xl font-light text-cream">Your Inquiry</h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-mist/60 transition hover:text-cream"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="py-12 text-center text-sm text-mist/50">
                  No products added yet. Browse our collections below.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-4 rounded-2xl border border-white/6 bg-white/2 p-3"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] tracking-widest text-copper uppercase">
                          {CATEGORIES[item.category]?.label}
                        </p>
                        <p className="truncate font-medium text-cream">{item.name}</p>
                        <p className="mb-2 text-xs text-mist/50">{item.id}</p>
                        <QuantityControls product={item} className="max-w-[140px] !py-0.5" />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="space-y-3 border-t border-white/8 p-6">
              <button
                type="button"
                disabled={!items.length}
                onClick={() => openWhatsAppInquiry(items)}
                className="w-full rounded-full bg-copper py-4 text-[11px] font-medium tracking-[0.14em] text-ink uppercase transition hover:bg-copper-hot disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send Inquiry
              </button>
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full py-2 text-xs tracking-widest text-mist/50 uppercase hover:text-cream"
                >
                  Clear Cart
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
