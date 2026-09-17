import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/obra-ciclica.jpg";
import { profile } from "@/data/profile";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ruan Dornellas — Artista Plástico" },
    { name: "description", content: "Obras, instalações e projetos de Ruan Dornellas, artista plástico brasileiro." },
    { property: "og:title", content: "Ruan Dornellas — Artista Plástico" },
    { property: "og:description", content: "Obras, instalações e projetos do artista." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="page-enter">
      <section className="mx-auto flex min-h-[55vh] max-w-[1600px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 lg:px-12">
        <p className="eyebrow">Rio de Janeiro · Brasil</p>
        <h1 className="mt-5 font-display text-6xl leading-[0.88] text-foreground sm:text-8xl lg:text-[9rem]">Ruan<br className="sm:hidden" /> Dornellas</h1>
        <p className="mt-8 text-xs uppercase text-muted-foreground sm:text-sm">{profile.tagline}</p>
      </section>
      <section className="mx-auto max-w-[1600px] px-5 pb-20 sm:px-8 lg:px-12">
        <Link to="/obras" className="group relative block min-h-[82vh] overflow-hidden border border-border bg-muted">
          <img src={heroImage} alt="Imagem provisória de destaque do portfólio" width={1280} height={1600} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.01]" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-x-0 bottom-0 grid gap-3 p-6 text-overlay-foreground sm:grid-cols-[1fr_auto] sm:items-end sm:p-10">
            <div><p className="eyebrow text-overlay-muted">Imagem provisória</p><h2 className="mt-2 font-display text-4xl sm:text-6xl">Estudo cíclico I</h2></div>
            <span className="text-xs uppercase">Ver obras →</span>
          </div>
        </Link>
      </section>
    </div>
  );
}
