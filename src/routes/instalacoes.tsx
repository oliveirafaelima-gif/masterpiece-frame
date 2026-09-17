import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { installations } from "@/data/installations";

export const Route = createFileRoute("/instalacoes")({
  head: () => ({ meta: [
    { title: "Instalações — Ruan Dornellas" }, { name: "description", content: "Projetos espaciais e instalações de Ruan Dornellas." },
    { property: "og:title", content: "Instalações — Ruan Dornellas" }, { property: "og:description", content: "Projetos espaciais e instalações do artista." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: InstalacoesPage,
});

function InstalacoesPage() {
  return <div className="page-enter"><div className="page-shell"><PageIntro eyebrow="Espaço e matéria" title="Instalações" description="Projetos apresentados como narrativas espaciais. As informações desta seção são provisórias até o envio da documentação oficial." /></div>
    <div className="mt-16 border-t border-border sm:mt-24">{installations.map((item, index) => <article key={item.title} className="border-b border-border py-20 sm:py-28"><div className="page-shell"><div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16"><div><p className="eyebrow">0{index + 1} · {item.status}</p><h2 className="mt-5 font-display text-4xl sm:text-6xl">{item.title}</h2><dl className="mt-8 space-y-3 border-t border-border pt-5 text-sm"><div className="flex justify-between gap-3"><dt className="text-muted-foreground">Ano</dt><dd>{item.year}</dd></div><div className="flex justify-between gap-3"><dt className="text-muted-foreground">Local</dt><dd className="text-right">{item.venue}</dd></div></dl><p className="mt-8 leading-7 text-muted-foreground">{item.description}</p></div><img src={item.image} alt={`Visualização provisória da instalação ${item.title}`} loading="lazy" width={item.imageWidth} height={item.imageHeight} className="w-full" /></div>
      {index === 0 ? <div className="mt-12 grid aspect-video place-items-center border border-border bg-industrial"><div className="text-center text-muted-foreground"><Play className="mx-auto mb-4 h-8 w-8"/><p className="text-xs uppercase">Vídeo da instalação · YouTube ou Vimeo</p></div></div> : null}</div></article>)}</div></div>;
}