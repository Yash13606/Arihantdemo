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
            className={`absolute bottom-[10vh] w-[min(92vw,300px)] px-5 transition-all duration-500 sm:w-[min(88vw,340px)] md:bottom-[14vh] md:w-[28vw] md:max-w-[420px] md:min-w-[300px] md:px-8 lg:min-w-[320px] lg:max-w-[440px] ${
              isLeft ? 'left-0 text-left md:left-[3vw]' : 'right-0 text-right md:right-[3vw]'
            } ${
              isActive
                ? 'translate-y-0 opacity-100'
                : isLeft
                  ? '-translate-x-4 translate-y-3 opacity-0'
                  : 'translate-x-4 translate-y-3 opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            <p className="mb-2.5 font-medium text-[12px] tracking-[0.2em] text-copper uppercase sm:text-[13px] md:mb-3 md:text-[15px] lg:text-[16px]">
              {caption.label}
            </p>
            <p className="text-[15px] leading-[1.6] text-cream sm:text-[16px] md:text-[18px] md:leading-[1.65] lg:text-[20px] lg:leading-[1.7]">
              {caption.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
