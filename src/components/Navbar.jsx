import { useCart } from '../context/CartContext';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Enquiry', href: '#enquiry' },
];

export default function Navbar() {
  const { count, setDrawerOpen } = useCart();

  return (
    <header className="fixed top-0 right-0 left-0 z-[700] px-4 pt-4 md:px-8">
      <nav
        className="glass-card mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/8 px-5 py-3 md:px-8"
        aria-label="Main"
      >
        <a
          href="#"
          className="font-display text-sm tracking-[0.14em] text-cream md:text-base"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ARIHANT LIGHTS
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-[10px] tracking-[0.14em] text-mist/70 uppercase transition hover:text-cream md:px-4 md:text-[11px]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="ml-1 flex items-center gap-2 rounded-full border border-copper/25 bg-copper/10 px-3 py-2 text-[10px] tracking-[0.12em] text-copper uppercase transition hover:bg-copper/20 md:px-4 md:text-[11px]"
          >
            Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-copper/25 px-1 text-[10px] tabular-nums">
              {count}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
