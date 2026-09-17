import { useMemo, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

/**
 * Deterministic 0..1 pseudo-random value for a given integer seed.
 * Uses only integer bit operations (no Math.sin/Math.random) because
 * transcendental functions aren't guaranteed bit-identical between Node's
 * and the browser's JS engine — that mismatch was causing React SSR/CSR
 * hydration warnings on these inline style values.
 */
function seededRandom(seed: number) {
  let t = (seed ^ 0x9e3779b9) >>> 0;
  t = Math.imul(t ^ (t >>> 16), 0x21f0aaad);
  t = Math.imul(t ^ (t >>> 15), 0x735a2d97);
  t = (t ^ (t >>> 15)) >>> 0;
  return t / 4294967296;
}

function signedSeed(seed: number) {
  return seededRandom(seed) * 2 - 1;
}

type LetterSeedVars = CSSProperties & {
  "--sx"?: number;
  "--sy"?: number;
  "--sr"?: number;
  "--sxs"?: number;
  "--sys"?: number;
};

function buildLetterStyle(
  localIndex: number,
  count: number,
  char: string,
  seedBase: number,
): LetterSeedVars {
  const isSpacer = char === " " || char === "'" || char === "’";
  const damp = isSpacer ? 0.4 : 1;
  const center = (count - 1) / 2;
  const spread = (localIndex - center) * 25;
  const seed = localIndex + seedBase * 17;

  const jitterX = signedSeed(seed) * 46;
  const jitterY = signedSeed(seed + 100) * 52;
  const jitterR = signedSeed(seed + 200);
  const jitterScaleX = signedSeed(seed + 300);
  const jitterScaleY = signedSeed(seed + 400);

  return {
    "--sx": (spread + jitterX) * damp,
    "--sy": jitterY * damp,
    "--sr": (localIndex % 2 === 0 ? 1 : -1) * (7 + Math.abs(jitterR) * 11) * damp,
    "--sxs": jitterScaleX * 0.55 * damp,
    "--sys": jitterScaleY * 0.3 * damp,
  };
}

type ScrollTypographyProps = {
  /** The word/line this row renders. */
  text: string;
  /** Shared across every row so the letter-by-letter scroll stagger flows continuously between them. */
  lettersRef: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  /** Where this row's letters start in the shared `lettersRef` array. */
  indexOffset: number;
  className?: string;
};

/** One animated row of letters. Purely presentational — ArtistHero drives every frame by writing `--lp` on each span via `lettersRef`. */
export function ScrollTypography({
  text,
  lettersRef,
  indexOffset,
  className,
}: ScrollTypographyProps) {
  const characters = useMemo(() => text.split(""), [text]);

  return (
    <div
      className={cn("block whitespace-nowrap font-display leading-none", className)}
      aria-hidden="true"
    >
      {characters.map((char, localIndex) => (
        <span
          key={localIndex}
          ref={(el) => {
            lettersRef.current[indexOffset + localIndex] = el;
          }}
          className="hero-letter"
          style={buildLetterStyle(localIndex, characters.length, char, indexOffset)}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </div>
  );
}
