import { createFileRoute } from "@tanstack/react-router";
import { ArtworkGrid } from "@/components/artwork-grid";
import { PageIntro } from "@/components/page-intro";

export const Route = createFileRoute("/obras")({
  head: () => ({ meta: [
    { title: "Obras — Ruan D’Ornellas" }, { name: "description", content: "Seleção de pinturas e trabalhos de Ruan D’Ornellas." },
    { property: "og:title", content: "Obras — Ruan D’Ornellas" }, { property: "og:description", content: "Seleção de pinturas e trabalhos do artista." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ObrasPage,
});

function ObrasPage() {
  return <div className="page-shell page-enter"><PageIntro eyebrow="Trabalhos selecionados" title="Obras" description="Pintura, desenho e matéria como campos de investigação sobre memória, imaginário e identidade brasileira." /><ArtworkGrid /></div>;
}