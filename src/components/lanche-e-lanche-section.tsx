import { lancheELanche } from "@/data/lanche-e-lanche";

/**
 * Editorial treatment for the "Lanche é lanche" exhibition — deliberately not
 * an "image + title + paragraph" card. The critical text (Clarissa Diniz)
 * is set apart as its own quoted block, and the exhibition photo carries a
 * museum-style caption rather than living inside a generic content card.
 */
export function LancheELancheSection() {
  const { title, venue, startDate, endDate, photo, criticalText } = lancheELanche;

  return (
    <section className="border-y border-border py-20 sm:py-28">
      <div className="page-shell grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <figure className="m-0">
          <img
            src={photo.src}
            alt={photo.caption}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            className="block w-full border border-border object-cover"
          />
          <figcaption className="mt-3 text-xs text-muted-foreground">{photo.caption}</figcaption>
        </figure>

        <div>
          <p className="eyebrow">Exposição · {venue}</p>
          <h2 className="mt-3 font-display text-5xl sm:text-7xl">{title}</h2>
          <p className="mt-3 font-hand text-2xl text-muted-foreground">
            {startDate} – {endDate}
          </p>

          <blockquote className="mt-10 border-l border-accent pl-6">
            <p className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
              “{criticalText.quote}”
            </p>
            <footer className="mt-4 text-xs uppercase text-muted-foreground">
              — {criticalText.author}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
