import { HERO_CAPTIONS } from '../data/heroCaptions';

export default function HeroCaptions({ activeId }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {HERO_CAPTIONS.map((caption) => {
        const isActive = caption.id === activeId;
        const isLeft = caption.side === 'left';

        return (
          <div
            key={caption.id}
            className={`absolute bottom-[12vh] w-[min(88vw,240px)] px-6 transition-all duration-500 md:bottom-[16vh] md:w-[25vw] md:max-w-[360px] md:min-w-[260px] md:px-10 lg:min-w-[280px] ${
              isLeft ? 'left-0 text-left md:left-[4vw]' : 'right-0 text-right md:right-[4vw]'
            } ${
              isActive
                ? 'translate-y-0 opacity-100'
                : isLeft
                  ? '-translate-x-4 translate-y-3 opacity-0'
                  : 'translate-x-4 translate-y-3 opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            <p className="mb-2 text-[9px] tracking-[0.22em] text-copper uppercase md:mb-2.5 md:text-[11px]">
              {caption.label}
            </p>
            <p className="text-[12px] leading-relaxed text-cream/85 md:text-[15px] md:leading-[1.65] lg:text-[16px]">
              {caption.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
