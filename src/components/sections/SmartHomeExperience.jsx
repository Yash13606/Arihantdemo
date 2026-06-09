import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { label: 'Lights', x: '18%', y: '30%' },
  { label: 'Fans', x: '72%', y: '25%' },
  { label: 'Mirrors', x: '25%', y: '68%' },
  { label: 'Automation Panel', x: '68%', y: '65%' },
];

export default function SmartHomeExperience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const lines = sectionRef.current?.querySelectorAll('[data-line]');
      const dots = sectionRef.current?.querySelectorAll('[data-node]');
      const hub = sectionRef.current?.querySelector('[data-hub]');

      if (!lines?.length) return;

      gsap.set([...lines, ...dots, hub], { opacity: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(hub, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' });
          gsap.to(dots, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'back.out(1.4)',
            delay: 0.2,
          });
          gsap.to(lines, {
            opacity: 1,
            scaleX: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.4,
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="smart-experience"
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-ink"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,165,116,0.08),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-[11px] tracking-[0.25em] text-copper uppercase">Smart Living</p>
        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-light text-cream">
          One Touch. Complete Control.
        </h2>
      </div>

      <div className="relative mx-auto mt-16 aspect-[16/10] max-w-4xl rounded-3xl border border-white/8 bg-charcoal/80">
        <div
          data-hub
          className="absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-copper/50 bg-copper/10 text-[10px] tracking-widest text-copper uppercase opacity-0"
        >
          Hub
        </div>

        {nodes.map((node) => (
          <div key={node.label}>
            <div
              data-line
              className="absolute top-1/2 left-1/2 h-px origin-left scale-x-0 bg-linear-to-r from-copper/60 to-transparent opacity-0"
              style={{
                width: '28%',
                transform: `rotate(${node.x < '50%' ? -35 : 35}deg)`,
              }}
            />
            <div
              data-node
              className="absolute flex scale-75 flex-col items-center gap-2 opacity-0"
              style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/40 bg-copper/15 text-[9px] tracking-wider text-cream uppercase">
                {node.label.split(' ')[0]}
              </span>
              <span className="text-[10px] tracking-widest text-mist/60 uppercase">{node.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
