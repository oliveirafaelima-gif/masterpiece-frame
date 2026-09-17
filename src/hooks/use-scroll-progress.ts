import { useEffect, useRef } from "react";

/**
 * Tracks how far the viewport has scrolled through a tall container, as a
 * 0..1 progress value, and reports it via `onProgress` — never via React
 * state, so consumers can write directly to the DOM (refs/CSS vars) each
 * frame without triggering re-renders. Reads are batched behind
 * requestAnimationFrame so scroll/resize events never do layout work directly.
 */
export function useScrollProgress(
  containerRef: React.RefObject<HTMLElement | null>,
  onProgress: (progress: number) => void,
) {
  const onProgressRef = useRef(onProgress);
  onProgressRef.current = onProgress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let lastValue = -1;

    const compute = () => {
      rafId = null;
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      const progress = Math.min(1, Math.max(0, raw));
      if (Math.abs(progress - lastValue) > 0.0009) {
        lastValue = progress;
        onProgressRef.current(progress);
      }
    };

    const requestTick = () => {
      if (rafId == null) rafId = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [containerRef]);
}
