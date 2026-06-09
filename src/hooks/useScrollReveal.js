import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(deps = []) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets = el.querySelectorAll('[data-reveal]');
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: 48 });

      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            overwrite: true,
          });
        },
      });
    },
    { scope: ref, dependencies: deps }
  );

  return ref;
}
