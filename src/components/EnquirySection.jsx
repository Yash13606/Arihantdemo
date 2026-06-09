import { useCart } from '../context/CartContext';
import { openWhatsAppInquiry } from '../utils/whatsapp';

export default function EnquirySection() {
  const { items, setDrawerOpen } = useCart();

  return (
    <section
      id="enquiry"
      className="border-t border-white/8 bg-ink px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-[11px] tracking-[0.25em] text-copper uppercase">Get in Touch</p>
        <h2 className="font-display mb-5 text-[clamp(2rem,5vw,3rem)] font-light text-cream">
          Send an Enquiry
        </h2>
        <p className="mb-10 text-sm leading-relaxed text-mist/60 md:text-base">
          Add products from our catalogue, then send your selection directly on WhatsApp.
          Our team will share details and arrange a consultation.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={() => (items.length ? openWhatsAppInquiry(items) : setDrawerOpen(true))}
            className="w-full rounded-full bg-copper px-10 py-4 text-[11px] tracking-[0.14em] text-ink uppercase transition hover:bg-copper-hot sm:w-auto"
          >
            {items.length ? 'Send WhatsApp Inquiry' : 'Open Cart & Add Products'}
          </button>
          <a
            href="#products"
            className="w-full rounded-full border border-white/12 px-10 py-4 text-[11px] tracking-[0.14em] text-cream uppercase transition hover:border-copper/40 sm:w-auto"
          >
            Browse Products
          </a>
        </div>

        <p className="mt-14 text-[11px] tracking-widest text-mist/35 uppercase">
          © {new Date().getFullYear()} Arihant Lights · WhatsApp +91 63839 45610
        </p>
      </div>
    </section>
  );
}
