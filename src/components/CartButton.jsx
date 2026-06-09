import { useCart } from '../context/CartContext';

export default function CartButton() {
  const { count, setDrawerOpen } = useCart();

  return (
    <button
      type="button"
      onClick={() => setDrawerOpen(true)}
      className="glass-card fixed top-5 right-5 z-[800] flex items-center gap-2 rounded-full px-5 py-3 text-[11px] tracking-[0.12em] text-cream uppercase transition hover:border-copper/40 hover:shadow-[0_0_24px_rgba(196,165,116,0.2)] md:top-6 md:right-8"
      aria-label={`Open inquiry cart, ${count} items`}
    >
      <span>Cart</span>
      <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-copper/20 px-1.5 text-copper tabular-nums">
        {count}
      </span>
    </button>
  );
}
