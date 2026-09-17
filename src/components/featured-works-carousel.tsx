import { Link } from "@tanstack/react-router";

import { RevealRow } from "@/components/reveal-row";
import { artworks, type Artwork } from "@/data/artworks";
import { cn } from "@/lib/utils";

const ITEM_CLASS = "w-[78%] shrink-0 sm:w-[46%] lg:w-[31%]";

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link to="/obras" className="group block focus-visible:outline-none">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={artwork.image}
          alt={`Obra ${artwork.title}`}
          loading="lazy"
          width={artwork.imageWidth}
          height={artwork.imageHeight}
          className={cn(
            "block aspect-[4/5] h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]",
            artwork.position,
          )}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl">{artwork.title}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">{artwork.year}</span>
      </div>
      <p className="mt-1 text-xs uppercase text-muted-foreground">{artwork.series}</p>
    </Link>
  );
}

const featuredArtworks = artworks.filter((artwork) => artwork.featured);

export function FeaturedWorksCarousel() {
  return (
    <section className="page-shell py-20 sm:py-28">
      <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="eyebrow">Seleção</p>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl">Obras em destaque</h2>
        </div>
        <Link
          to="/obras"
          className="hidden shrink-0 text-xs uppercase text-muted-foreground transition-colors hover:text-accent sm:inline"
        >
          Ver todas →
        </Link>
      </div>

      <div className="mt-10">
        <RevealRow
          items={featuredArtworks}
          renderItem={(artwork) => <ArtworkCard artwork={artwork} />}
          itemClassName={ITEM_CLASS}
          seeAllHref="/obras"
          seeAllLabel="Ver todas as obras"
          initialCount={3}
          step={2}
        />
      </div>
    </section>
  );
}
