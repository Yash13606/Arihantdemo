const links = {
  About: '#about',
  Products: '#categories',
  'Smart Home': '#smart-experience',
  Gallery: '#gallery',
  WhatsApp: 'https://wa.me/916383945610',
};

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-charcoal px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        <div>
          <p className="font-display mb-4 text-2xl tracking-[0.1em] text-cream">ARIHANT LIGHTS</p>
          <p className="max-w-xs text-sm leading-relaxed text-mist/50">
            Premium home-interior technology and luxury lifestyle solutions for modern residences.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-[0.2em] text-copper uppercase">Navigate</p>
          <ul className="space-y-2 text-sm text-mist/60">
            {Object.entries(links).map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition hover:text-cream" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-[0.2em] text-copper uppercase">Location</p>
          <p className="text-sm text-mist/60">India</p>
          <p className="mt-4 text-[10px] tracking-[0.2em] text-copper uppercase">Connect</p>
          <div className="mt-2 flex gap-4 text-sm text-mist/60">
            <a href="https://wa.me/916383945610" className="hover:text-cream" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="#" className="hover:text-cream">Instagram</a>
            <a href="#" className="hover:text-cream">LinkedIn</a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-white/6 pt-8 text-center text-[11px] tracking-widest text-mist/40 uppercase">
        © {new Date().getFullYear()} Arihant Lights. All rights reserved.
      </p>
    </footer>
  );
}
