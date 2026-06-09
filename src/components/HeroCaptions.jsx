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
            className={`absolute bottom-[14vh] max-w-[240px] px-6 transition-all duration-500 md:max-w-[280px] md:px-10 ${
              isLeft ? 'left-0 text-left' : 'right-0 text-right'
            } ${
              isActive
                ? 'translate-y-0 opacity-100'
                : isLeft
                  ? '-translate-x-4 translate-y-3 opacity-0'
                  : 'translate-x-4 translate-y-3 opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            <p className="mb-1.5 text-[9px] tracking-[0.22em] text-copper uppercase md:text-[10px]">
              {caption.label}
            </p>
            <p className="text-[12px] leading-relaxed text-cream/85 md:text-[13px]">
              {caption.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
