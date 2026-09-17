import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";

import { ScrollTypography } from "@/components/scroll-typography";
import { ArtworkReveal } from "@/components/artwork-reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { artworks } from "@/data/artworks";
import { profile } from "@/data/profile";

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

const LETTER_STAGGER = 0.032;

const [firstWord = "", ...restWords] = profile.legalArtistName.split(" ");
const secondWord = restWords.join(" ");
const LETTER_COUNT = firstWord.length + secondWord.length;

/**
 * The opening of the homepage: the artist's name, rendered letter by letter,
 * transforms as the page scrolls through a tall pinned section and gives way
 * to the first artwork. Scroll position is the only source of truth for the
 * visual state (see useScrollProgress) — there is no independent timer, so
 * scrolling back up reverses the effect exactly.
 */
export function ArtistHero() {
  const reducedMotion = useReducedMotion();
  const featuredArtwork = artworks[0]!;

  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const lettersGroupRef = useRef<HTMLDivElement>(null);
  const artworkRootRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const updateScale = () => {
      const factor = Math.min(1, Math.max(0.45, window.innerWidth / 1600));
      sectionRef.current?.style.setProperty("--hero-scale", String(factor));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [reducedMotion]);

  const handleProgress = (p: number) => {
    const staggerSpan = LETTER_STAGGER * (LETTER_COUNT - 1);
    const denom = Math.max(0.0001, 1 - staggerSpan);

    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      const raw = (p - i * LETTER_STAGGER) / denom;
      const local = smoothstep(0, 1, raw);
      el.style.setProperty("--lp", local.toFixed(4));
    });

    if (lettersGroupRef.current) {
      lettersGroupRef.current.style.transform = `translate3d(0, ${(-p * 70).toFixed(2)}px, 0)`;
    }

    const secondaryOpacity = (1 - smoothstep(0, 0.22, p)).toFixed(3);
    if (eyebrowRef.current) eyebrowRef.current.style.opacity = secondaryOpacity;
    if (taglineRef.current) taglineRef.current.style.opacity = secondaryOpacity;
    if (hintRef.current) hintRef.current.style.opacity = (1 - smoothstep(0, 0.12, p)).toFixed(3);

    const reveal = smoothstep(0, 0.85, p);
    artworkRootRef.current?.style.setProperty("--reveal", reveal.toFixed(4));

    if (captionRef.current) {
      captionRef.current.style.opacity = smoothstep(0.5, 0.88, p).toFixed(3);
    }
  };

  useScrollProgress(sectionRef, handleProgress);

  if (reducedMotion) {
    return <StaticArtistIntro artwork={featuredArtwork} />;
  }

  return (
    <section ref={sectionRef} className="relative h-[260vh] sm:h-[300vh]">
      <div className="sticky top-16 h-[calc(100svh-4rem)] w-full overflow-hidden bg-background sm:top-20 sm:h-[calc(100svh-5rem)]">
        <ArtworkReveal artwork={featuredArtwork} rootRef={artworkRootRef} captionRef={captionRef} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
          <p ref={eyebrowRef} className="font-hand text-2xl text-muted-foreground sm:text-3xl">
            Rio de Janeiro · Brasil
          </p>

          <h1 className="relative m-0 mt-5 max-w-full">
            <span className="sr-only">{profile.legalArtistName}</span>
            <div ref={lettersGroupRef} aria-hidden="true" className="select-none">
              <ScrollTypography
                text={firstWord}
                lettersRef={lettersRef}
                indexOffset={0}
                className="text-center text-[14vw] uppercase text-foreground sm:text-[13vw]"
              />
              <ScrollTypography
                text={secondWord}
                lettersRef={lettersRef}
                indexOffset={firstWord.length}
                className="-mt-[1vw] text-center text-[14vw] uppercase text-foreground sm:text-[13vw]"
              />
            </div>
          </h1>

          <p ref={taglineRef} className="mt-8 text-xs uppercase text-muted-foreground sm:text-sm">
            {profile.tagline}
          </p>
        </div>

        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <div className="scroll-hint flex flex-col items-center gap-2">
            <span className="text-[0.65rem] uppercase tracking-[0.2em]">Role para explorar</span>
            <span aria-hidden="true" className="h-8 w-px bg-current" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** prefers-reduced-motion fallback: the same content, presented in normal document flow with no scroll-linked motion. */
function StaticArtistIntro({ artwork }: { artwork: (typeof artworks)[number] }) {
  return (
    <div className="page-enter">
      <section className="mx-auto flex min-h-[55vh] max-w-[1600px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 lg:px-12">
        <p className="font-hand text-2xl text-muted-foreground sm:text-3xl">
          Rio de Janeiro · Brasil
        </p>
        <h1 className="mt-5 font-display text-6xl uppercase leading-[0.88] text-foreground sm:text-8xl lg:text-[9rem]">
          {profile.legalArtistName}
        </h1>
        <p className="mt-8 text-xs uppercase text-muted-foreground sm:text-sm">{profile.tagline}</p>
      </section>
      <section className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-8 lg:px-12">
        <Link
          to="/obras"
          className="group relative block min-h-[82vh] overflow-hidden border border-border bg-muted"
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            width={artwork.imageWidth}
            height={artwork.imageHeight}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-x-0 bottom-0 grid gap-3 p-6 text-overlay-foreground sm:grid-cols-[1fr_auto] sm:items-end sm:p-10">
            <div>
              <p className="eyebrow text-overlay-muted">{artwork.series}</p>
              <h2 className="mt-2 font-display text-4xl sm:text-6xl">{artwork.title}</h2>
            </div>
            <span className="text-xs uppercase">Ver obras →</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
