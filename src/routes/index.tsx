import { createFileRoute } from "@tanstack/react-router";
import { ArtistHero } from "@/components/artist-hero";
import { FeaturedWorksCarousel } from "@/components/featured-works-carousel";
import { LancheELancheSection } from "@/components/lanche-e-lanche-section";
import { NewProjectsCarousel } from "@/components/new-projects-carousel";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruan D’Ornellas — Artista Plástico" },
      {
        name: "description",
        content: "Obras, instalações e projetos de Ruan D’Ornellas, artista plástico brasileiro.",
      },
      { property: "og:title", content: "Ruan D’Ornellas — Artista Plástico" },
      { property: "og:description", content: "Obras, instalações e projetos do artista." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <ArtistHero />

      <section className="page-shell py-16 sm:py-24">
        <p className="max-w-2xl font-display text-xl leading-relaxed text-foreground sm:text-2xl">
          Entre o cotidiano e o imaginário, Ruan D’Ornellas transforma cenas, objetos e símbolos da
          cultura brasileira em pintura. Flores, frutas, pássaros, azulejos, alimentos e elementos
          da religiosidade popular convivem em composições que aproximam natureza, memória e vida
          cotidiana.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Suas obras encontram poesia no que é familiar, revelando outras formas de olhar para
          aquilo que nos cerca.
        </p>
      </section>

      <FeaturedWorksCarousel />
      <LancheELancheSection />
      <NewProjectsCarousel />
    </div>
  );
}
