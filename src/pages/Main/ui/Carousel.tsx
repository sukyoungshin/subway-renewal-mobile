import { carouselContentList } from '@/shared/api/mock/carousel-content.mock.js';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useCarouselIndex } from '../hooks/useCarouselIndex';
import CarouselContent from './CarouselContent';
import CarouselPagination from './CarouselPagination';

const Carousel = () => {
  const { selectedId, setSelectedId, handleClick } = useCarouselIndex();
  const containerRef = useRef<HTMLElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef<number>(0);
  const deltaXRef = useRef<number>(0);
  const threshold = 40;
  const maxIndex = useMemo(() => carouselContentList.length - 1, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    deltaXRef.current = 0;
    setIsDragging(true);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    deltaXRef.current = e.touches[0].clientX - startXRef.current;
  }, [isDragging]);

  const onTouchEnd = useCallback(() => {
    if (!isDragging) return;
    const delta = deltaXRef.current;
    if (Math.abs(delta) > threshold) {
      if (delta < 0 && selectedId < maxIndex) setSelectedId(selectedId + 1);
      if (delta > 0 && selectedId > 0) setSelectedId(selectedId - 1);
    }
    setIsDragging(false);
    deltaXRef.current = 0;
  }, [isDragging, maxIndex, selectedId, setSelectedId]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    deltaXRef.current = e.clientX - startXRef.current;
  }, [isDragging]);

  const onMouseUp = useCallback(() => {
    if (!isDragging) return;
    const delta = deltaXRef.current;
    if (Math.abs(delta) > threshold) {
      if (delta < 0 && selectedId < maxIndex) setSelectedId(selectedId + 1);
      if (delta > 0 && selectedId > 0) setSelectedId(selectedId - 1);
    }
    setIsDragging(false);
    deltaXRef.current = 0;
  }, [isDragging, maxIndex, selectedId, setSelectedId]);

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
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
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
