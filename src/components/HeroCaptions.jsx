import { HERO_CAPTIONS } from '../data/heroCaptions';

function captionMotion(caption, isActive) {
  const isLeft = caption.align === 'left';
  const isCentered = caption.position.includes('top-1/2');

  if (isActive) {
    return isCentered ? 'opacity-100 -translate-y-1/2 translate-x-0' : 'opacity-100 translate-x-0 translate-y-0';
  }

  if (isCentered) {
    return isLeft
      ? 'opacity-0 -translate-x-5 -translate-y-[calc(50%+10px)]'
      : 'opacity-0 translate-x-5 -translate-y-[calc(50%+10px)]';
  }

  return isLeft ? 'opacity-0 -translate-x-5 translate-y-2' : 'opacity-0 translate-x-5 translate-y-2';
}

export default function HeroCaptions({ activeId }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {HERO_CAPTIONS.map((caption) => {
        const isActive = caption.id === activeId;
        const isLeft = caption.align === 'left';

        return (
          <div
            key={caption.id}
            className={`absolute w-[min(92vw,300px)] px-5 transition-all duration-500 sm:w-[min(88vw,340px)] md:w-[28vw] md:max-w-[420px] md:min-w-[300px] md:px-8 lg:min-w-[320px] lg:max-w-[440px] ${caption.position} ${
              isLeft ? 'text-left' : 'text-right'
            } ${captionMotion(caption, isActive)}`}
            aria-hidden={!isActive}
          >
            <p className="mb-2.5 font-medium text-[12px] tracking-[0.2em] text-copper uppercase sm:text-[13px] md:mb-3 md:text-[15px] lg:text-[16px]">
              {caption.label}
            </p>
            <p className="text-[15px] leading-[1.6] text-cream drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-[16px] md:text-[18px] md:leading-[1.65] lg:text-[20px] lg:leading-[1.7]">
              {caption.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
