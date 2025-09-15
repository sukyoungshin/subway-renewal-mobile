import { useCallback, useRef, useState } from "react";

interface UseSwipeOptions {
  threshold?: number; // 기본값 40
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const useSwipe = ({
  threshold = 40,
  onSwipeLeft,
  onSwipeRight,
}: UseSwipeOptions) => {
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);

  const onStart = useCallback((x: number) => {
    startXRef.current = x;
    deltaXRef.current = 0;
    setIsDragging(true);
  }, []);

  const onMove = useCallback(
    (x: number) => {
      if (!isDragging) return;
      deltaXRef.current = x - startXRef.current;
    },
    [isDragging]
  );

  const onEnd = useCallback(() => {
    if (!isDragging) return;
    const delta = deltaXRef.current;

    if (Math.abs(delta) > threshold) {
      if (delta < 0) onSwipeLeft?.();
      if (delta > 0) onSwipeRight?.();
    }

    setIsDragging(false);
    deltaXRef.current = 0;
  }, [isDragging, threshold, onSwipeLeft, onSwipeRight]);

  // 터치/마우스 이벤트 핸들러 묶어서 반환
  const handlers = {
    onTouchStart: (e: React.TouchEvent) => onStart(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => onMove(e.touches[0].clientX),
    onTouchEnd: onEnd,
    onMouseDown: (e: React.MouseEvent) => onStart(e.clientX),
    onMouseMove: (e: React.MouseEvent) => onMove(e.clientX),
    onMouseUp: onEnd,
    onMouseLeave: onEnd,
  };

  return { handlers, isDragging };
};
