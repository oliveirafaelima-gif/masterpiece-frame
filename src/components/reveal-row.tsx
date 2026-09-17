import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RevealRowProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  /** Sizing/shrink classes applied to every card, including the trailing "see all" card. */
  itemClassName: string;
  seeAllHref: string;
  seeAllLabel: string;
  /** How many cards are mounted up front (3 on desktop per the site's design). */
  initialCount?: number;
  /** How many additional cards each "next" reveals. */
  step?: number;
};

/**
 * A horizontally-scrollable row that starts with `initialCount` cards and
 * reveals `step` more each time "next" is pressed, until every item is
 * mounted — at which point a "see all" card appends to the row. Native
 * `overflow-x-auto` (not embla) so scrolling/dragging always works across
 * however many cards are currently mounted, with no dynamic-slide-count
 * bookkeeping needed.
 */
export function RevealRow<T>({
  items,
  renderItem,
  itemClassName,
  seeAllHref,
  seeAllLabel,
  initialCount = 3,
  step = 2,
}: RevealRowProps<T>) {
  const [visibleCount, setVisibleCount] = useState(() => Math.min(initialCount, items.length));
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const revealThreshold = Math.min(5, items.length);
  const showSeeAll = visibleCount >= revealThreshold;
  const visibleItems = items.slice(0, visibleCount);
  const hasMoreToReveal = visibleCount < items.length;

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [visibleCount, showSeeAll]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const handleNext = () => {
    if (hasMoreToReveal) {
      setVisibleCount((count) => Math.min(items.length, count + step));
      requestAnimationFrame(() => requestAnimationFrame(() => scrollByPage(1)));
    } else {
      scrollByPage(1);
    }
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {visibleItems.map((item, index) => (
          <div key={index} className={itemClassName}>
            {renderItem(item)}
          </div>
        ))}
        {showSeeAll && (
          <Link
            to={seeAllHref}
            className={cn(
              "group flex shrink-0 flex-col items-center justify-center gap-3 border border-border bg-muted text-center transition-colors hover:border-accent",
              itemClassName,
            )}
          >
            <span className="font-display text-2xl">{seeAllLabel}</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        )}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full"
          disabled={!canScrollPrev}
          onClick={() => scrollByPage(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full"
          disabled={!canScrollNext && !hasMoreToReveal}
          onClick={handleNext}
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>
    </div>
  );
}
