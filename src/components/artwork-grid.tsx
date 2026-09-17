import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { artworkFilters, artworks, type Artwork } from "@/data/artworks";
import { cn } from "@/lib/utils";

/**
 * Repeating rhythm for the editorial layout: a near-full-viewport "hero" slot
 * every 5 works, flanked by pairs of unequal widths with a slight vertical
 * offset — an evolution of the old uniform 3-column masonry, not a plain
 * grid. Spans only apply at `lg` so mobile/tablet just stack naturally.
 */
const LAYOUT_PATTERN = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3 lg:mt-16",
  "lg:col-span-4",
  "lg:col-span-2 lg:mt-10",
];

function ArtworkDialog({ artwork, emphasized }: { artwork: Artwork; emphasized?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <div className="relative overflow-hidden bg-muted">
            <img
              src={artwork.image}
              alt={artwork.title}
              loading="lazy"
              width={artwork.imageWidth}
              height={artwork.imageHeight}
              className={cn(
                "block w-full object-cover transition duration-700 group-hover:scale-[1.015]",
                emphasized ? "h-[58vh] sm:h-[82vh]" : "h-auto",
                artwork.position,
              )}
            />
            <div className="absolute inset-0 flex items-end bg-overlay opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <div className="w-full p-5 text-overlay-foreground sm:p-7">
                <h2 className="font-display text-3xl">{artwork.title}</h2>
                <p className="mt-2 text-xs uppercase">
                  {artwork.technique} · {artwork.year}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-baseline justify-between gap-4 pt-3 md:hidden">
            <h2 className="font-display text-xl">{artwork.title}</h2>
            <span className="shrink-0 text-xs text-muted-foreground">{artwork.year}</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-6xl overflow-y-auto border-border bg-background p-4 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(16rem,0.5fr)] lg:items-start">
          <img
            src={artwork.image}
            alt={artwork.title}
            width={artwork.imageWidth}
            height={artwork.imageHeight}
            className="max-h-[78vh] w-full object-contain"
          />
          <div className="pt-8 lg:pt-16">
            <p className="eyebrow">{artwork.series}</p>
            <DialogTitle className="mt-5 font-display text-4xl font-normal leading-tight sm:text-5xl">
              {artwork.title}
            </DialogTitle>
            <DialogDescription className="mt-5 leading-7 text-muted-foreground">
              {artwork.description}
            </DialogDescription>
            <dl className="mt-8 grid gap-3 border-t border-border pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Ano</dt>
                <dd>{artwork.year}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Técnica</dt>
                <dd>{artwork.technique}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Dimensões</dt>
                <dd>{artwork.dimensions}</dd>
              </div>
            </dl>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Wraps one grid item so it can fade in on scroll — each instance needs its own IntersectionObserver, so this has to be its own component rather than a hook called inside `.map()`. */
function RevealArticle({
  artwork,
  emphasized = false,
  className,
}: {
  artwork: Artwork;
  emphasized?: boolean;
  className?: string;
}) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <article ref={ref} className={cn("reveal-on-scroll", isVisible && "is-visible", className)}>
      <ArtworkDialog artwork={artwork} emphasized={emphasized} />
    </article>
  );
}

export function ArtworkGrid() {
  const [filter, setFilter] = useState<(typeof artworkFilters)[number]>("Todas");
  const filtered =
    filter === "Todas" ? artworks : artworks.filter((artwork) => artwork.technique === filter);
  // Confirmed/curated pieces (featured) lead the sequence, so the largest slots in the
  // rhythm land on real, settled works rather than on placeholder entries.
  const ordered = [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <>
      <div
        className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-y border-border py-4 sm:mt-16"
        aria-label="Filtrar obras por técnica"
      >
        {artworkFilters.map((item) => (
          <Button
            key={item}
            variant="filter"
            size="sm"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-9 lg:gap-y-20 lg:grid-flow-row-dense">
        {ordered.map((artwork, index) => (
          <RevealArticle
            key={artwork.id}
            artwork={artwork}
            emphasized={index % LAYOUT_PATTERN.length === 0}
            className={LAYOUT_PATTERN[index % LAYOUT_PATTERN.length]!}
          />
        ))}
      </div>
    </>
  );
}
