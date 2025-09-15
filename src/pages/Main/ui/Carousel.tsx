import { carouselContentList } from '@/shared/api/mock/carousel-content.mock.js';
import { useCallback, useMemo, useRef } from 'react';
import { useCarouselIndex } from '../hooks/useCarouselIndex';
import { useSwipe } from '../hooks/useSwipe';
import CarouselContent from './CarouselContent';
import CarouselPagination from './CarouselPagination';

const Carousel = () => {
  const { selectedId, setSelectedId, handleClick } = useCarouselIndex();
  const containerRef = useRef<HTMLElement | null>(null);
  const maxIndex = useMemo(() => carouselContentList.length - 1, []);

  const { handlers } = useSwipe({
    threshold: 40,
    onSwipeLeft: () => setSelectedId((prev) => Math.min(prev + 1, maxIndex)),
    onSwipeRight: () => setSelectedId((prev) => Math.max(prev - 1, 0)),
  });

  
  const onPrev = useCallback(() => {
    setSelectedId((prev) => (prev > 0 ? prev - 1 : prev));
  }, [setSelectedId]);

  const onNext = useCallback(() => {
    setSelectedId((prev) => (prev < maxIndex ? prev + 1 : prev));
  }, [maxIndex, setSelectedId]);

  return (
    <section
      className="relative flex h-[232px] max-w-[440px] overflow-hidden select-none"
      ref={containerRef}
      {...handlers}
    >
      <CarouselPagination
        contentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
      />
      <CarouselContent
        contentList={carouselContentList}
        selectedId={selectedId}
        handleClick={handleClick}
      />

      <button
        type="button"
        aria-label="이전 슬라이드"
        onClick={onPrev}
        disabled={selectedId === 0}
        className={`absolute left-2 top-1/2 z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        {"<"}
      </button>
      <button
        type="button"
        aria-label="다음 슬라이드"
        onClick={onNext}
        disabled={selectedId === maxIndex}
        className={`absolute right-2 top-1/2 z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        {">"}
      </button>
    </section>
  );
};

export default Carousel;
