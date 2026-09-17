import type { CSSProperties } from "react";
import type { Artwork } from "@/data/artworks";

type ArtworkRevealProps = {
  artwork: Artwork;
  rootRef: React.RefObject<HTMLDivElement | null>;
  captionRef: React.RefObject<HTMLDivElement | null>;
};

const initialRevealStyle = { "--reveal": 0 } as CSSProperties;

/**
 * Sits behind the ScrollTypography letters and fills the sticky viewport.
 * The parent (ArtistHero) writes a single `--reveal` (0..1) custom property
 * on `rootRef` every animation frame; everything here reacts to that one
 * variable via CSS `calc()`, so no per-frame React work happens here at all.
 */
export function ArtworkReveal({ artwork, rootRef, captionRef }: ArtworkRevealProps) {
  return (
    <div ref={rootRef} className="absolute inset-0" style={initialRevealStyle}>
      <div
        className="absolute inset-0 overflow-hidden bg-muted"
        style={{
          opacity: "var(--reveal, 0)",
          clipPath: "inset(calc((1 - var(--reveal, 0)) * 9%))",
        }}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          width={artwork.imageWidth}
          height={artwork.imageHeight}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
          style={{ transform: "scale(calc(1.18 - var(--reveal, 0) * 0.18))" }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div
        ref={captionRef}
        className="absolute inset-x-0 bottom-0 grid gap-3 p-6 text-overlay-foreground sm:grid-cols-[1fr_auto] sm:items-end sm:p-10 lg:p-14"
        style={{ opacity: 0 }}
      >
        <div>
          <p className="eyebrow text-overlay-muted">{artwork.series}</p>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl">{artwork.title}</h2>
        </div>
        <dl className="flex gap-6 text-xs uppercase sm:justify-end">
          <div>
            <dt className="sr-only">Ano</dt>
            <dd>{artwork.year}</dd>
          </div>
          <div>
            <dt className="sr-only">Técnica</dt>
            <dd>{artwork.technique}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
