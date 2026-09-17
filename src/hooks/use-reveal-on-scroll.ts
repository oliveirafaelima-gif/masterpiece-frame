import { useEffect, useRef, useState } from "react";

/**
 * Fades an element in the first time it scrolls into view (never again after
 * that — the observer disconnects once triggered). Uses IntersectionObserver,
 * not a scroll listener, so it costs nothing outside of the browser's own
 * intersection checks. `prefers-reduced-motion` is handled globally in
 * styles.css (it zeroes the transition duration), so this hook doesn't need
 * to know about it — the element still becomes visible, just without the
 * animated transition.
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
