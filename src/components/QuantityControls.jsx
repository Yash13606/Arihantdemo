import { useCart } from '../context/CartContext';

export default function QuantityControls({ product, className = '' }) {
  const { getQuantity, addItem, incrementItem, decrementItem } = useCart();
  const quantity = getQuantity(product.id);

  if (quantity === 0) {
    return (
      <button
        type="button"
        onClick={() => addItem(product)}
        className={`w-full rounded-full border border-copper/30 py-2.5 text-[10px] tracking-[0.12em] text-copper uppercase transition hover:bg-copper hover:text-ink ${className}`}
      >
        Add To Inquiry
      </button>
    );
  }

  return (
    <div
      className={`flex w-full items-center justify-between rounded-full border border-copper/30 bg-copper/5 px-1 py-1 ${className}`}
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
      <span className="min-w-[2ch] text-center text-sm font-medium text-cream tabular-nums">
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
