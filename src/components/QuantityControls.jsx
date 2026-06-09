import { useCart } from '../context/CartContext';

export default function QuantityControls({ product, className = '', theme = 'dark' }) {
  const { getQuantity, addItem, incrementItem, decrementItem } = useCart();
  const quantity = getQuantity(product.id);
  const isLight = theme === 'light';

  if (quantity === 0) {
    return (
      <button
        type="button"
        onClick={() => addItem(product)}
        className={`w-full rounded-full border py-2.5 text-[10px] tracking-[0.12em] uppercase transition ${
          isLight
            ? 'border-espresso/15 text-espresso hover:border-copper hover:bg-copper hover:text-ink'
            : 'border-copper/30 text-copper hover:bg-copper hover:text-ink'
        } ${className}`}
      >
        Add To Inquiry
      </button>
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-between rounded-full border px-1 py-1 ${
        isLight
          ? 'border-espresso/12 bg-linen-deep/60'
          : 'border-copper/30 bg-copper/5'
      } ${className}`}
      role="group"
      aria-label={`Quantity for ${product.name}`}
    >
      <button
        type="button"
        onClick={() => decrementItem(product.id)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-copper transition hover:bg-copper/15"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className={`min-w-[2ch] text-center text-sm font-medium tabular-nums ${isLight ? 'text-espresso' : 'text-cream'}`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => incrementItem(product.id)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-copper transition hover:bg-copper/15"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
